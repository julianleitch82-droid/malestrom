# Product Requirements Document
## Malestrom — Workout Tracker PWA

**Version:** 2.0  
**Last Updated:** July 2026  
**Status:** In Progress

---

## 1. Overview

A personal Progressive Web App (PWA) designed to track a 3-day gym program. The app runs in Safari on iPhone and can be installed to the home screen. All data is stored locally on the device. No login, no server, no internet connection required after initial load.

---

## 2. Background & Goals

A long-term personal training companion for tracking a structured 3-day full body program (Days A, B, C), built to grow with the user over time. The app should:

- Make it easy to follow the program in the gym without paper or scrolling through notes
- Log weights, sets and reps as they happen
- Have a rest timer that starts only after the user marks a set complete. The timer should show a small alert when it finishes. Completion can be marked by a button, checkbox, or similar control.
- Show previous session data so the user knows what they lifted last time.
- Support gradual progression and visualize improvement over time via history collection. Show a progress graph directly above each exercise on the active workout screen.
- Allow users to flag exercises that require care due to injuries or limitations.
- Serve as a foundation that can be extended with new features and programs as training evolves

---

## 3. Target Platform

- **Device:** iPhone (iOS Safari)
- **Install method:** "Add to Home Screen" via Safari (PWA)
- **Development environment:** VS Code on Windows
- **Tech stack:** HTML, CSS, JavaScript (vanilla — no frameworks required for v1)
- **Data storage:** localStorage (device-only, no cloud sync in v1)

---

## 4. The Program

**Source:** Jess Males Coaching & Fitness — Block 1. `E` = logged per side (left/right separately).
`T` = logged as one total combined number (alternating reps). Tempo/eccentric coaching notes are
transcribed in full in `app.js` and surfaced in the Exercise Detail View, not just summarized here.

### Day A — Chest / Shoulders / Triceps

Warm-up (2-3 min cardio, 2 rounds): Incline Bench IYT ×6, Thera Band Face Pull to External
Rotation ×8, Band Passovers ×6, Tricep Push Ups ×8.

| Exercise | Sets × Reps | Notation | Tempo/Note |
|---|---|---|---|
| DB Incline Chest Press | 4 × 6 | — | Eccentric |
| DB Standing Lateral Raise | 3 × 8 | — | |
| DB Chest Flys | 4 × 8 | — | Tempo 3/1/3 |
| Cable Tricep Pushdowns | 3 × 15 | — | |
| DB Bench Pullovers | 4 × 12 | — | |
| DB Tricep Overhead Extension | 3 × 10 | — | |

### Day B — Back / Biceps

Warm-up (2-3 min cardio, 2 rounds): Band Passovers ×6, Band Pull-Aparts ×8, Band Bicep Curl ×8,
DB Cuban Press ×6.

| Exercise | Sets × Reps | Notation | Tempo/Note |
|---|---|---|---|
| Lat Pull-Down | 4 × 6 | — | Tempo 3/1/3 |
| Cable Bicep Curls | 3 × 10 | — | |
| DB One-Arm Row | 3 × 8 | E (each side) | 2s pause at top |
| DB Seated Alt. Hammer Curl | 4 × 12 | T (total) | |
| Seated Row | 3 × 8 | — | Eccentric |
| BB Bicep 21's | 3 × 21 | — | 7 bottom + 7 top + 7 full |

### Day C — Legs / Abs

Warm-up (2 rounds): KB Hip Shift ×8 each side, KB Jefferson Roll Down ×6, DB Bench Pullover & Hip
Drop ×6, Air Squat ×8, Inch Worm ×5.

| Exercise | Sets × Reps | Notation | Tempo/Note |
|---|---|---|---|
| BB Back Squat | 4 × 6 | — | Tempo 3/1/3 |
| DB Walking Lunge | 3 × 12 | T (total) | |
| BB Deadlift | 4 × 6 | — | |
| Seated Leg Curl | 3 × 10 | — | Eccentric |
| Plank & Side Plank | 3 × 30 sec | 3 variants (Plank, Side Plank L, Side Plank R) | Timed hold |
| Russian Twist | 3 × 20 | T (total), bodyweight or weighted | |

---

## 5. Features — Version 1.0

### 5.1 Home Screen
- Display the current program's workout days as cards, rendered from `PROGRAM.days` (currently Day A - Chest/Shoulders/Triceps, Day B - Back/Biceps, Day C - Legs/Abs)
- Show date of last time each day was completed
- Tap a day to begin that workout

### 5.1a Warm-Up (per workout)
- Each day carries its own warm-up drill list (from the PT program), rendered as a collapsible checklist above the main exercise list on the Active Workout Screen
- The header shows live round progress (e.g. "Round 1 of 2"), matching `warmup.rounds`. Tap a row to check it off; once every item in the list is checked, that round is complete and the checklist automatically resets to unchecked for the next round. Once the required number of rounds is done, the header shows "✓ All rounds complete" and the list locks (no more taps needed/possible) — it loops exactly `rounds` times, never stuck after one pass and never looping forever
- This is visual only and is **not** persisted to history in v1 (no weight/rep logging for warm-ups); round progress resets on page navigation like the rest of in-session state
- Each item shows its video thumbnail and rep scheme (including "each side" where relevant)

### 5.2 Active Workout Screen — Exercise List

- Lists exercises for the selected day in order
- Each exercise is a tappable row showing:
  - Short looping video thumbnail (64×64, MP4) on the left demonstrating the movement
  - Exercise name, a tempo badge (e.g. "Eccentric", "Tempo 3/1/3") when the PT program specifies one, and target sets × reps
  - ⚠️ icon if the exercise has an injury/limitation flag
  - Set completion counter on the right (e.g. `0/3`), turning green ✓ when all sets are done
- Progress bar at the top tracks sets completed across the whole session (e.g. "6 of 21 sets completed")
- Tapping a row opens the **Exercise Detail View** (see 5.2a)
- "Complete Workout" and "Cancel" buttons at the bottom
- Session data is held in memory and only saved to localStorage when the user taps "Complete Workout"

### 5.2a Exercise Detail View

A full-screen takeover opened by tapping any exercise in the list. This is the only place set logging happens.

- **Header:** Back button (returns to exercise list) + exercise name
- **Video demo:** 16:9 short looping MP4 (H.264) showing the correct movement. Each exercise points at its own filename in `videos/`; until the real clip is filmed, the `<video>` element's `onerror` handler falls back to the shared `videos/demo.mp4` placeholder automatically — no code change needed when a real clip is added later. The `<video>` element uses `autoplay loop muted playsinline` so it behaves like a GIF but at a fraction of the file size and much higher quality
- **Warning banner:** shown in orange if the exercise has an injury or limitation flag
- **Coaching note banner:** shown (in a distinct accent color from the warning) when the PT program specifies a tempo/eccentric technique note — always visible, not buried in a tooltip
- **Set rows** displayed in sequence, with the input shape depending on the exercise's notation:
  - Plain (no suffix): one weight input + one reps input
  - `E` (per side): one weight input + separate Left/Right reps inputs, logged independently
  - `T` (total combined): one weight input + one reps input, labeled "(total)"
  - Timed variants (e.g. Plank & Side Plank): no weight field, one seconds input per named variant hold
  - Completed sets: shown in green with the logged result formatted per the above
  - Active set (next uncompleted): the appropriate inputs + "Complete Set" button
  - Pending sets: dimmed, no interaction until prior set is completed
- **Default values:** if the user leaves weight or reps blank and taps "Complete Set", the app uses the placeholder value shown in the input — either the last session's logged weight for that exercise, or the starting weight from the program
- **Rest timer bar** (see 5.2b): always visible at the bottom of this screen
- When all sets are done, an "All sets complete!" confirmation is shown with a back button

### 5.2b Rest Timer

A persistent bar docked to the bottom of the Exercise Detail View — it never scrolls away and is always visible to the user.

- Starts automatically after the user taps "Complete Set", provided there are more sets remaining
- Default rest period: 90 seconds (adjustable in settings: 30s / 60s / 90s / 120s / 180s)
- Shows a large countdown and a depleting blue fill behind it
- Turns green and pulses (with haptic vibration on supported devices) when time is up
- "Skip" button dismisses the timer early
- Timer stops when the user taps "← Back" to return to the exercise list

### 5.3 Exercise History
- Tap any exercise name to see last 5 sessions of logged data
- Shows date, weight, sets completed

### 5.4 Progress Graph
- Line graph showing estimated 1-rep max (e1RM) over time, calculated from logged weight and reps using the Epley formula: `weight × (1 + reps/30)`
- X-axis: date of each session; Y-axis: e1RM in kg
- Falls back to a simple weight-over-time view if only 1 set per session is logged

### 5.5 PWA Setup
- Manifest file so the app can be installed from Safari
- App icon placeholder
- Works offline after first load

---

## 6. Features — Future Versions (Out of Scope for this pass)

- Cloud sync / backup
- Multi-user support (e.g. deployment for a Personal Trainer to use with clients)
- User accounts and client management for PT use case
- Body weight tracking
- Photo progress tracking
- Notes field per session
- App Store / Play Store distribution (staying on PWA / Add to Home Screen)
- Progress graph (e1RM over time via Chart.js) — see Phase 7, not started
- Persisting warm-up completion to history (currently a session-only checklist, not saved)

**Note:** "Program switching" was previously listed here as out of scope, but as of v2.0 `PROGRAM`
is fully data-driven (see Section 8) specifically so a future block/cycle can replace it without
an app rewrite. An in-app UI for switching between multiple *saved* programs is still out of scope
— today it's a data swap in `app.js`, not a UI toggle.

---

## 7. Design Guidelines

- **Mobile-first:** designed for one-handed use in the gym
- **Follows system theme:** the app tracks the phone/browser's light/dark setting live via
  `prefers-color-scheme` (no in-app toggle) — same CSS variable names in `style.css`, swapped
  values under a `@media (prefers-color-scheme: light)` block. The pink brand accent stays
  constant across both themes; only backgrounds/text/border shades change.
- **Large tap targets:** buttons and inputs sized for sweaty fingers, weight input sized wider
  than reps (`flex: 1.5` vs `1`) for comfortable typing of decimal values like "22.5"
- **Minimal navigation:** get in, log the workout, get out
- **Colours:** simple, clean — no unnecessary decoration

---

## 8. Data Model

### 8.1 Program data (`app.js`, `PROGRAM` constant — not persisted, defines the current cycle)

Each day carries a `warmup` block and a list of `exercises`. Every exercise declares `type`
(`'reps'` or `'time'`) and `sideMode` (`'none'`, `'perSide'`, `'totalCombined'`, or `'variants'`)
so the logging UI and history rendering both know how to handle it without special-casing by name.
This is what makes swapping in a future block (e.g. an Olympic-lifting cycle) a data change rather
than a rewrite — see Section 4 for the current program content in full.

```js
{
  id: 'db-one-arm-row', name: 'DB One-Arm Row',
  sets: 3, reps: 8, type: 'reps', sideMode: 'perSide', unit: 'kg', startWeight: null,
  tempo: null, note: '2 second pause at the top of each rep.', warning: null,
  video: 'videos/db-one-arm-row.mp4', sourceVideoUrl: 'https://youtube.com/shorts/...'
}
```

### 8.2 Session history (localStorage)

Each saved session **snapshots** the exercise metadata it needs to render correctly (name, unit,
type, sideMode, tempo) rather than looking it up in the live `PROGRAM` at display time — so old
sessions keep rendering correctly even after `PROGRAM` is replaced by a future cycle.

```json
{
  "sessions": [
    {
      "id": "uuid",
      "programId": "jess-males-block-1",
      "programName": "Jess Males Coaching & Fitness — Block 1",
      "dayId": "A",
      "dayName": "Chest / Shoulders / Triceps",
      "date": "2026-07-20",
      "exercises": [
        {
          "id": "db-one-arm-row",
          "name": "DB One-Arm Row",
          "unit": "kg",
          "type": "reps",
          "sideMode": "perSide",
          "tempo": null,
          "sets": [
            { "setNumber": 1, "weight": 12, "repsL": 8, "repsR": 8 }
          ]
        }
      ]
    }
  ]
}
```

---

## 9. File Structure

```
/Gym_App
  index.html          ← Home screen
  workout.html        ← Active workout screen
  history.html        ← Exercise history view
  info.html           ← Nutrition & training-timing guidance (Diplomat Health Type)
  style.css           ← Global styles
  app.js              ← Core logic, PROGRAM data, and localStorage handling
  manifest.json       ← PWA manifest
  service-worker.js   ← Offline caching
  /PRD
    PRD.md            ← This document
    Notes.md           ← Local-network phone testing instructions
  /icons
    icon-192.png
    icon-512.png
    icon-192-maskable.png
    icon-512-maskable.png
  /videos
    demo.mp4           ← Shared fallback clip
    README.md          ← Filename ↔ exercise mapping for real PT clips
```

---

## 10. Development Phases

| Phase | Description | Status |
|---|---|---|
| 1 | Project scaffold — file structure, manifest, basic navigation | Complete |
| 2 | Home screen with day cards | Complete |
| 3 | Active workout screen — exercise list with GIF thumbnails, tappable rows | Complete |
| 3a | Exercise detail view — full-screen takeover with GIF, set logging, defaults | Complete |
| 4 | localStorage save/load | Complete |
| 5 | Previous session pre-fill (last weight shown as input placeholder) | Complete |
| 6 | Rest timer — sticky bar in detail view, configurable, vibration alert, skip | Complete |
| 7 | Progress graph per exercise (e1RM over time via Chart.js) | Not started |
| 8 | Exercise history view | Complete |
| 9 | PWA polish — icons, offline, install prompt | Complete |
| 10 | Per-exercise MP4 video files replacing the shared placeholder (film PT demos, export as H.264, store in `videos/`) | Not started — see `videos/README.md` for the filename mapping |
| 11 | Ingest Jess Males Block 1 program — data-driven `PROGRAM`, warm-ups, E/T notation, tempo/coaching notes, info page, pink/black rebrand as "Malestrom" | Complete |
| 12 | Deploy to Netlify for a stable HTTPS URL + iOS "Add to Home Screen" | Complete — live at malestrom.netlify.app |
| 13 | Exercise detail video `onerror` fallback — full-screen detail view wasn't wired to fall back to `demo.mp4` like the list thumbnails were, so it silently showed nothing for any exercise without a real filmed clip | Complete |
| 14 | Gym-testing fixes: wider weight input, system light/dark theme via `prefers-color-scheme` | Complete |
| 15 | Warm-up round tracking — checking off every item now completes a round and loops the checklist back to unchecked for the next round (per `warmup.rounds`), instead of each item only ever being checkable once | Complete |

**Note:** Phase 7 will use [Chart.js](https://www.chartjs.org/) (CDN) for graph rendering — no install required.
