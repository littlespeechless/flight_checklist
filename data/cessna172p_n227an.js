// Cessna 172P Checklist — N227AN (NICE AIR)
// Transcribed from the NICE AIR laminated quick-reference card for N227AN.
// Verify all RPM limits, V-speeds, and frequencies against the physical card before flight.

AIRCRAFT_DATABASE.push({
  id: 'cessna-172p-n227an',
  name: 'Cessna 172 P',
  registration: 'N227AN',
  description: 'Lycoming O-320 · Standard trainer',
  phases: [

    // ─── 1. PREFLIGHT CHECKS ────────────────────────────────────────────────
    {
      id: 'n227-preflight',
      name: 'PREFLIGHT CHECKS',
      icon: '🔍',
      items: [
        {
          id: 'n227-pf01', category: 'COCKPIT', text: 'Documents', action: 'AROW',
          note: 'FAA requires all four documents aboard before every flight. Tap each one as you verify it.',
          subitems: [
            { id: 'n227-pf01a', text: 'A — Airworthiness Certificate', note: 'Issued by the FAA; must be displayed in the aircraft at all times. It never expires as long as the aircraft is maintained per FAA requirements.' },
            { id: 'n227-pf01b', text: 'R — Registration Certificate', note: 'Proves N227AN is registered with the FAA. Check the expiry date — it must be current for legal flight.' },
            { id: 'n227-pf01c', text: 'O — Operating Handbook (POH)', note: 'The official pilot\'s manual for this exact aircraft. Contains limitations, normal and emergency procedures, and performance charts.' },
            { id: 'n227-pf01d', text: 'W — Weight & Balance', note: 'Current W&B data for N227AN. Before each flight verify the loaded CG is within the approved envelope for your fuel and passenger load.' },
          ],
        },
        { id: 'n227-pf02', category: 'COCKPIT', text: 'Tach/ Hobb', action: 'Note', note: 'Record both readings before engine start — used for logging engine time and scheduling maintenance intervals.' },
        { id: 'n227-pf03', category: 'COCKPIT', text: 'Control Lock', action: 'Remove', note: 'The red control lock blocks the yoke and rudder pedals. Remove it and stow it so it cannot jam the controls in flight.' },
        { id: 'n227-pf04', category: 'COCKPIT', text: 'Ignition Switch', action: 'OFF' },
        { id: 'n227-pf05', category: 'COCKPIT', text: 'Turn Coordinator', action: 'Red', note: 'The red "OFF" flag should be visible before electrical power is applied, confirming the gyro was not already spinning.' },
        { id: 'n227-pf06', category: 'COCKPIT', text: 'Master Switch', action: 'ON', note: 'Battery and alternator buses are now live. Work efficiently — avoid draining the battery before engine start.' },
        { id: 'n227-pf07', category: 'COCKPIT', text: 'Fuel Quantity', action: 'Check Level', note: 'Fuel gauges can be inaccurate. Always verify fuel level visually at the fuel caps as well.' },
        { id: 'n227-pf08', category: 'COCKPIT', text: 'Flaps', action: 'Down' },
        { id: 'n227-pf09', category: 'COCKPIT', text: 'Turn Coordinator', action: 'No Red', note: 'The "OFF" flag should disappear within ~1 minute, confirming the electric gyro spun up normally.' },
        { id: 'n227-pf10', category: 'COCKPIT', text: 'Pitot Heat', action: 'As Needed' },
        { id: 'n227-pf11', category: 'COCKPIT', text: 'Lights', action: 'As Needed' },
        { id: 'n227-pf12', category: 'COCKPIT', text: 'Master Switch', action: 'OFF' },
        { id: 'n227-pf13', category: 'COCKPIT', text: 'Fuel Selector', action: 'BOTH' },

        { id: 'n227-pf14', category: 'LEFT FUSELAGE', text: 'Baggage Door', action: 'Lock w/Key' },

        { id: 'n227-pf15', category: 'EMPENNAGE', text: 'Control Surfaces', action: 'Check' },
        { id: 'n227-pf16', category: 'EMPENNAGE', text: 'Tail Tie-Down', action: 'Disconnect' },

        { id: 'n227-pf17', category: 'RIGHT WING', text: 'Flap', action: 'Check' },
        { id: 'n227-pf18', category: 'RIGHT WING', text: 'Aileron', action: 'Check Free' },
        { id: 'n227-pf19', category: 'RIGHT WING', text: 'Wing Tie-Down', action: 'Disconnect' },
        { id: 'n227-pf20', category: 'RIGHT WING', text: 'Main wheel Tire', action: 'Check' },
        { id: 'n227-pf21', category: 'RIGHT WING', text: 'Brake/Pads', action: 'Check' },
        { id: 'n227-pf22', category: 'RIGHT WING', text: 'Fuel Sump', action: 'Drain/Check', note: 'Drain fuel from the sump into a tester cup. Water appears as clear bubbles at the bottom. Drain until fuel is clear blue.' },
        { id: 'n227-pf23', category: 'RIGHT WING', text: 'Fuel Quantity', action: 'Visual Check' },

        { id: 'n227-pf24', category: 'NOSE', text: 'Oil', action: '≥ 4 QT', note: 'Minimum for flight is 4 quarts; optimal range is 6–8 qt. Check with the dipstick after the engine has been off a few minutes.' },
        { id: 'n227-pf25', category: 'NOSE', text: 'Fuel Strainer', action: 'Drain', note: 'The strainer drain is under the nose cowl. Drain until fuel runs clear — water contamination can stop an engine mid-flight.' },
        { id: 'n227-pf26', category: 'NOSE', text: 'Prop & Spinner', action: 'Check' },
        { id: 'n227-pf27', category: 'NOSE', text: 'Air Inlets', action: 'Check' },
        { id: 'n227-pf28', category: 'NOSE', text: 'Alternator Belt', action: 'Check', note: 'Check for cracks or fraying. A broken belt stops alternator charging — the aircraft would run on battery only.' },
        { id: 'n227-pf29', category: 'NOSE', text: 'Carb Air Filter', action: 'Check', note: 'A clogged filter reduces engine power. Confirm it is seated properly and free of debris or insects.' },
        { id: 'n227-pf30', category: 'NOSE', text: 'Nose Wheel', action: 'Check' },
        { id: 'n227-pf31', category: 'NOSE', text: 'Static Source', action: 'Check', note: 'Small hole on the fuselage side. Must be unobstructed — it feeds the altimeter, VSI, and airspeed indicator.' },

        { id: 'n227-pf32', category: 'LEFT WING', text: 'Pitot Tube', action: 'Check', note: 'Remove pitot cover if installed. Confirm the opening is clear — a blocked pitot causes a false (stuck) airspeed reading.' },
        { id: 'n227-pf33', category: 'LEFT WING', text: 'Fuel Vent', action: 'Check' },
        { id: 'n227-pf34', category: 'LEFT WING', text: 'Stall Warning', action: 'Check' },
        { id: 'n227-pf35', category: 'LEFT WING', text: 'Flap', action: 'Check' },
        { id: 'n227-pf36', category: 'LEFT WING', text: 'Aileron', action: 'Check Free' },
        { id: 'n227-pf37', category: 'LEFT WING', text: 'Wing Tie-Down', action: 'Disconnect' },
        { id: 'n227-pf38', category: 'LEFT WING', text: 'Main wheel Tire', action: 'Check' },
        { id: 'n227-pf39', category: 'LEFT WING', text: 'Brake/Pads', action: 'Check' },
        { id: 'n227-pf40', category: 'LEFT WING', text: 'Fuel Sump', action: 'Drain/Check', note: 'Same as right wing — drain until clear. Always check both sumps on every preflight.' },
        { id: 'n227-pf41', category: 'LEFT WING', text: 'Fuel Quantity', action: 'Visual Check' },
      ],
    },

    // ─── 2. PASSENGER BRIEFING ──────────────────────────────────────────────
    {
      id: 'n227-passenger-briefing',
      name: 'PASSENGER BRIEFING',
      icon: '👥',
      items: [
        { id: 'n227-pb01', text: 'SAFETY', action: 'Brief', note: 'Cover: seatbelts must stay on, no touching controls or doors in flight, and what to do in an emergency.' },
        { id: 'n227-pb02', text: 'Control Exchange', action: 'Brief', note: 'Use the callout: "You have the controls" / "I have the controls." Both pilots must verbally confirm every transfer of control.' },
      ],
    },

    // ─── 3. BEFORE ENGINE START ─────────────────────────────────────────────
    {
      id: 'n227-before-engine-start',
      name: 'BEFORE ENGINE START',
      icon: '🧰',
      items: [
        { id: 'n227-bs01', text: 'Preflight Inspection', action: 'Done' },
        { id: 'n227-bs02', text: 'Seats & Belts', action: 'Adjust/Lock', note: 'Seats must click into the locked position — an unlocked seat can slide back at rotation, causing loss of control. Both lap belt and shoulder harness snug.' },
        { id: 'n227-bs03', text: 'Electrical & Avionics', action: 'OFF', note: 'Avionics must be OFF before the master switch — this protects them from the voltage spike that occurs during engine start.' },
        { id: 'n227-bs04', text: 'Circuit Breakers', action: 'Check/IN' },
        { id: 'n227-bs05', text: 'Fuel Selector', action: 'BOTH' },
      ],
    },

    // ─── 4. STARTING ENGINE ─────────────────────────────────────────────────
    {
      id: 'n227-starting-engine',
      name: 'STARTING ENGINE',
      icon: '🔑',
      items: [
        { id: 'n227-se01', text: 'Prime', action: '1-3 Times', note: 'Injects fuel directly into the intake. Cold engine = 2–3 pumps; warm engine = 0 pumps. Over-priming causes flooding and a hard start.' },
        { id: 'n227-se02', text: 'Carb Heat', action: 'OFF' },
        { id: 'n227-se03', text: 'Throttle', action: 'OPEN 1/8"' },
        { id: 'n227-se04', text: 'Mixture', action: 'RICH' },
        { id: 'n227-se05', text: 'Prop Area', action: 'CLEAR', note: 'Shout "CLEAR PROP!" and look left and right to confirm no one is in the propeller arc before engaging the starter.' },
        { id: 'n227-se06', text: 'Master Switch', action: 'ON' },
        { id: 'n227-se07', text: 'Beacon', action: 'ON' },
        { id: 'n227-se08', text: 'Ignition', action: 'START' },
        { id: 'n227-se09', text: 'Throttle', action: '1000 RPM or less', note: 'Low RPM lets oil pressure build and allows the engine to warm up gradually. Avoid high power until oil temp is in the green arc.' },
        { id: 'n227-se10', text: 'Oil Pressure', action: 'Check', note: 'Oil pressure must show within 30 seconds of start. If it does not, shut down immediately to prevent engine damage.' },
        { id: 'n227-se11', text: 'Avionics', action: 'ON' },
        { id: 'n227-se12', text: 'Mixture', action: 'As Required' },
        { id: 'n227-se13', text: 'Flaps', action: 'UP & Visual' },
        { id: 'n227-se14', text: 'Transponder', action: 'ALT' },
        { id: 'n227-se15', text: 'ATIS', action: 'Obtain', note: 'Tune 125.20 and listen for current weather, active runway, and altimeter setting at RHV before calling Ground.' },
        { id: 'n227-se16', text: 'Altimeter', action: 'Set / Check within 75\'', note: 'Set to the ATIS altimeter setting. The altimeter should read within 75 ft of RHV field elevation (133 ft MSL). A larger error indicates an instrument fault.' },
        { id: 'n227-se17', text: 'Heading', action: 'Set' },
        { id: 'n227-se18', text: 'Radio', action: 'Call/Request', note: 'VFR Flight Following / IFR Clearance' },
      ],
    },

    // ─── 5. TAXI CHECK ──────────────────────────────────────────────────────
    {
      id: 'n227-taxi',
      name: 'TAXI CHECK',
      icon: '🛞',
      items: [
        { id: 'n227-tx01', text: 'Taxi', action: 'Brief', note: 'Review your taxi route using the airport diagram. Note any hold-short lines, crossing runways, or hot spots.' },
        { id: 'n227-tx02', text: 'Brake', action: 'Check', note: 'Test brakes shortly after starting to taxi. They should feel firm and stop the aircraft promptly.' },
        { id: 'n227-tx03', text: 'Attitude Indicator', action: '< 5° bank', note: 'The AI gyro needs ~2 min to erect after start. Confirm it shows near-level and responds correctly as you turn.' },
        { id: 'n227-tx04', text: 'Heading', action: 'Known Heading' },
        { id: 'n227-tx05', text: 'Compass', action: 'Turn Freely' },
        { id: 'n227-tx06', category: 'Turn Coordinator', text: 'Airplane', action: 'INTO turn', note: 'The small airplane in the TC should bank toward the direction of your turn.' },
        { id: 'n227-tx07', category: 'Turn Coordinator', text: 'Ball', action: 'OUTSIDE turn', note: 'The inclinometer ball swings to the outside of the turn during taxi — this verifies the instrument is working.' },
      ],
    },

    // ─── 6. RUNUP CHECK ─────────────────────────────────────────────────────
    {
      id: 'n227-runup',
      name: 'RUNUP CHECK',
      icon: '🔧',
      items: [
        { id: 'n227-ru01', text: 'Seats & Belts', action: 'Adjust/Lock' },
        { id: 'n227-ru02', text: 'Doors', action: 'Closed' },
        { id: 'n227-ru03', text: 'Flight Controls', action: 'Check', note: 'Move controls through full deflection in all directions. Verify they move freely and in the correct direction (yoke right → right aileron up).' },
        { id: 'n227-ru04', text: 'Flight Instruments', action: 'Check' },
        { id: 'n227-ru05', text: 'Primer', action: 'In & Locked', note: 'An unlocked primer can admit unmetered fuel into the engine, causing rough running or flooding.' },
        { id: 'n227-ru06', text: 'Fuel Quantity', action: 'Check' },
        { id: 'n227-ru07', text: 'Fuel Selector', action: 'BOTH' },
        { id: 'n227-ru08', text: 'Mixture', action: 'Rich below 3000\'' },
        { id: 'n227-ru09', text: 'Trim', action: 'Set for Takeoff' },
        { id: 'n227-ru10', text: 'Throttle', action: '1700 RPM', note: 'Engine must be warm (oil temp in the green arc) before run-up. High power on a cold engine can cause damage.' },
        { id: 'n227-ru11', text: 'Magnetos', action: 'Check', note: 'Switch L, then R. Acceptable: drop < 125 RPM on each mag, and difference between L and R < 50 RPM. Larger drop = fouled plug or magneto fault.' },
        { id: 'n227-ru12', text: 'Carb Heat', action: 'RPM Drop', note: 'Apply carb heat and expect an RPM drop (carb heat reduces air density and power). If RPM initially drops then rises, carb ice was present and has melted. Confirm full RPM recovery before turning carb heat OFF.' },
        { id: 'n227-ru13', text: 'Suction Gauge', action: 'in Green' },
        { id: 'n227-ru14', text: 'Ammeter', action: 'Check', note: 'Ammeter should show a positive charge indication after start. Zero or negative indicates the alternator may not be charging.' },
        { id: 'n227-ru15', text: 'Throttle', action: 'IDLE Check', note: 'Reduce to idle and confirm the engine runs smoothly without stumbling. Idle should be 600–700 RPM.' },
        { id: 'n227-ru16', text: 'Throttle', action: '1000 RPM' },
        { id: 'n227-ru17', text: 'Mixture', action: 'As Required' },
        { id: 'n227-ru18', text: 'Radio', action: 'Set' },
        { id: 'n227-ru19', text: 'Transponder', action: 'Code' },
        { id: 'n227-ru20', text: 'Flaps', action: 'Set for Takeoff' },
        { id: 'n227-ru21', text: 'Lights', action: 'As Needed' },
        { id: 'n227-ru22', text: 'VOR/OBS', action: 'Check/Set' },
        { id: 'n227-ru23', text: 'GPS/OBS', action: 'Check/Set' },
      ],
    },

    // ─── 7. EMERGENCY BRIEFING ──────────────────────────────────────────────
    {
      id: 'n227-emergency-briefing',
      name: 'EMERGENCY BRIEFING',
      icon: '🚨',
      items: [
        { id: 'n227-eb01', text: 'Engine Failure', action: 'On Runway', note: 'Throttle idle, brakes firmly, stop on the runway. If at or past rotation speed with runway remaining — continue takeoff.' },
        { id: 'n227-eb02', text: 'Engine Failure', action: 'Below TPA', note: 'Land STRAIGHT AHEAD. Never attempt a turn back to the runway below traffic pattern altitude — the "impossible turn" causes fatal stall-spins every year.' },
        { id: 'n227-eb03', text: 'Engine Failure', action: 'Above TPA', note: 'Above TPA you may have enough altitude to turn back. Fly Vg (65 kts) for maximum glide range, and pick the best available landing area.' },
        { id: 'n227-eb04', text: 'Vg', action: '65 Knots', note: 'Best glide speed — maximizes distance over ground with the engine out. Memorize this number. Fly it immediately on engine failure.' },
      ],
    },

    // ─── 8. DEPARTURE BRIEFING ──────────────────────────────────────────────
    {
      id: 'n227-departure-briefing',
      name: 'DEPARTURE BRIEFING',
      icon: '📋',
      items: [
        { id: 'n227-db01', text: 'Departure Frequency', action: 'Brief' },
        { id: 'n227-db02', text: 'Departure Route', action: 'Brief' },
        { id: 'n227-db03', text: 'Departure Altitude', action: 'Brief' },
      ],
    },

    // ─── 9. BEFORE TAKEOFF CHECK ────────────────────────────────────────────
    {
      id: 'n227-before-takeoff',
      name: 'BEFORE TAKEOFF CHECK',
      icon: '✈️',
      items: [
        { id: 'n227-bto01', text: 'Windows', action: 'Closed' },
        { id: 'n227-bto02', text: 'Flaps', action: '0° ~ 10°' },
        { id: 'n227-bto03', text: 'Mixture', action: 'Rich below 3000\'' },
        { id: 'n227-bto04', text: 'Carb Heat', action: 'OFF', note: 'Carb heat reduces power and must be OFF for takeoff. Confirm RPM is normal before proceeding to the runway.' },
        { id: 'n227-bto05', text: 'Landing Light', action: 'ON' },
        { id: 'n227-bto06', text: 'Pitot Heat', action: 'As Needed' },
        { id: 'n227-bto07', text: 'Transponder', action: 'Code/ALT' },
        { id: 'n227-bto08', text: 'Radio', action: 'Set/Call' },
      ],
    },

    // ─── 10. AFTER TAKEOFF CHECK ────────────────────────────────────────────
    {
      id: 'n227-after-takeoff',
      name: 'AFTER TAKEOFF CHECK',
      icon: '⬆️',
      items: [
        { id: 'n227-at01', text: 'Climb', action: '75 or 80 knots', note: 'Vy = 76 kts (best rate, normal climb). Vx = 60 kts (best angle, obstacle clearance). 80 kts improves engine cooling on hot days.' },
        { id: 'n227-at02', text: 'Throttle', action: 'FULL' },
        { id: 'n227-at03', text: 'Mixture', action: 'Recommend Lean above 3000\'' },
        { id: 'n227-at04', text: 'Landing Light', action: 'OFF' },
      ],
    },

    // ─── 11. CRUISE CHECK ───────────────────────────────────────────────────
    {
      id: 'n227-cruise',
      name: 'CRUISE CHECK',
      icon: '🌤️',
      items: [
        { id: 'n227-cr01', text: 'Pitch', action: 'Set' },
        { id: 'n227-cr02', text: 'Power', action: 'Set' },
        { id: 'n227-cr03', text: 'Trim', action: 'Set', note: 'Trim for hands-off flight at your target attitude. Proper trim greatly reduces pilot workload during cruise.' },
        { id: 'n227-cr04', text: 'Mixture', action: 'Recommend Lean', note: 'Lean the mixture above 3,000 ft to improve fuel efficiency and reduce engine wear. Lean until rough, then enrich slightly.' },
        { id: 'n227-cr05', text: 'Heading', action: 'Compass' },
        { id: 'n227-cr06', text: 'Instrument', action: 'Check' },
      ],
    },

    // ─── 12. ARRIVAL BRIEFING (AABC) ────────────────────────────────────────
    {
      id: 'n227-arrival-briefing',
      name: 'ARRIVAL BRIEFING AABC',
      icon: '📻',
      items: [
        { id: 'n227-ab01', text: 'Approach', action: 'Brief', note: 'AABC = Approach type, Altimeter setting, heading/navigation, radio/Communications. Brief your pattern entry before you reach the airport.' },
        { id: 'n227-ab02', text: 'Altimeter', action: 'Set' },
        { id: 'n227-ab03', text: 'Heading', action: 'Set' },
        { id: 'n227-ab04', text: 'Navigation', action: 'Set' },
        { id: 'n227-ab05', text: 'Radio', action: 'Set/Call' },
        { id: 'n227-ab06', text: 'Landing', action: 'Brief' },
      ],
    },

    // ─── 13. DESCENT CHECK ──────────────────────────────────────────────────
    {
      id: 'n227-descent',
      name: 'DESCENT CHECK',
      icon: '⬇️',
      items: [
        { id: 'n227-de01', text: 'Fuel Selector', action: 'BOTH' },
        { id: 'n227-de02', text: 'Mixture', action: 'RICH' },
        { id: 'n227-de03', text: 'Carb Heat', action: 'ON', note: 'At reduced power during descent the carburetor is susceptible to icing. Apply carb heat now to prevent ice from forming and cutting engine power.' },
      ],
    },

    // ─── 14. BEFORE LANDING (GUMPFS) ────────────────────────────────────────
    {
      id: 'n227-before-landing',
      name: 'BEFORE LANDING GUMPFS',
      icon: '🛬',
      items: [
        { id: 'n227-bl01', text: 'Seats & Belts', action: 'Adjust/Lock', note: 'GUMPFS = Gas, Undercarriage (N/A fixed), Mixture, Prop (N/A fixed), Flaps, Switches. Confirm everyone is buckled before final.' },
        { id: 'n227-bl02', text: 'Fuel Selector', action: 'BOTH' },
        { id: 'n227-bl03', text: 'Mixture', action: 'RICH' },
        { id: 'n227-bl04', text: 'Carb Heat', action: 'ON', note: 'Keep carb heat ON through the approach. If you need full power for a go-around, move carb heat to OFF as you advance the throttle.' },
        { id: 'n227-bl05', text: 'Landing Light', action: 'ON' },
        { id: 'n227-bl06', text: 'Flaps', action: 'Set' },
        { id: 'n227-bl07', text: 'FINAL', action: 'CFLAPS' },
      ],
    },

    // ─── 15. AFTER LANDING ──────────────────────────────────────────────────
    {
      id: 'n227-after-landing',
      name: 'AFTER LANDING',
      icon: '🏁',
      items: [
        { id: 'n227-al01', text: 'Landing Light', action: 'OFF' },
        { id: 'n227-al02', text: 'Carb Heat', action: 'OFF' },
        { id: 'n227-al03', text: 'Mixture', action: 'As Required' },
        { id: 'n227-al04', text: 'Flaps', action: 'UP' },
        { id: 'n227-al05', text: 'Transponder', action: '1200', note: 'Switch to VFR squawk code 1200 once clear of the runway, unless ATC instructs you to keep an assigned code.' },
        { id: 'n227-al06', text: 'Trim', action: 'Set for T/O', note: 'Reset trim for takeoff now so the aircraft is configured if you need to depart again.' },
        { id: 'n227-al07', text: 'Radio', action: 'Call' },
      ],
    },

    // ─── 16. ENGINE SHUTDOWN ────────────────────────────────────────────────
    {
      id: 'n227-shutdown',
      name: 'ENGINE SHUTDOWN',
      icon: '🛑',
      items: [
        { id: 'n227-sd01', text: 'Lights (except Beacon)', action: 'OFF' },
        { id: 'n227-sd02', text: 'Avionics', action: 'OFF' },
        { id: 'n227-sd03', text: 'Throttle', action: 'IDLE' },
        { id: 'n227-sd04', text: 'Mixture', action: 'IDLE', note: 'Pull the mixture control full aft to cutoff — this stops fuel flow and lets the engine quit cleanly. Wait for the propeller to fully stop before turning off the ignition.' },
        { id: 'n227-sd05', text: 'Ignition', action: 'OFF' },
        { id: 'n227-sd06', text: 'Key', action: 'Remove' },
        { id: 'n227-sd07', text: 'Master Switch', action: 'OFF' },
        { id: 'n227-sd08', text: 'Beacon', action: 'OFF' },
        { id: 'n227-sd09', text: 'Fuel Selector', action: 'BOTH' },
      ],
    },

    // ─── 17. AIRPLANE TIE-DOWN ──────────────────────────────────────────────
    {
      id: 'n227-tiedown',
      name: 'AIRPLANE TIE-DOWN',
      icon: '🔒',
      items: [
        { id: 'n227-td01', text: 'Control Lock', action: 'Install' },
        { id: 'n227-td02', text: 'Wheel Chocks', action: 'SET' },
        { id: 'n227-td03', text: 'Wing Tie-Downs', action: 'Connect' },
        { id: 'n227-td04', text: 'Tail Tie-Down', action: 'Connect' },
        { id: 'n227-td05', text: 'Prop', action: 'Level/Inspect', note: 'Leave the prop horizontal (not vertical) so it is not mistaken for a step. Inspect the leading edge for nicks or damage.' },
        { id: 'n227-td06', text: 'Wheels/Brakes', action: 'Inspect' },
        { id: 'n227-td07', text: 'Pitot Cover', action: 'Install', note: 'The red pitot cover prevents insects from blocking the pitot tube. Remove it before the next flight — leaving it on is a common and dangerous mistake.' },
        { id: 'n227-td08', text: 'Visual Inspection', action: 'Done' },
        { id: 'n227-td09', text: 'Tach/Hobbs', action: 'Record' },
        { id: 'n227-td10', text: 'Squawks', action: 'Note', note: 'Write down any discrepancies or issues noticed during the flight. Report them to the FBO or your instructor before the next flight.' },
        { id: 'n227-td11', text: 'Tow Bar', action: 'Stow' },
        { id: 'n227-td12', text: 'Trash', action: 'Remove' },
      ],
    },

    // ─── 18. V-SPEEDS ───────────────────────────────────────────────────────
    {
      id: 'n227-v-speeds',
      name: 'V-SPEEDS (KIAS)',
      icon: '📈',
      items: [
        { id: 'n227-vs01', text: 'Vr', action: '55 knots', note: 'Rotation speed — lift the nose at this speed during the takeoff roll.' },
        { id: 'n227-vs02', text: 'Vx', action: '60 knots', note: 'Best angle of climb — maximum altitude gain per unit of ground distance. Use to clear obstacles after takeoff.' },
        { id: 'n227-vs03', text: 'Vy', action: '76 knots', note: 'Best rate of climb — maximum altitude gain per unit of time. Normal climb speed after obstacle clearance.' },
        { id: 'n227-vs04', text: 'Vfe', action: '85 knots', note: 'Maximum flap extension speed — never extend flaps faster than this or structural damage can result.' },
        { id: 'n227-vs05', text: 'Vne', action: '160 knots', note: 'Never exceed speed — the red line on the airspeed indicator. Structural damage risk above this speed.' },
        { id: 'n227-vs06', text: 'Vg', action: '65 knots', note: 'Best glide speed — fly this immediately on engine failure to maximize glide distance to a landing area.' },
      ],
    },

    // ─── 19. RHV FREQUENCIES ────────────────────────────────────────────────
    {
      id: 'n227-rhv-frequencies',
      name: 'RHV FREQUENCIES',
      icon: '📡',
      items: [
        { id: 'n227-rf01', text: 'ATIS', action: '125.20', note: 'Automated Terminal Information Service — listen before calling Ground for current weather, active runway, and altimeter setting.' },
        { id: 'n227-rf02', text: 'Ground', action: '121.65', note: 'Contact RHV Ground for taxi clearance after engine start. Have ATIS information letter ready.' },
        { id: 'n227-rf03', text: 'Tower', action: '119.80 / 126.10', note: 'RHV Tower controls the runway and airspace. Contact for takeoff clearance and when inbound for landing.' },
        { id: 'n227-rf04', text: 'NorCal (N)', action: '121.30' },
        { id: 'n227-rf05', text: 'NorCal (S)', action: '120.10' },
      ],
    },
  ],
});