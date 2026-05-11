'use strict';

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  currentAircraftId: null,
  openPhaseIds: new Set(),
  openGroupIds: new Set(),
  // checkedItems: { [aircraftId]: Set<itemId> }  — loaded from localStorage below
  checkedItems: {},
};

// ─── Storage helpers ──────────────────────────────────────────────────────────
function storageKey(aircraftId) {
  return `flightcheck-v1-${aircraftId}`;
}

function loadChecked(aircraftId) {
  try {
    const raw = localStorage.getItem(storageKey(aircraftId));
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function saveChecked(aircraftId) {
  try {
    localStorage.setItem(
      storageKey(aircraftId),
      JSON.stringify([...state.checkedItems[aircraftId]])
    );
  } catch {
    // Storage full or private mode — silently continue
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getAircraft(id) {
  return AIRCRAFT_DATABASE.find((a) => a.id === id);
}

function allPhaseItems(phase) {
  const result = [];
  for (const item of (phase.items || [])) {
    if (item.subitems && item.subitems.length > 0) {
      result.push(...item.subitems);
    } else {
      result.push(item);
    }
  }
  return result;
}

function countChecked(aircraftId, phase) {
  const checked = state.checkedItems[aircraftId] || new Set();
  return allPhaseItems(phase).filter((item) => checked.has(item.id)).length;
}

function totalItems(aircraft) {
  return aircraft.phases.reduce((sum, p) => sum + allPhaseItems(p).length, 0);
}

function totalChecked(aircraft) {
  return aircraft.phases.reduce((sum, p) => sum + countChecked(aircraft.id, p), 0);
}

// ─── SVG icons ────────────────────────────────────────────────────────────────
const GROUP_CHECK_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const CHECKMARK_SVG = `
<svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5"
    stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const BACK_ARROW_SVG = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const PLANE_SVG = `
<svg class="logo-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="currentColor"/>
</svg>`;

// ─── Render: Home view ────────────────────────────────────────────────────────
function renderHome() {
  const list = document.getElementById('aircraft-list');
  list.innerHTML = AIRCRAFT_DATABASE.map((aircraft) => {
    const checked = totalChecked(aircraft);
    const total = totalItems(aircraft);
    const regLine = aircraft.registration
      ? `<p class="aircraft-card-reg">${aircraft.registration}</p>`
      : '';
    return `
      <div class="aircraft-card" data-aircraft-id="${aircraft.id}" role="button" tabindex="0"
           aria-label="Open ${aircraft.name} checklist">
        <div class="aircraft-card-icon">✈️</div>
        <div class="aircraft-card-info">
          <p class="aircraft-card-name">${aircraft.name}</p>
          ${regLine}
          <p class="aircraft-card-desc">${aircraft.description}</p>
        </div>
        <div class="aircraft-card-stats">
          <span class="aircraft-phase-count">${aircraft.phases.length} phases</span>
          <span class="aircraft-card-arrow">›</span>
        </div>
      </div>`;
  }).join('');
}

// ─── Render: Checklist view ───────────────────────────────────────────────────
function renderChecklist(aircraft) {
  document.getElementById('checklist-aircraft-name').textContent = aircraft.name;
  updateProgress(aircraft);
  renderPhases(aircraft);
}

function updateProgress(aircraft) {
  const checked = totalChecked(aircraft);
  const total = totalItems(aircraft);
  const pct = total === 0 ? 0 : Math.round((checked / total) * 100);

  document.getElementById('checklist-progress-text').textContent =
    `${checked} of ${total} items complete`;
  document.getElementById('progress-fill').style.width = pct + '%';
}

function renderPhases(aircraft) {
  const container = document.getElementById('phases-container');
  container.innerHTML = aircraft.phases.map((phase) => renderPhase(aircraft, phase)).join('');
}

function renderPhase(aircraft, phase) {
  const checked = countChecked(aircraft.id, phase);
  const total = allPhaseItems(phase).length;
  const isOpen = state.openPhaseIds.has(phase.id);
  const isComplete = checked === total && total > 0;
  const inProgress = checked > 0 && !isComplete;

  const badgeClass = isComplete ? 'complete' : inProgress ? 'in-progress' : '';
  const badgeLabel = isComplete ? `✓ ${total}` : `${checked}/${total}`;

  const completeBanner = isComplete
    ? `<div class="phase-complete-banner">✅ Phase complete — well done!</div>`
    : '';

  return `
    <div class="phase-card ${isOpen ? 'open' : ''} ${isComplete ? 'complete' : ''}"
         data-phase-id="${phase.id}">
      <div class="phase-header" role="button" tabindex="0"
           aria-expanded="${isOpen}" aria-label="${phase.name}">
        <span class="phase-icon">${phase.icon}</span>
        <span class="phase-name">${phase.name}</span>
        <span class="phase-badge ${badgeClass}">${badgeLabel}</span>
        <span class="phase-chevron">›</span>
      </div>
      <div class="phase-content" ${isOpen ? '' : 'aria-hidden="true"'}>
        <div class="phase-content-inner">
          ${renderItems(aircraft.id, phase.items)}
          ${completeBanner}
        </div>
      </div>
    </div>`;
}

function renderItems(aircraftId, items) {
  const checked = state.checkedItems[aircraftId] || new Set();
  let html = '';
  let lastCategory = null;

  for (const item of items) {
    if (item.category && item.category !== lastCategory) {
      html += `<div class="item-category-header">${item.category}</div>`;
      lastCategory = item.category;
    }

    if (item.subitems && item.subitems.length > 0) {
      html += renderGroupItem(aircraftId, item, checked);
    } else {
      html += renderSimpleItem(aircraftId, item, checked);
    }
  }

  return html;
}

function renderSimpleItem(aircraftId, item, checked) {
  const isChecked = checked.has(item.id);
  const noteHtml = item.note ? `<p class="item-note">${item.note}</p>` : '';
  const actionHtml = item.action ? `<span class="item-action">${item.action}</span>` : '';
  return `
    <label class="checklist-item ${isChecked ? 'checked' : ''}"
           data-item-id="${item.id}" data-aircraft-id="${aircraftId}">
      <input type="checkbox" ${isChecked ? 'checked' : ''}
             data-item-id="${item.id}" data-aircraft-id="${aircraftId}"
             aria-label="${item.text}${item.action ? ' — ' + item.action : ''}">
      <div class="custom-checkbox">${isChecked ? CHECKMARK_SVG : ''}</div>
      <div class="item-body">
        <div class="item-row">
          <span class="item-text">${item.text}</span>
          ${actionHtml}
        </div>
        ${noteHtml}
      </div>
    </label>`;
}

function renderGroupItem(aircraftId, item, checked) {
  const totalSubs = item.subitems.length;
  const checkedSubs = item.subitems.filter((s) => checked.has(s.id)).length;
  const isOpen = state.openGroupIds.has(item.id);
  const isComplete = checkedSubs === totalSubs && totalSubs > 0;
  const isPartial = checkedSubs > 0 && !isComplete;

  const statusClass = isComplete ? 'complete' : isPartial ? 'partial' : '';
  const statusContent = isComplete ? GROUP_CHECK_SVG : isPartial ? '–' : '';
  const noteHtml = item.note ? `<p class="item-note">${item.note}</p>` : '';

  const subitemsHtml = item.subitems.map((sub) => {
    const isChecked = checked.has(sub.id);
    const subNoteHtml = sub.note ? `<p class="item-note">${sub.note}</p>` : '';
    return `
      <label class="checklist-item subitem ${isChecked ? 'checked' : ''}"
             data-item-id="${sub.id}" data-aircraft-id="${aircraftId}">
        <input type="checkbox" ${isChecked ? 'checked' : ''}
               data-item-id="${sub.id}" data-aircraft-id="${aircraftId}"
               aria-label="${sub.text}">
        <div class="custom-checkbox">${isChecked ? CHECKMARK_SVG : ''}</div>
        <div class="item-body">
          <div class="item-row">
            <span class="item-text">${sub.text}</span>
          </div>
          ${subNoteHtml}
        </div>
      </label>`;
  }).join('');

  return `
    <div class="item-group ${isOpen ? 'open' : ''}" data-group-id="${item.id}" data-aircraft-id="${aircraftId}">
      <div class="item-group-header" role="button" tabindex="0"
           aria-expanded="${isOpen}" aria-label="${item.text} — ${item.action}">
        <div class="group-status ${statusClass}">${statusContent}</div>
        <div class="item-body">
          <div class="item-row">
            <span class="item-text">${item.text}</span>
            <span class="item-action">${item.action}</span>
          </div>
          ${noteHtml}
        </div>
        <span class="group-chevron">›</span>
      </div>
      <div class="subitems-list" ${isOpen ? '' : 'aria-hidden="true"'}>
        ${subitemsHtml}
      </div>
    </div>`;
}

// ─── Toggle item ──────────────────────────────────────────────────────────────
function toggleItem(aircraftId, itemId, labelEl) {
  if (!state.checkedItems[aircraftId]) {
    state.checkedItems[aircraftId] = new Set();
  }
  const checked = state.checkedItems[aircraftId];
  const isNowChecked = !checked.has(itemId);

  if (isNowChecked) {
    checked.add(itemId);
  } else {
    checked.delete(itemId);
  }

  // Update DOM for this item
  const cb = labelEl.querySelector('input[type="checkbox"]');
  const customCb = labelEl.querySelector('.custom-checkbox');
  if (isNowChecked) {
    labelEl.classList.add('checked');
    cb.checked = true;
    customCb.innerHTML = CHECKMARK_SVG;
  } else {
    labelEl.classList.remove('checked');
    cb.checked = false;
    customCb.innerHTML = '';
  }

  // Refresh parent group status if this is a subitem
  const groupEl = labelEl.closest('.item-group');
  if (groupEl) refreshGroupStatus(aircraftId, groupEl);

  // Find and refresh the parent phase card
  const phaseCard = labelEl.closest('.phase-card');
  if (phaseCard) {
    const phaseId = phaseCard.dataset.phaseId;
    const aircraft = getAircraft(aircraftId);
    const phase = aircraft.phases.find((p) => p.id === phaseId);
    if (phase) refreshPhaseHeader(aircraftId, phaseCard, phase);
  }

  saveChecked(aircraftId);
  updateProgress(getAircraft(aircraftId));
}

function refreshPhaseHeader(aircraftId, phaseCard, phase) {
  const checked = countChecked(aircraftId, phase);
  const total = allPhaseItems(phase).length;
  const isComplete = checked === total && total > 0;
  const inProgress = checked > 0 && !isComplete;

  const badge = phaseCard.querySelector('.phase-badge');
  badge.textContent = isComplete ? `✓ ${total}` : `${checked}/${total}`;
  badge.className = `phase-badge ${isComplete ? 'complete' : inProgress ? 'in-progress' : ''}`;

  phaseCard.classList.toggle('complete', isComplete);

  // Update or remove the complete banner
  const inner = phaseCard.querySelector('.phase-content-inner');
  if (inner) {
    let banner = inner.querySelector('.phase-complete-banner');
    if (isComplete && !banner) {
      banner = document.createElement('div');
      banner.className = 'phase-complete-banner';
      banner.textContent = '✅ Phase complete — well done!';
      inner.appendChild(banner);
    } else if (!isComplete && banner) {
      banner.remove();
    }
  }
}

// ─── Toggle group accordion ───────────────────────────────────────────────────
function toggleGroup(groupId, groupEl) {
  const isOpen = state.openGroupIds.has(groupId);
  if (isOpen) {
    state.openGroupIds.delete(groupId);
    groupEl.classList.remove('open');
    groupEl.querySelector('.subitems-list').setAttribute('aria-hidden', 'true');
    groupEl.querySelector('.item-group-header').setAttribute('aria-expanded', 'false');
  } else {
    state.openGroupIds.add(groupId);
    groupEl.classList.add('open');
    groupEl.querySelector('.subitems-list').removeAttribute('aria-hidden');
    groupEl.querySelector('.item-group-header').setAttribute('aria-expanded', 'true');
  }
}

function refreshGroupStatus(aircraftId, groupEl) {
  const groupId = groupEl.dataset.groupId;
  const aircraft = getAircraft(aircraftId);
  let groupItem = null;
  for (const phase of aircraft.phases) {
    groupItem = (phase.items || []).find((i) => i.id === groupId);
    if (groupItem) break;
  }
  if (!groupItem || !groupItem.subitems) return;

  const checked = state.checkedItems[aircraftId] || new Set();
  const totalSubs = groupItem.subitems.length;
  const checkedSubs = groupItem.subitems.filter((s) => checked.has(s.id)).length;
  const isComplete = checkedSubs === totalSubs && totalSubs > 0;
  const isPartial = checkedSubs > 0 && !isComplete;

  const statusEl = groupEl.querySelector('.group-status');
  statusEl.className = `group-status${isComplete ? ' complete' : isPartial ? ' partial' : ''}`;
  statusEl.innerHTML = isComplete ? GROUP_CHECK_SVG : isPartial ? '–' : '';
}

// ─── Toggle phase accordion ───────────────────────────────────────────────────
function togglePhase(phaseId, phaseCard) {
  const isOpen = state.openPhaseIds.has(phaseId);
  if (isOpen) {
    state.openPhaseIds.delete(phaseId);
    phaseCard.classList.remove('open');
    const content = phaseCard.querySelector('.phase-content');
    content.setAttribute('aria-hidden', 'true');
    phaseCard.querySelector('.phase-header').setAttribute('aria-expanded', 'false');
  } else {
    state.openPhaseIds.add(phaseId);
    phaseCard.classList.add('open');
    const content = phaseCard.querySelector('.phase-content');
    content.removeAttribute('aria-hidden');
    phaseCard.querySelector('.phase-header').setAttribute('aria-expanded', 'true');
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function showView(viewId) {
  document.querySelectorAll('.view').forEach((v) => {
    v.classList.toggle('hidden', v.id !== viewId);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function openAircraft(aircraftId) {
  const aircraft = getAircraft(aircraftId);
  if (!aircraft) return;

  state.currentAircraftId = aircraftId;
  if (!state.checkedItems[aircraftId]) {
    state.checkedItems[aircraftId] = loadChecked(aircraftId);
  }

  renderChecklist(aircraft);
  showView('checklist-view');
}

function goHome() {
  state.currentAircraftId = null;
  state.openPhaseIds.clear();
  state.openGroupIds.clear();
  showView('home-view');
}

// ─── Reset modal ──────────────────────────────────────────────────────────────
function showResetModal() {
  document.getElementById('reset-modal').classList.remove('hidden');
}

function hideResetModal() {
  document.getElementById('reset-modal').classList.add('hidden');
}

function confirmReset() {
  const id = state.currentAircraftId;
  if (!id) return;
  state.checkedItems[id] = new Set();
  state.openPhaseIds.clear();
  state.openGroupIds.clear();
  localStorage.removeItem(storageKey(id));
  hideResetModal();
  renderChecklist(getAircraft(id));
}

// ─── Event delegation ─────────────────────────────────────────────────────────
function bindEvents() {
  // Home: aircraft card tap
  document.getElementById('aircraft-list').addEventListener('click', (e) => {
    const card = e.target.closest('[data-aircraft-id]');
    if (card) openAircraft(card.dataset.aircraftId);
  });

  // Back button
  document.getElementById('back-btn').addEventListener('click', goHome);

  // Reset button
  document.getElementById('reset-btn').addEventListener('click', showResetModal);

  // Modal: cancel
  document.getElementById('modal-cancel').addEventListener('click', hideResetModal);

  // Modal: confirm reset
  document.getElementById('modal-confirm').addEventListener('click', confirmReset);

  // Modal overlay click (outside modal box)
  document.getElementById('reset-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) hideResetModal();
  });

  // Phase header toggle (via event delegation on phases container)
  document.getElementById('phases-container').addEventListener('click', (e) => {
    // Checklist item checkbox (including subitems)
    const label = e.target.closest('.checklist-item');
    if (label) {
      // preventDefault stops the browser from synthesizing a second click on
      // the hidden <input>, which would cause the state to toggle twice (no-op).
      e.preventDefault();
      const { itemId, aircraftId } = label.dataset;
      toggleItem(aircraftId, itemId, label);
      return;
    }

    // Group header — expand/collapse subitems
    const groupHeader = e.target.closest('.item-group-header');
    if (groupHeader) {
      const groupEl = groupHeader.closest('.item-group');
      toggleGroup(groupEl.dataset.groupId, groupEl);
      return;
    }

    // Phase header
    const header = e.target.closest('.phase-header');
    if (header) {
      const phaseCard = header.closest('.phase-card');
      togglePhase(phaseCard.dataset.phaseId, phaseCard);
    }
  });

  // Keyboard: Enter/Space on aircraft card
  document.getElementById('aircraft-list').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('[data-aircraft-id]');
      if (card) { e.preventDefault(); openAircraft(card.dataset.aircraftId); }
    }
  });

  // Keyboard: Enter/Space on phase header
  document.getElementById('phases-container').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const header = e.target.closest('.phase-header');
      if (header) {
        e.preventDefault();
        const phaseCard = header.closest('.phase-card');
        togglePhase(phaseCard.dataset.phaseId, phaseCard);
      }
    }
  });
}

// ─── Service Worker registration & update handling ────────────────────────────
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  // Track whether a SW was already in control before this page load.
  // If so, a controllerchange means new content is available (not a first install).
  const hadController = !!navigator.serviceWorker.controller;

  navigator.serviceWorker.register('./service-worker.js')
    .then((reg) => {
      // Manual "check for update" button
      document.getElementById('update-btn').addEventListener('click', () => {
        const btn = document.getElementById('update-btn');
        btn.classList.add('spinning');
        reg.update().finally(() => {
          setTimeout(() => btn.classList.remove('spinning'), 800);
        });
      });
    })
    .catch(() => {
      // SW registration failed (e.g., file:// protocol) — app still works online
    });

  // When a new SW takes control (skipWaiting + claim in service-worker.js),
  // show the update banner so the user can reload at a safe moment.
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hadController) showUpdateBanner();
  });
}

function showUpdateBanner() {
  const banner = document.getElementById('update-banner');
  if (banner) banner.classList.remove('hidden');
  document.getElementById('update-dismiss').addEventListener('click', () => {
    banner.classList.add('hidden');
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  renderHome();
  bindEvents();
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', init);
