# Exercise Videos

Store your exercise demo videos here as MP4 files (H.264, muted, 4-8s, one clean rep).

## Placeholder

`demo.mp4` — shared fallback used for any exercise whose real clip hasn't been filmed/added yet.
`app.js` points every exercise `<video>` at its real filename below; if that file 404s, the video
element's `onerror` handler swaps in `demo.mp4` automatically — **no code change needed** when you
drop a real clip in later, just save it with the exact filename from the table.

## Filename → Exercise mapping (Jess Males Coaching & Fitness — Block 1)

### Warm-up drills (shared across the workouts that use them)

| File | Exercise | Used in |
|---|---|---|
| `incline-bench-iyt.mp4` | Incline Bench IYT | Workout A warm-up |
| `band-face-pull-external-rotation.mp4` | Thera Band Face Pull to External Rotation | Workout A warm-up |
| `band-passovers.mp4` | Band Passovers | Workout A & B warm-up |
| `tricep-push-ups.mp4` | Tricep Push Ups | Workout A warm-up |
| `band-pull-aparts.mp4` | Band Pull-Aparts | Workout B warm-up |
| `band-bicep-curl.mp4` | Band Bicep Curl | Workout B warm-up |
| `db-cuban-press.mp4` | DB Cuban Press | Workout B warm-up |
| `kb-hip-shift.mp4` | KB Hip Shift | Workout C warm-up |
| `kb-jefferson-roll-down.mp4` | KB Jefferson Roll Down | Workout C warm-up |
| `db-bench-pullover-hip-drop.mp4` | DB Bench Pullover & Hip Drop | Workout C warm-up |
| `air-squat.mp4` | Air Squat | Workout C warm-up |
| `inch-worm.mp4` | Inch Worm | Workout C warm-up |

### Workout A — Chest / Shoulders / Triceps

| File | Exercise |
|---|---|
| `db-incline-chest-press.mp4` | DB Incline Chest Press |
| `db-standing-lateral-raise.mp4` | DB Standing Lateral Raise |
| `db-chest-flys.mp4` | DB Chest Flys |
| `cable-tricep-pushdown.mp4` | Cable Tricep Pushdowns |
| `db-bench-pullover.mp4` | DB Bench Pullovers |
| `db-tricep-overhead-extension.mp4` | DB Tricep Overhead Extension |

### Workout B — Back / Biceps

| File | Exercise |
|---|---|
| `lat-pulldown.mp4` | Lat Pull-Down |
| `cable-bicep-curl.mp4` | Cable Bicep Curls |
| `db-one-arm-row.mp4` | DB One-Arm Row |
| `db-seated-hammer-curl.mp4` | DB Seated Alt. Hammer Curl |
| `seated-row.mp4` | Seated Row |
| `bb-bicep-21s.mp4` | BB Bicep 21's |

### Workout C — Legs / Abs

| File | Exercise |
|---|---|
| `bb-back-squat.mp4` | BB Back Squat |
| `db-walking-lunge.mp4` | DB Walking Lunge |
| `bb-deadlift.mp4` | BB Deadlift |
| `seated-leg-curl.mp4` | Seated Leg Curl |
| `plank-side-plank.mp4` | Plank & Side Plank |
| `russian-twist.mp4` | Russian Twist |

## Filming tips

- Keep clips short: 4–8 seconds, one clean rep
- Film side-on or at 45° to show form clearly
- Good lighting, plain background
- Export as MP4 (H.264), 1080p or 720p is plenty
- `muted` is set on the video element so no audio is needed
- **Filenames are case-sensitive on the deployed site** (Netlify runs Linux) even though Windows
  won't complain locally — match the table exactly, all lowercase.
