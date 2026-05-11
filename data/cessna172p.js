// Cessna 172P Checklist — N225AN (NICE AIR)
// Transcribed from the NICE AIR laminated quick-reference card for N225AN.

const AIRCRAFT_DATABASE = [
  {
    id: 'cessna-172p',
    name: 'Cessna 172 P',
    registration: 'N225AN',
    description: 'Lycoming O-320-D2J · 160 hp · Standard trainer',
    phases: [

      // ─── 1. PREFLIGHT CHECKS ────────────────────────────────────────────────
      {
        id: 'preflight',
        name: 'PREFLIGHT CHECKS',
        icon: '🔍',
        items: [
          {
            id: 'pf01', category: 'COCKPIT', text: 'Documents', action: 'AROW',
            note: 'FAA requires all four documents aboard before every flight. Tap each one as you verify it.',
            subitems: [
              { id: 'pf01a', text: 'A — Airworthiness Certificate', note: 'Issued by the FAA; must be displayed in the aircraft at all times. It never expires as long as the aircraft is maintained per FAA requirements.' },
              { id: 'pf01b', text: 'R — Registration Certificate', note: 'Proves N225AN is registered with the FAA. Check the expiry date — it must be current for legal flight.' },
              { id: 'pf01c', text: 'O — Operating Handbook (POH)', note: 'The official pilot\'s manual for this exact aircraft. Contains limitations, normal and emergency procedures, and performance charts.' },
              { id: 'pf01d', text: 'W — Weight & Balance', note: 'Current W&B data for N225AN. Before each flight verify the loaded CG is within the approved envelope for your fuel and passenger load.' },
            ],
          },
          { id: 'pf02', category: 'COCKPIT', text: 'Tach/ Hobb', action: 'Note', note: 'Record both readings before engine start — used for logging engine time and scheduling maintenance intervals.' },
          { id: 'pf03', category: 'COCKPIT', text: 'Control Lock', action: 'Remove', note: 'The red control lock blocks the yoke and rudder pedals. Remove it and stow it so it cannot jam the controls in flight.' },
          { id: 'pf04', category: 'COCKPIT', text: 'Ignition Switch', action: 'OFF' },
          { id: 'pf05', category: 'COCKPIT', text: 'Turn Coordinator', action: 'White', note: 'The white "OFF" flag should be visible before electrical power is applied, confirming the gyro was not already spinning.' },
          { id: 'pf06', category: 'COCKPIT', text: 'Master Switch', action: 'ON', note: 'Battery and alternator buses are now live. Work efficiently — avoid draining the battery before engine start.' },
          { id: 'pf07', category: 'COCKPIT', text: 'Fuel Quantity', action: 'Check Level', note: 'Fuel gauges can be inaccurate. Always verify fuel level visually at the fuel caps as well.' },
          { id: 'pf08', category: 'COCKPIT', text: 'Flaps', action: 'Down' },
          { id: 'pf09', category: 'COCKPIT', text: 'Turn Coordinator', action: 'No White', note: 'The "OFF" flag should disappear within ~1 minute, confirming the electric gyro spun up normally.' },
          { id: 'pf10', category: 'COCKPIT', text: 'Pitot Heat', action: 'As Needed' },
          { id: 'pf11', category: 'COCKPIT', text: 'Lights', action: 'As Needed' },
          { id: 'pf12', category: 'COCKPIT', text: 'Master Switch', action: 'OFF' },
          { id: 'pf13', category: 'COCKPIT', text: 'Fuel Selector', action: 'BOTH' },

          { id: 'pf14', category: 'LEFT FUSELAGE', text: 'Baggage Door', action: 'Lock w/Key' },

          { id: 'pf15', category: 'EMPENNAGE', text: 'Control Surfaces', action: 'Check' },
          { id: 'pf16', category: 'EMPENNAGE', text: 'Tail Tie-Down', action: 'Disconnect' },

          { id: 'pf17', category: 'RIGHT WING', text: 'Flap', action: 'Check' },
          { id: 'pf18', category: 'RIGHT WING', text: 'Aileron', action: 'Check Free' },
          { id: 'pf19', category: 'RIGHT WING', text: 'Wing Tie-Down', action: 'Disconnect' },
          { id: 'pf20', category: 'RIGHT WING', text: 'Main wheel Tire', action: 'Check' },
          { id: 'pf21', category: 'RIGHT WING', text: 'Brake/Pads', action: 'Check' },
          { id: 'pf22', category: 'RIGHT WING', text: 'Fuel Sump', action: 'Drain/Check', note: 'Drain fuel from the sump into a tester cup. Water appears as clear bubbles at the bottom. Drain until fuel is clear blue.' },
          { id: 'pf23', category: 'RIGHT WING', text: 'Fuel Quantity', action: 'Visual Check' },

          { id: 'pf24', category: 'NOSE', text: 'Oil', action: '≥ 4 QT', note: 'Minimum for flight is 4 quarts; optimal range is 6–8 qt. Check with the dipstick after the engine has been off a few minutes.' },
          { id: 'pf25', category: 'NOSE', text: 'Fuel Strainer', action: 'Drain', note: 'The strainer drain is under the nose cowl. Drain until fuel runs clear — water contamination can stop an engine mid-flight.' },
          { id: 'pf26', category: 'NOSE', text: 'Prop & Spinner', action: 'Check' },
          { id: 'pf27', category: 'NOSE', text: 'Air Inlets', action: 'Check' },
          { id: 'pf28', category: 'NOSE', text: 'Alternator Belt', action: 'Check', note: 'Check for cracks or fraying. A broken belt stops alternator charging — the aircraft would run on battery only.' },
          { id: 'pf29', category: 'NOSE', text: 'Carb Air Filter', action: 'Check', note: 'A clogged filter reduces engine power. Confirm it is seated properly and free of debris or insects.' },
          { id: 'pf30', category: 'NOSE', text: 'Nose Wheel', action: 'Check' },
          { id: 'pf31', category: 'NOSE', text: 'Static Source', action: 'Check', note: 'Small hole on the fuselage side. Must be unobstructed — it feeds the altimeter, VSI, and airspeed indicator.' },

          { id: 'pf32', category: 'LEFT WING', text: 'Pitot Tube', action: 'Check', note: 'Remove pitot cover if installed. Confirm the opening is clear — a blocked pitot causes a false (stuck) airspeed reading.' },
          { id: 'pf33', category: 'LEFT WING', text: 'Fuel Vent', action: 'Check' },
          { id: 'pf34', category: 'LEFT WING', text: 'Stall Warning', action: 'Check' },
          { id: 'pf35', category: 'LEFT WING', text: 'Flap', action: 'Check' },
          { id: 'pf36', category: 'LEFT WING', text: 'Aileron', action: 'Check Free' },
          { id: 'pf37', category: 'LEFT WING', text: 'Wing Tie-Down', action: 'Disconnect' },
          { id: 'pf38', category: 'LEFT WING', text: 'Main wheel Tire', action: 'Check' },
          { id: 'pf39', category: 'LEFT WING', text: 'Brake/Pads', action: 'Check' },
          { id: 'pf40', category: 'LEFT WING', text: 'Fuel Sump', action: 'Drain/Check', note: 'Same as right wing — drain until clear. Always check both sumps on every preflight.' },
          { id: 'pf41', category: 'LEFT WING', text: 'Fuel Quantity', action: 'Visual Check' },
        ],
      },

      // ─── 2. PASSENGER BRIEFING ──────────────────────────────────────────────
      {
        id: 'passenger-briefing',
        name: 'PASSENGER BRIEFING',
        icon: '👥',
        items: [
          { id: 'pb01', text: 'SAFETY', action: 'Brief', note: 'Cover: seatbelts must stay on, no touching controls or doors in flight, and what to do in an emergency.' },
          { id: 'pb02', text: 'Control Exchange', action: 'Brief', note: 'Use the callout: "You have the controls" / "I have the controls." Both pilots must verbally confirm every transfer of control.' },
        ],
      },

      // ─── 3. BEFORE ENGINE START ─────────────────────────────────────────────
      {
        id: 'before-engine-start',
        name: 'BEFORE ENGINE START',
        icon: '🧰',
        items: [
          { id: 'bs01', text: 'Preflight inspection', action: 'Done' },
          { id: 'bs02', text: 'Seats & Belts', action: 'Adjust/Lock', note: 'Seats must click into the locked position — an unlocked seat can slide back at rotation, causing loss of control. Both lap belt and shoulder harness snug.' },
          { id: 'bs03', text: 'Electrical & Avionics', action: 'OFF', note: 'Avionics must be OFF before the master switch — this protects them from the voltage spike that occurs during engine start.' },
          { id: 'bs04', text: 'Circuit Breakers', action: 'Check/IN' },
          { id: 'bs05', text: 'Fuel Selector', action: 'BOTH' },
        ],
      },

      // ─── 4. STARTING ENGINE ─────────────────────────────────────────────────
      {
        id: 'starting-engine',
        name: 'STARTING ENGINE',
        icon: '🔑',
        items: [
          { id: 'se01', text: 'Prime', action: '1-3 Times', note: 'Injects fuel directly into the intake. Cold engine = 2–3 pumps; warm engine = 0 pumps. Over-priming causes flooding and a hard start.' },
          { id: 'se02', text: 'Carb Heat', action: 'OFF' },
          { id: 'se03', text: 'Throttle', action: 'OPEN 1/8"' },
          { id: 'se04', text: 'Mixture', action: 'RICH' },
          { id: 'se05', text: 'Prop Area', action: 'CLEAR', note: 'Shout "CLEAR PROP!" and look left and right to confirm no one is in the propeller arc before engaging the starter.' },
          { id: 'se06', text: 'Master Switch', action: 'ON' },
          { id: 'se07', text: 'Strobe', action: 'ON' },
          { id: 'se08', text: 'Ignition', action: 'START' },
          { id: 'se09', text: 'Throttle', action: '1000 RPM or less', note: 'Low RPM lets oil pressure build and allows the engine to warm up gradually. Avoid high power until oil temp is in the green arc.' },
          { id: 'se10', text: 'Oil Pressure', action: 'Check', note: 'Oil pressure must show within 30 seconds of start. If it does not, shut down immediately to prevent engine damage.' },
          { id: 'se11', text: 'Avionics', action: 'ON' },
          { id: 'se12', text: 'Mixture', action: 'As Required' },
          { id: 'se13', text: 'Flaps', action: 'UP & Visual' },
          { id: 'se14', text: 'Transponder', action: 'ALT' },
          { id: 'se15', text: 'ATIS', action: 'Obtain', note: 'Tune 125.20 and listen for current weather, active runway, and altimeter setting at RHV before calling Ground.' },
          { id: 'se16', text: 'Altimeter', action: 'Set / Check within 75\'', note: 'Set to the ATIS altimeter setting. The altimeter should read within 75 ft of RHV field elevation (133 ft MSL). A larger error indicates an instrument fault.' },
          { id: 'se17', text: 'Heading', action: 'Set' },
          { id: 'se18', text: 'Radio', action: 'Call/Request', note: 'VFR Flight Following / IFR Clearance' },
        ],
      },

      // ─── 5. TAXI CHECK ──────────────────────────────────────────────────────
      {
        id: 'taxi',
        name: 'TAXI CHECK',
        icon: '🛞',
        items: [
          { id: 'tx01', text: 'Taxi', action: 'Brief', note: 'Review your taxi route using the airport diagram. Note any hold-short lines, crossing runways, or hot spots.' },
          { id: 'tx02', text: 'Brake', action: 'Check', note: 'Test brakes shortly after starting to taxi. They should feel firm and stop the aircraft promptly.' },
          { id: 'tx03', text: 'Attitude Indicator', action: '< 5° bank', note: 'The AI gyro needs ~2 min to erect after start. Confirm it shows near-level and responds correctly as you turn.' },
          { id: 'tx04', text: 'Heading', action: 'Known Heading' },
          { id: 'tx05', text: 'Compass', action: 'Turn Freely' },
          { id: 'tx06', category: 'Turn Coordinator', text: 'Airplane', action: 'INTO turn', note: 'The small airplane in the TC should bank toward the direction of your turn.' },
          { id: 'tx07', category: 'Turn Coordinator', text: 'Ball', action: 'OUTSIDE turn', note: 'The inclinometer ball swings to the outside of the turn during taxi — this verifies the instrument is working.' },
        ],
      },

      // ─── 6. RUNUP CHECK ─────────────────────────────────────────────────────
      {
        id: 'runup',
        name: 'RUNUP CHECK',
        icon: '🔧',
        items: [
          { id: 'ru01', text: 'Seats & Belts', action: 'Adjust/Lock' },
          { id: 'ru02', text: 'Doors', action: 'Closed' },
          { id: 'ru03', text: 'Flight Controls', action: 'Check', note: 'Move controls through full deflection in all directions. Verify they move freely and in the correct direction (yoke right → right aileron up).' },
          { id: 'ru04', text: 'Flight Instruments', action: 'Check' },
          { id: 'ru05', text: 'Primer', action: 'In & Locked', note: 'An unlocked primer can admit unmetered fuel into the engine, causing rough running or flooding.' },
          { id: 'ru06', text: 'Fuel Quantity', action: 'Check' },
          { id: 'ru07', text: 'Fuel Selector', action: 'BOTH' },
          { id: 'ru08', text: 'Mixture', action: 'Rich below 3000\'' },
          { id: 'ru09', text: 'Trim', action: 'Set for Takeoff' },
          { id: 'ru10', text: 'Throttle', action: '1700 RPM', note: 'Engine must be warm (oil temp in the green arc) before run-up. High power on a cold engine can cause damage.' },
          { id: 'ru11', text: 'Magnetos', action: 'Check', note: 'Switch L, then R. Acceptable: drop < 125 RPM on each mag, and difference between L and R < 50 RPM. Larger drop = fouled plug or magneto fault.' },
          { id: 'ru12', text: 'Carb Heat', action: 'RPM Drop', note: 'Apply carb heat and expect an RPM drop (carb heat reduces air density and power). If RPM initially drops then rises, carb ice was present and has melted. Confirm full RPM recovery before turning carb heat OFF.' },
          { id: 'ru13', text: 'Ammeter', action: 'Check', note: 'Ammeter should show a positive charge indication after start. Zero or negative indicates the alternator may not be charging.' },
          { id: 'ru14', text: 'Throttle', action: 'IDLE Check', note: 'Reduce to idle and confirm the engine runs smoothly without stumbling. A rough idle may indicate a mixture or spark plug issue.' },
          { id: 'ru15', text: 'Throttle', action: '1000 RPM' },
          { id: 'ru16', text: 'Mixture', action: 'As Required' },
          { id: 'ru17', text: 'Radio', action: 'Set' },
          { id: 'ru18', text: 'Transponder', action: 'Code' },
          { id: 'ru19', text: 'Flaps', action: 'Set for Takeoff' },
          { id: 'ru20', text: 'Lights', action: 'As Needed' },
          { id: 'ru21', text: 'VOR/OBS', action: 'Check/Set' },
          { id: 'ru22', text: 'GPS/OBS', action: 'Check/Set' },
        ],
      },

      // ─── 7. EMERGENCY BRIEFING ──────────────────────────────────────────────
      {
        id: 'emergency-briefing',
        name: 'EMERGENCY BRIEFING',
        icon: '🚨',
        items: [
          { id: 'eb01', text: 'Engine Failure', action: 'On Runway', note: 'Throttle idle, brakes firmly, stop on the runway. If at or past rotation speed with runway remaining — continue takeoff.' },
          { id: 'eb02', text: 'Engine Failure', action: 'Below TPA', note: 'Land STRAIGHT AHEAD. Never attempt a turn back to the runway below traffic pattern altitude — the "impossible turn" causes fatal stall-spins every year.' },
          { id: 'eb03', text: 'Engine Failure', action: 'Above TPA', note: 'Above TPA you may have enough altitude to turn back. Fly Vg (65 kts) for maximum glide range, and pick the best available landing area.' },
          { id: 'eb04', text: 'Vg', action: '65 Knots', note: 'Best glide speed — maximizes distance over ground with the engine out. Memorize this number. Fly it immediately on engine failure.' },
        ],
      },

      // ─── 8. DEPARTURE BRIEFING ──────────────────────────────────────────────
      {
        id: 'departure-briefing',
        name: 'DEPARTURE BRIEFING',
        icon: '📋',
        items: [
          { id: 'db01', text: 'Departure Frequency', action: 'Brief' },
          { id: 'db02', text: 'Departure Route', action: 'Brief' },
          { id: 'db03', text: 'Departure Altitude', action: 'Brief' },
        ],
      },

      // ─── 9. BEFORE TAKEOFF CHECK ────────────────────────────────────────────
      {
        id: 'before-takeoff',
        name: 'BEFORE TAKEOFF CHECK',
        icon: '✈️',
        items: [
          { id: 'bto01', text: 'Windows', action: 'Closed' },
          { id: 'bto02', text: 'Flaps', action: '0° ~ 10°' },
          { id: 'bto03', text: 'Mixture', action: 'Rich below 3000\'' },
          { id: 'bto04', text: 'Carb Heat', action: 'OFF', note: 'Carb heat reduces power and must be OFF for takeoff. Confirm RPM is normal before proceeding to the runway.' },
          { id: 'bto05', text: 'Landing Light', action: 'ON' },
          { id: 'bto06', text: 'Pitot Heat', action: 'As Needed' },
          { id: 'bto07', text: 'Transponder', action: 'Code/ALT' },
          { id: 'bto08', text: 'Radio', action: 'Set/Call' },
        ],
      },

      // ─── 10. AFTER TAKEOFF CHECK ────────────────────────────────────────────
      {
        id: 'after-takeoff',
        name: 'AFTER TAKEOFF CHECK',
        icon: '⬆️',
        items: [
          { id: 'at01', text: 'Climb', action: '75 or 80 knots', note: 'Vy = 76 kts (best rate, normal climb). Vx = 60 kts (best angle, obstacle clearance). 80 kts improves engine cooling on hot days.' },
          { id: 'at02', text: 'Throttle', action: 'FULL' },
          { id: 'at03', text: 'Mixture', action: 'Recommend Lean above 3000\'' },
          { id: 'at04', text: 'Landing Light', action: 'OFF' },
        ],
      },

      // ─── 11. CRUISE CHECK ───────────────────────────────────────────────────
      {
        id: 'cruise',
        name: 'CRUISE CHECK',
        icon: '🌤️',
        items: [
          { id: 'cr01', text: 'Pitch', action: 'Set' },
          { id: 'cr02', text: 'Power', action: 'Set' },
          { id: 'cr03', text: 'Trim', action: 'Set', note: 'Trim for hands-off flight at your target attitude. Proper trim greatly reduces pilot workload during cruise.' },
          { id: 'cr04', text: 'Mixture', action: 'Recommend Lean', note: 'Lean the mixture above 3,000 ft to improve fuel efficiency and reduce engine wear. Lean until rough, then enrich slightly.' },
          { id: 'cr05', text: 'Heading', action: 'Compass' },
          { id: 'cr06', text: 'Instrument', action: 'Check' },
        ],
      },

      // ─── 12. ARRIVAL BRIEFING (AABC) ────────────────────────────────────────
      {
        id: 'arrival-briefing',
        name: 'ARRIVAL BRIEFING AABC',
        icon: '📻',
        items: [
          { id: 'ab01', text: 'Approach', action: 'Brief', note: 'AABC = Approach type, Altimeter setting, heading/navigation, radio/Communications. Brief your pattern entry before you reach the airport.' },
          { id: 'ab02', text: 'Altimeter', action: 'Set' },
          { id: 'ab03', text: 'Heading', action: 'Set' },
          { id: 'ab04', text: 'Navigation', action: 'Set' },
          { id: 'ab05', text: 'Radio', action: 'Set/Call' },
          { id: 'ab06', text: 'Landing', action: 'Brief' },
        ],
      },

      // ─── 13. DESCENT CHECK ──────────────────────────────────────────────────
      {
        id: 'descent',
        name: 'DESCENT CHECK',
        icon: '⬇️',
        items: [
          { id: 'de01', text: 'Fuel Selector', action: 'BOTH' },
          { id: 'de02', text: 'Mixture', action: 'RICH' },
          { id: 'de03', text: 'Carb Heat', action: 'ON', note: 'At reduced power during descent the carburetor is susceptible to icing. Apply carb heat now to prevent ice from forming and cutting engine power.' },
        ],
      },

      // ─── 14. BEFORE LANDING (GUMPFS) ────────────────────────────────────────
      {
        id: 'before-landing',
        name: 'BEFORE LANDING GUMPFS',
        icon: '🛬',
        items: [
          { id: 'bl01', text: 'Seats & Belts', action: 'Adjust/Lock', note: 'GUMPFS = Gas, Undercarriage (N/A fixed), Mixture, Prop (N/A fixed), Flaps, Switches. Confirm everyone is buckled before final.' },
          { id: 'bl02', text: 'Fuel Selector', action: 'BOTH' },
          { id: 'bl03', text: 'Mixture', action: 'RICH' },
          { id: 'bl04', text: 'Carb Heat', action: 'ON', note: 'Keep carb heat ON through the approach. If you need full power for a go-around, move carb heat to OFF as you advance the throttle.' },
          { id: 'bl05', text: 'Landing Light', action: 'ON' },
          { id: 'bl06', text: 'Flaps', action: 'Set' },
        ],
      },

      // ─── 15. AFTER LANDING ──────────────────────────────────────────────────
      {
        id: 'after-landing',
        name: 'AFTER LANDING',
        icon: '🏁',
        items: [
          { id: 'al01', text: 'Landing Light', action: 'OFF' },
          { id: 'al02', text: 'Carb Heat', action: 'OFF' },
          { id: 'al03', text: 'Mixture', action: 'As Required' },
          { id: 'al04', text: 'Flaps', action: 'UP' },
          { id: 'al05', text: 'Transponder', action: '1200', note: 'Switch to VFR squawk code 1200 once clear of the runway, unless ATC instructs you to keep an assigned code.' },
          { id: 'al06', text: 'Trim', action: 'Set for T/O', note: 'Reset trim for takeoff now so the aircraft is configured if you need to depart again.' },
          { id: 'al07', text: 'Radio', action: 'Call' },
        ],
      },

      // ─── 16. ENGINE SHUTDOWN ────────────────────────────────────────────────
      {
        id: 'shutdown',
        name: 'ENGINE SHUTDOWN',
        icon: '🛑',
        items: [
          { id: 'sd01', text: 'Lights (except Strobe)', action: 'OFF' },
          { id: 'sd02', text: 'Avionics', action: 'OFF' },
          { id: 'sd03', text: 'Throttle', action: 'IDLE' },
          { id: 'sd04', text: 'Mixture', action: 'IDLE', note: 'Pull the mixture control full aft to cutoff — this stops fuel flow and lets the engine quit cleanly. Wait for the propeller to fully stop before turning off the ignition.' },
          { id: 'sd05', text: 'Ignition', action: 'OFF' },
          { id: 'sd06', text: 'Key', action: 'Remove' },
          { id: 'sd07', text: 'Master Switch', action: 'OFF' },
          { id: 'sd08', text: 'Strobe', action: 'OFF' },
          { id: 'sd09', text: 'Fuel Selector', action: 'BOTH' },
        ],
      },

      // ─── 17. AIRPLANE TIE-DOWN ──────────────────────────────────────────────
      {
        id: 'tiedown',
        name: 'AIRPLANE TIE-DOWN',
        icon: '🔒',
        items: [
          { id: 'td01', text: 'Control Lock', action: 'Install' },
          { id: 'td02', text: 'Wheel Chocks', action: 'SET' },
          { id: 'td03', text: 'Wing Tie-Downs', action: 'Connect' },
          { id: 'td04', text: 'Tail Tie-Down', action: 'Connect' },
          { id: 'td05', text: 'Prop', action: 'Level/Inspect', note: 'Leave the prop horizontal (not vertical) so it is not mistaken for a step. Inspect the leading edge for nicks or damage.' },
          { id: 'td06', text: 'Wheels/Brakes', action: 'Inspect' },
          { id: 'td07', text: 'Pitot Cover', action: 'Install', note: 'The red pitot cover prevents insects from blocking the pitot tube. Remove it before the next flight — leaving it on is a common and dangerous mistake.' },
          { id: 'td08', text: 'Visual Inspection', action: 'Done' },
          { id: 'td09', text: 'Tach/Hobbs', action: 'Record' },
          { id: 'td10', text: 'Squawks', action: 'Note', note: 'Write down any discrepancies or issues noticed during the flight. Report them to the FBO or your instructor before the next flight.' },
          { id: 'td11', text: 'Tow Bar', action: 'Stow' },
          { id: 'td12', text: 'Trash', action: 'Remove' },
        ],
      },

      // ─── 18. V-SPEEDS ───────────────────────────────────────────────────────
      {
        id: 'v-speeds',
        name: 'V-SPEEDS (KIAS)',
        icon: '📈',
        items: [
          { id: 'vs01', text: 'Vr', action: '55 knots', note: 'Rotation speed — lift the nose at this speed during the takeoff roll.' },
          { id: 'vs02', text: 'Vx', action: '60 knots', note: 'Best angle of climb — maximum altitude gain per unit of ground distance. Use to clear obstacles after takeoff.' },
          { id: 'vs03', text: 'Vy', action: '76 knots', note: 'Best rate of climb — maximum altitude gain per unit of time. Normal climb speed after obstacle clearance.' },
          { id: 'vs04', text: 'Vfe', action: '85 knots', note: 'Maximum flap extension speed — never extend flaps faster than this or structural damage can result.' },
          { id: 'vs05', text: 'Vne', action: '160 knots', note: 'Never exceed speed — the red line on the airspeed indicator. Structural damage risk above this speed.' },
          { id: 'vs06', text: 'Vg', action: '65 knots', note: 'Best glide speed — fly this immediately on engine failure to maximize glide distance to a landing area.' },
        ],
      },

      // ─── 19. RHV FREQUENCIES ────────────────────────────────────────────────
      {
        id: 'rhv-frequencies',
        name: 'RHV FREQUENCIES',
        icon: '📡',
        items: [
          { id: 'rf01', text: 'ATIS', action: '125.20', note: 'Automated Terminal Information Service — listen before calling Ground for current weather, active runway, and altimeter setting.' },
          { id: 'rf02', text: 'Ground', action: '121.65', note: 'Contact RHV Ground for taxi clearance after engine start. Have ATIS information letter ready.' },
          { id: 'rf03', text: 'Tower', action: '119.80 / 126.10', note: 'RHV Tower controls the runway and airspace. Contact for takeoff clearance and when inbound for landing.' },
          { id: 'rf04', text: 'NorCal (N)', action: '121.30' },
          { id: 'rf05', text: 'NorCal (S)', action: '120.10' },
        ],
      },
    ],
  },
];
