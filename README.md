# FlightCheck ✈️

A digital flight checklist PWA for Cessna 172P training at NICE AIR, Reid-Hillview Airport (RHV), San Jose, CA. Built for use on iPhone/iPad during flight training — works fully offline after the first load.

**Aircraft:** N225AN · Cessna 172P · Lycoming O-320-D2J · 160 hp

---

## Features

- **19 flight phases** covering preflight through tie-down, plus V-speeds and RHV radio frequencies
- **Expandable sub-items** — e.g. AROW documents each have their own checkbox
- **Beginner-friendly notes** on key items explaining what to do and why
- **Progress tracking** — per-phase badge and overall progress bar
- **Offline-first PWA** — install to home screen, works without internet
- **Auto-update detection** — banner appears when a new version is deployed
- **Multi-aircraft ready** — add new aircraft by dropping in a new data file

## Checklist Phases

| # | Phase | Description |
|---|-------|-------------|
| 1 | Preflight Checks | Cockpit, Empennage, Wings, Nose |
| 2 | Passenger Briefing | Safety brief, control exchange callout |
| 3 | Before Engine Start | Seats, avionics, circuit breakers |
| 4 | Starting Engine | Prime through radio call |
| 5 | Taxi Check | Brakes, AI, turn coordinator |
| 6 | Runup Check | Magnetos, carb heat, ammeter |
| 7 | Emergency Briefing | Engine failure on runway / below / above TPA |
| 8 | Departure Briefing | Frequency, route, altitude |
| 9 | Before Takeoff | Carb heat OFF, lights, transponder |
| 10 | After Takeoff | Climb speed, mixture |
| 11 | Cruise Check | Pitch, power, trim, mixture |
| 12 | Arrival Briefing (AABC) | Approach, altimeter, nav, radio |
| 13 | Descent Check | Fuel, mixture, carb heat |
| 14 | Before Landing (GUMPFS) | Gas, mixture, flaps |
| 15 | After Landing | Lights, flaps, transponder |
| 16 | Engine Shutdown | Mixture cutoff, master off |
| 17 | Airplane Tie-Down | Chocks, tie-downs, pitot cover |
| 18 | V-Speeds (KIAS) | Vr 55 · Vx 60 · Vy 76 · Vfe 85 · Vne 160 · Vg 65 |
| 19 | RHV Frequencies | ATIS 125.20 · Ground 121.65 · Tower 119.80/126.10 |

---

## Tech Stack

Pure static files — no build step, no Node.js, no frameworks.

```
index.html          App shell, two-view SPA (home + checklist)
style.css           All styles, mobile-first
app.js              State management, rendering, event handling
data/cessna172p.js  Aircraft data (AIRCRAFT_DATABASE global array)
service-worker.js   Offline caching (cache-first)
manifest.json       PWA manifest for home screen install
icons/icon.svg      App icon
```

## Adding a New Aircraft

1. Create `data/your-aircraft.js` following the same `AIRCRAFT_DATABASE` array structure as `cessna172p.js`
2. Add `<script src="data/your-aircraft.js"></script>` to `index.html` before `app.js`
3. The home screen will automatically show the new aircraft card

## Deployment

Hosted on **Cloudflare Pages** — every push to `main` auto-deploys in ~30 seconds.

```bash
git add .
git commit -m "your message"
git push
```

Users see a "New version available — Reload" banner automatically when a new version is live. The `⟳` button on the home screen manually triggers an update check.

### Service Worker Notes

- Cache name is versioned (e.g. `flightcheck-v4`) — bump it when deploying to force a cache refresh on all clients
- `start_url` in `manifest.json` is `./` (not `./index.html`) — Cloudflare Pages redirects `/index.html` to `/` via its clean-URL feature, which caused iOS standalone PWA to fail with a redirect error

## Local Development

No build step — open directly or use any static file server:

```bash
# Python
python3 -m http.server 8080

# Node (if installed)
npx serve .
```

The service worker requires HTTPS or `localhost` to register. On `file://` it silently skips and the app still works normally.

---

*Checklist transcribed from the NICE AIR laminated quick-reference card for N225AN.*
