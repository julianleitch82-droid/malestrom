/**
 * ===================================================================
 * MALESTROM - CORE APPLICATION LOGIC
 * ===================================================================
 *
 * Handles:
 * - localStorage data structure initialization
 * - Workout program data (Jess Males Coaching & Fitness — Block 1)
 * - Navigation between pages
 * - Session management
 * - UI interactions
 *
 */

/* ===================================================================
   1. PROGRAM DATA
   === Jess Males Coaching & Fitness program.
   === Data-driven so a future block/cycle can replace this object
   === without any other code changes.
   =================================================================== */

const PROGRAM = {
    programId: 'jess-males-block-1',
    programName: 'Jess Males Coaching & Fitness — Block 1',
    days: [
        {
            id: 'A',
            name: 'Chest / Shoulders / Triceps',
            warmup: {
                cardio: '2-3 min cardio',
                rounds: 2,
                items: [
                    { name: 'Incline Bench IYT', reps: 6, perSide: false, video: 'videos/incline-bench-iyt.mp4', sourceVideoUrl: 'https://youtube.com/shorts/p6qJlRFmiNA?si=6VQFgzR0tRGDJYaE' },
                    { name: 'Thera Band Face Pull to External Rotation', reps: 8, perSide: false, video: 'videos/band-face-pull-external-rotation.mp4', sourceVideoUrl: 'https://youtube.com/shorts/LoGvg70iQA8?si=EK84F1xAe3ysBsJo' },
                    { name: 'Band Passovers', reps: 6, perSide: false, video: 'videos/band-passovers.mp4', sourceVideoUrl: 'https://youtube.com/shorts/6SwxIDhsAwk?si=KiCBarIwHPNjmkVr' },
                    { name: 'Tricep Push Ups', reps: 8, perSide: false, video: 'videos/tricep-push-ups.mp4', sourceVideoUrl: 'https://youtube.com/shorts/IDITzHbdf4U?si=ONLCF3SXWYnV5W39' }
                ]
            },
            exercises: [
                {
                    id: 'db-incline-chest-press', name: 'DB Incline Chest Press',
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Eccentric',
                    note: 'Slow descent — slowly lower the dumbbells toward your upper chest (sternum/clavicle area) for a controlled count of 3 to 5 seconds before driving back to the start position.',
                    warning: null,
                    video: 'videos/db-incline-chest-press.mp4', sourceVideoUrl: 'https://youtube.com/shorts/8fXfwG4ftaQ?si=fjM1P9mxNli7dJxd'
                },
                {
                    id: 'db-standing-lateral-raise', name: 'DB Standing Lateral Raise',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-standing-lateral-raise.mp4', sourceVideoUrl: 'https://youtube.com/shorts/U2gMn8GXr2A?si=Z3EZjgYy46eNnBCm'
                },
                {
                    id: 'db-chest-flys', name: 'DB Chest Flys',
                    sets: 4, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Tempo 3/1/3',
                    note: '3s down in a wide arc with a slight elbow bend (~10-15°) — actively stretches the pecs. 1s pause at chest level (no bouncing). 3s up, squeezing the pecs in a wide hugging motion back to the start, stopping just short of the dumbbells touching at the top to keep constant tension.',
                    warning: null,
                    video: 'videos/db-chest-flys.mp4', sourceVideoUrl: 'https://youtube.com/shorts/rk8YayRoTRQ?si=Ue2D0hHZf4OFoThu'
                },
                {
                    id: 'cable-tricep-pushdown', name: 'Cable Tricep Pushdowns',
                    sets: 3, reps: 15, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/cable-tricep-pushdown.mp4', sourceVideoUrl: 'https://youtube.com/shorts/1FjkhpZsaxc?si=L30mWGwYwb6EOG-q'
                },
                {
                    id: 'db-bench-pullover', name: 'DB Bench Pullovers',
                    sets: 4, reps: 12, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-bench-pullover.mp4', sourceVideoUrl: 'https://youtube.com/shorts/Datv2L6t3-4?si=I3S5r_z70LDwC4fM'
                },
                {
                    id: 'db-tricep-overhead-extension', name: 'DB Tricep Overhead Extension',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-tricep-overhead-extension.mp4', sourceVideoUrl: 'https://youtube.com/shorts/b_r_LW4HEcM?si=4acgoI4fLlq1WLU6'
                }
            ]
        },
        {
            id: 'B',
            name: 'Back / Biceps',
            warmup: {
                cardio: '2-3 min cardio',
                rounds: 2,
                items: [
                    { name: 'Band Passovers', reps: 6, perSide: false, video: 'videos/band-passovers.mp4', sourceVideoUrl: 'https://youtube.com/shorts/6SwxIDhsAwk?si=KiCBarIwHPNjmkVr' },
                    { name: 'Band Pull-Aparts', reps: 8, perSide: false, video: 'videos/band-pull-aparts.mp4', sourceVideoUrl: 'https://youtube.com/shorts/SuvO4TBwSu4?si=U93L32zZEQ2-FrQy' },
                    { name: 'Band Bicep Curl', reps: 8, perSide: false, video: 'videos/band-bicep-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/20xtfGZ37nw?si=NSxeHI6HIysXCmM0' },
                    { name: 'DB Cuban Press', reps: 6, perSide: false, video: 'videos/db-cuban-press.mp4', sourceVideoUrl: 'https://youtube.com/shorts/rv41bj3JTkQ?si=qy5dKoBmeUgZ0Y7Y' }
                ]
            },
            exercises: [
                {
                    id: 'lat-pulldown', name: 'Lat Pull-Down',
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Tempo 3/1/3',
                    note: 'From the top position with arms extended, pull the bar down to your upper chest taking 3s. Pause at the chest for 1s. Then slowly control the bar back up to the starting position taking exactly 3s.',
                    warning: null,
                    video: 'videos/lat-pulldown.mp4', sourceVideoUrl: 'https://youtube.com/shorts/bNmvKpJSWKM?si=oHHZebRIQFEZp8ms'
                },
                {
                    id: 'cable-bicep-curl', name: 'Cable Bicep Curls',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/cable-bicep-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/CrbTqNOlFgE?si=bDmA2DDgOs-tsk_1'
                },
                {
                    id: 'db-one-arm-row', name: 'DB One-Arm Row',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'perSide', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null,
                    note: '2 second pause at the top of each rep.',
                    warning: null,
                    video: 'videos/db-one-arm-row.mp4', sourceVideoUrl: 'https://youtube.com/shorts/yHqqGd0tXcw?si=OUEF-Gar595Uyz_2'
                },
                {
                    id: 'db-seated-hammer-curl', name: 'DB Seated Alt. Hammer Curl',
                    sets: 4, reps: 12, type: 'reps', sideMode: 'totalCombined', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-seated-hammer-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/cR2yNeMt1Xo?si=e03gOdSC7zCol0CI'
                },
                {
                    id: 'seated-row', name: 'Seated Row',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Eccentric',
                    note: 'Instead of letting the weight snap your arms forward, slowly extend your arms back to the starting position. Take 3 to 5 seconds to control the stack, allowing a deep stretch in your lats at the end of the movement.',
                    warning: null,
                    video: 'videos/seated-row.mp4', sourceVideoUrl: 'https://youtube.com/shorts/qD1WZ5pSuvk?si=_HdzoMNspqzFCv7p'
                },
                {
                    id: 'bb-bicep-21s', name: "BB Bicep 21's",
                    sets: 3, reps: 21, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null,
                    note: "21's — 7 reps bottom half of the range, 7 reps top half of the range, then 7 full reps = 21 per set.",
                    warning: null,
                    video: 'videos/bb-bicep-21s.mp4', sourceVideoUrl: 'https://youtube.com/shorts/FGrTKMK7AdU?si=OYt74PKHVjS9l6ns'
                }
            ]
        },
        {
            id: 'C',
            name: 'Legs / Abs',
            warmup: {
                cardio: null,
                rounds: 2,
                items: [
                    { name: 'KB Hip Shift', reps: 8, perSide: true, video: 'videos/kb-hip-shift.mp4', sourceVideoUrl: 'https://youtube.com/shorts/X1BkW1hHeC4?si=cGT4oAM3jTqoopR7' },
                    { name: 'KB Jefferson Roll Down', reps: 6, perSide: false, video: 'videos/kb-jefferson-roll-down.mp4', sourceVideoUrl: 'https://youtube.com/shorts/0R3K28dSokA?si=av9GoVzmRnm_uE12', note: 'Can do on any incline.' },
                    { name: 'DB Bench Pullover & Hip Drop', reps: 6, perSide: false, video: 'videos/db-bench-pullover-hip-drop.mp4', sourceVideoUrl: 'https://youtube.com/shorts/XIzTd7jRR6g?si=1BFGOjmI3r9ZEX7H' },
                    { name: 'Air Squat', reps: 8, perSide: false, video: 'videos/air-squat.mp4', sourceVideoUrl: 'https://youtube.com/shorts/eUy9DpornNI?si=ONY0e3QB9EA7n_7L' },
                    { name: 'Inch Worm', reps: 5, perSide: false, video: 'videos/inch-worm.mp4', sourceVideoUrl: 'https://youtube.com/shorts/-q1XGQ2VMUU?si=mBKcV00vih_axrZL' }
                ]
            },
            exercises: [
                {
                    id: 'bb-back-squat', name: 'BB Back Squat',
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Tempo 3/1/3',
                    note: '3s controlled descent — core tight, chest up, knees tracking properly. 1s pause in the hole, no bouncing. 3s smooth ascent, driving evenly through mid-foot and hips until standing tall.',
                    warning: null,
                    video: 'videos/bb-back-squat.mp4', sourceVideoUrl: 'https://youtube.com/shorts/dW3zj79xfrc?si=9KTTsYBade2ueL7u'
                },
                {
                    id: 'db-walking-lunge', name: 'DB Walking Lunge',
                    sets: 3, reps: 12, type: 'reps', sideMode: 'totalCombined', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-walking-lunge.mp4', sourceVideoUrl: 'https://youtube.com/shorts/mWnmd5ZVcFw?si=jZOIjaptgA0nzBoA'
                },
                {
                    id: 'bb-deadlift', name: 'BB Deadlift',
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/bb-deadlift.mp4', sourceVideoUrl: 'https://youtube.com/shorts/xNwpvDuZJ3k?si=NttTJEc74-XW6Ojr'
                },
                {
                    id: 'seated-leg-curl', name: 'Seated Leg Curl',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: 'Eccentric',
                    note: 'Release the weight slowly and deliberately back to the starting position. This phase should take 3 to 5 seconds to maximize muscle tension.',
                    warning: null,
                    video: 'videos/seated-leg-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/xdbEG3xGLI8?si=MDxOHsez4NPuDH_d'
                },
                {
                    id: 'plank-side-plank', name: 'Plank & Side Plank',
                    sets: 3, reps: null, type: 'time', sideMode: 'variants',
                    variantLabels: ['Plank', 'Side Plank (Left)', 'Side Plank (Right)'],
                    holdSeconds: 30, unit: 'sec', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: null, warning: null,
                    video: 'videos/plank-side-plank.mp4',
                    sourceVideoUrl: ['https://youtube.com/shorts/xe2MXatLTUw?si=Wvk0w27B4WV-Ik6U', 'https://youtube.com/shorts/BtM0a9x1F5o?si=i_MuYmZjv3M5xMGW']
                },
                {
                    id: 'russian-twist', name: 'Russian Twist',
                    sets: 3, reps: 20, type: 'reps', sideMode: 'totalCombined', unit: 'bodyweight/kg', startWeight: null, defaultRestSeconds: 90,
                    tempo: null, note: 'Bodyweight or weighted.', warning: null,
                    video: 'videos/russian-twist.mp4', sourceVideoUrl: 'https://youtube.com/shorts/aRUMRbl7KS4?si=NfSz87X7hbjRpgY_'
                }
            ]
        }
    ]
};

function getDay(dayId) {
    return PROGRAM.days.find(d => d.id === dayId) || null;
}

/* ===================================================================
   2. STORAGE MANAGER
   === Handles all localStorage operations
   =================================================================== */

const StorageManager = {
    /**
     * Initialize the localStorage data structure if it doesn't exist
     * This sets up an empty sessions array and default settings
     */
    init: function() {
        const existing = localStorage.getItem('workoutTrackerData');

        if (!existing) {
            const initialData = {
                sessions: [],
                settings: {
                    theme: 'dark'
                },
                // Per-exercise rest-duration overrides, keyed by exercise id.
                // Falls back to the exercise's defaultRestSeconds in PROGRAM,
                // then to 90s, if an exercise has no override set. See
                // getExerciseRestDefault/setExerciseRestDefault.
                exerciseRestDefaults: {}
            };
            localStorage.setItem('workoutTrackerData', JSON.stringify(initialData));
            console.log('✓ Initialized localStorage structure');
        } else {
            console.log('✓ localStorage already initialized');
        }
    },

    /**
     * Get the entire data object from localStorage
     */
    getData: function() {
        const data = localStorage.getItem('workoutTrackerData');
        return data ? JSON.parse(data) : null;
    },

    /**
     * Save the data object to localStorage
     */
    saveData: function(data) {
        localStorage.setItem('workoutTrackerData', JSON.stringify(data));
        console.log('✓ Data saved to localStorage');
    },

    /**
     * Get all sessions from localStorage
     */
    getSessions: function() {
        const data = this.getData();
        return data ? data.sessions : [];
    },

    /**
     * Add a new session to localStorage
     * @param {Object} session - Session object with id, dayId, dayName, date, exercises
     */
    addSession: function(session) {
        const data = this.getData();
        data.sessions.push(session);
        this.saveData(data);
        console.log('✓ Session added:', session.id);
    },

    /**
     * Get sessions for a specific day
     * @param {String} dayId
     */
    getSessionsByDay: function(dayId) {
        const sessions = this.getSessions();
        return sessions.filter(s => s.dayId === dayId);
    },

    /**
     * Get the most recent session for a specific day
     * @param {String} dayId
     */
    getLastSessionForDay: function(dayId) {
        const sessions = this.getSessionsByDay(dayId);
        return sessions.length > 0 ? sessions[sessions.length - 1] : null;
    },

    /**
     * Get settings from localStorage
     */
    getSettings: function() {
        const data = this.getData();
        return data ? data.settings : null;
    },

    /**
     * Update a setting
     * @param {String} key - Setting key (e.g., 'theme')
     * @param {Any} value - New value
     */
    updateSetting: function(key, value) {
        const data = this.getData();
        data.settings[key] = value;
        this.saveData(data);
        console.log(`✓ Setting updated: ${key} = ${value}`);
    }
};

/* ===================================================================
   3. UTILITY FUNCTIONS
   =================================================================== */

/**
 * Generate a simple UUID for sessions
 */
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Format a date to YYYY-MM-DD
 */
function formatDate(date) {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
}

/**
 * Parse date string to readable format
 */
function formatDateReadable(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-GB', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

/**
 * Get current date in YYYY-MM-DD format
 */
function getTodayDate() {
    return formatDate(new Date());
}

/**
 * Navigate to a different page
 */
function navigateTo(page) {
    // page should be 'index.html', 'workout.html', or 'info.html'
    window.location.href = page;
}

/**
 * Fall back to the shared placeholder clip if a per-exercise video hasn't
 * been filmed/added yet. Attached inline so the fallback also fires for
 * markup injected dynamically after DOMContentLoaded.
 */
function onVideoError(videoEl) {
    videoEl.onerror = null; // prevent loop if demo.mp4 itself is ever missing
    videoEl.src = 'videos/demo.mp4';
}

/* ===================================================================
   4. HOME SCREEN LOGIC
   =================================================================== */

/**
 * Initialize the home screen with day cards
 */
function initHomeScreen() {
    console.log('Initializing home screen...');

    const container = document.getElementById('days-container');
    if (container) {
        container.innerHTML = PROGRAM.days.map(day => {
            const lastSession = StorageManager.getLastSessionForDay(day.id);
            const lastText = lastSession ? `Last: ${formatDateReadable(lastSession.date)}` : 'Never completed';
            const liftCount = day.exercises.length;
            const warmupCount = day.warmup ? day.warmup.items.length : 0;

            return `
                <div class="day-card" data-day="${day.id}">
                    <div class="day-header">
                        <h3 class="day-letter">${day.name}</h3>
                    </div>
                    <div class="day-info">
                        <p class="last-completed">${lastText}</p>
                        <p class="exercise-count">${liftCount} exercises${warmupCount ? ` + ${warmupCount} warm-up drills` : ''}</p>
                    </div>
                    <button class="start-workout-btn" data-day="${day.id}">
                        Start Workout
                    </button>
                </div>
            `;
        }).join('');
    }

    // Add click handlers to start workout buttons
    document.querySelectorAll('.start-workout-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const day = e.target.dataset.day;
            console.log(`Starting workout for Day ${day}`);
            sessionStorage.setItem('currentWorkoutDay', day);
            navigateTo('workout.html');
        });
    });
}

/* ===================================================================
   5. WORKOUT SCREEN LOGIC
   =================================================================== */

// In-session state (cleared on each new workout)
let sessionData = {};           // { exerciseIndex: { setNum: {...} } }
let currentExerciseIndex = null;
let editingSetNum = null;       // set number currently being corrected, or null
let currentDay = null;
let restTimerInterval = null;
let restTimeRemaining = 0;
let restTotalDuration = 90;
let timerEndTime = null;
let audioCtx = null;

function initWorkoutScreen() {
    console.log('Initializing workout screen...');

    const dayId = sessionStorage.getItem('currentWorkoutDay');
    const day = getDay(dayId);
    if (!day) {
        console.error('Invalid day selected');
        navigateTo('index.html');
        return;
    }
    currentDay = day.id;

    const today = getTodayDate();

    const dayTitle = document.getElementById('workout-day-title');
    if (dayTitle) dayTitle.textContent = `Day ${day.id} — ${day.name}`;

    const dateEl = document.getElementById('workout-date');
    if (dateEl) dateEl.textContent = formatDateReadable(today);

    renderWarmup(day.warmup);
    renderExerciseList(day.exercises);

    document.getElementById('complete-workout-btn')?.addEventListener('click', () => {
        completeWorkout(day);
    });

    document.getElementById('cancel-workout-btn')?.addEventListener('click', () => {
        if (confirm('Cancel workout? Your progress will not be saved.')) {
            sessionData = {};
            navigateTo('index.html');
        }
    });

    document.getElementById('detail-back-btn')?.addEventListener('click', closeExerciseDetail);
    document.getElementById('skip-rest-btn')?.addEventListener('click', stopRestTimer);

    initStopwatch();

    // When phone unlocks / app returns to foreground, recalculate timer from stored end time
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && timerEndTime) {
            tickTimer();
            if (restTimeRemaining > 0 && !restTimerInterval) {
                restTimerInterval = setInterval(tickTimer, 500);
            }
        }
        if (document.hidden && restTimerInterval) {
            clearInterval(restTimerInterval);
            restTimerInterval = null;
        }
    });
}

// Quick-access stopwatch — entirely independent of the rest timer (separate
// state, no shared variables) so starting/pausing/resetting it, or the rest
// timer firing, never touches the other. Elapsed time is tracked via
// accumulated ms + a "started at" timestamp rather than counting ticks, so
// it stays accurate across background/foreground transitions, same approach
// as the rest timer.
let stopwatchElapsedMs = 0;
let stopwatchStartedAt = null; // Date.now() while running; null when paused/reset
let stopwatchInterval = null;

function initStopwatch() {
    const startBtn = document.getElementById('stopwatch-start-btn');
    const pauseBtn = document.getElementById('stopwatch-pause-btn');
    const resetBtn = document.getElementById('stopwatch-reset-btn');
    const widget = document.getElementById('stopwatch-widget');
    if (!startBtn || !pauseBtn || !resetBtn) return;

    startBtn.addEventListener('click', () => {
        if (stopwatchStartedAt) return; // already running
        stopwatchStartedAt = Date.now();
        startBtn.classList.add('hidden');
        pauseBtn.classList.remove('hidden');
        widget?.classList.add('active');
        if (stopwatchInterval) clearInterval(stopwatchInterval);
        stopwatchInterval = setInterval(updateStopwatchDisplay, 250);
        updateStopwatchDisplay();
    });

    pauseBtn.addEventListener('click', () => {
        if (!stopwatchStartedAt) return;
        stopwatchElapsedMs += Date.now() - stopwatchStartedAt;
        stopwatchStartedAt = null;
        if (stopwatchInterval) { clearInterval(stopwatchInterval); stopwatchInterval = null; }
        startBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
        updateStopwatchDisplay();
    });

    resetBtn.addEventListener('click', () => {
        stopwatchElapsedMs = 0;
        stopwatchStartedAt = null;
        if (stopwatchInterval) { clearInterval(stopwatchInterval); stopwatchInterval = null; }
        startBtn.classList.remove('hidden');
        pauseBtn.classList.add('hidden');
        widget?.classList.remove('active');
        updateStopwatchDisplay();
    });

    // Recalculate on foreground return, matching the rest timer's approach —
    // avoids a stale display or a dead interval after the app is backgrounded.
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && stopwatchStartedAt) {
            updateStopwatchDisplay();
            if (!stopwatchInterval) stopwatchInterval = setInterval(updateStopwatchDisplay, 250);
        }
        if (document.hidden && stopwatchInterval) {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
        }
    });
}

function updateStopwatchDisplay() {
    const totalMs = stopwatchElapsedMs + (stopwatchStartedAt ? Date.now() - stopwatchStartedAt : 0);
    const totalSeconds = Math.floor(totalMs / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const display = document.getElementById('stopwatch-display');
    if (display) display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// In-session warm-up progress: which round we're on and which items are
// checked off within the CURRENT round. Reset naturally on every full page
// navigation (new workout), same as sessionData. Not persisted to history.
let warmupRound = 1;
let warmupCheckedIndices = new Set();
// True for the brief window between "round just got fully checked" and the
// blink animation finishing — checklist is locked (no listeners) during it.
let warmupTransitioning = false;

/**
 * Warm-up is a non-logging checklist, but the program specifies a number of
 * rounds (e.g. 2) through the same drill list. Checking off every item
 * completes a round and loops the checklist back to unchecked for the next
 * round, until all required rounds are done — it doesn't get stuck after
 * one pass, and doesn't keep looping once the required rounds are met.
 */
function renderWarmup(warmup) {
    const container = document.getElementById('warmup-container');
    if (!container) return;

    if (!warmup || !warmup.items || !warmup.items.length) {
        container.innerHTML = '';
        return;
    }

    // Capture expand/collapse state from the DOM about to be replaced, so a
    // re-render triggered by checking off an item doesn't collapse the panel.
    const wasExpanded = document.getElementById('warmup-list')?.classList.contains('expanded') ?? false;

    // The cardio line (e.g. "2-3 min cardio") is the first thing to do in the
    // warm-up, so it's shown as the first checklist row rather than buried in
    // the header — same round-tracking as every other item.
    const displayItems = warmup.cardio
        ? [{ name: warmup.cardio, isCardio: true }, ...warmup.items]
        : warmup.items;

    const totalRounds = warmup.rounds || 1;
    const allRoundsDone = warmupRound > totalRounds;
    const roundLabel = allRoundsDone ? '✓ All rounds complete' : `Round ${warmupRound} of ${totalRounds}`;

    container.innerHTML = `
        <button type="button" class="warmup-toggle" id="warmup-toggle">
            <span>🔥 Warm-up — ${roundLabel}</span>
            <span class="warmup-toggle-icon">▾</span>
        </button>
        <div class="warmup-list" id="warmup-list">
            ${displayItems.map((item, idx) => {
                const done = allRoundsDone || warmupCheckedIndices.has(idx);
                return `
                <div class="warmup-item${done ? ' done' : ''}" data-warmup-idx="${idx}">
                    <div class="warmup-item-thumb">
                        ${item.isCardio
                            ? '<span class="warmup-item-thumb-icon">🏃</span>'
                            : `<video src="${item.video}" onerror="onVideoError(this)" autoplay loop muted playsinline></video>`}
                    </div>
                    <div class="warmup-item-info">
                        <div class="warmup-item-name">${item.name}</div>
                        ${item.isCardio ? '' : `<div class="warmup-item-reps">${item.reps}x${item.perSide ? ' each side' : ''}${item.note ? ` — ${item.note}` : ''}</div>`}
                    </div>
                    <span class="warmup-item-check">${done ? '✓' : '○'}</span>
                </div>
            `;
            }).join('')}
        </div>
    `;

    if (wasExpanded) {
        document.getElementById('warmup-list')?.classList.add('expanded');
        document.getElementById('warmup-toggle')?.classList.add('expanded');
    }

    document.getElementById('warmup-toggle')?.addEventListener('click', () => {
        document.getElementById('warmup-list')?.classList.toggle('expanded');
        document.getElementById('warmup-toggle')?.classList.toggle('expanded');
    });

    if (allRoundsDone || warmupTransitioning) return;

    container.querySelectorAll('.warmup-item').forEach(row => {
        row.addEventListener('click', () => {
            const idx = parseInt(row.dataset.warmupIdx);
            if (warmupCheckedIndices.has(idx)) {
                warmupCheckedIndices.delete(idx);
            } else {
                warmupCheckedIndices.add(idx);
            }

            // Round complete once every item is checked. Show the fully-
            // checked state, blink the whole card as confirmation, and only
            // then reset/advance — applies the same way to every round,
            // including the final one (which locks into "all complete").
            if (warmupCheckedIndices.size === displayItems.length) {
                warmupTransitioning = true;
                renderWarmup(warmup);

                const card = document.getElementById('warmup-container');
                card.classList.add('warmup-blinking');
                card.addEventListener('animationend', () => {
                    card.classList.remove('warmup-blinking');
                    warmupTransitioning = false;
                    warmupCheckedIndices.clear();
                    warmupRound += 1;
                    renderWarmup(warmup);
                }, { once: true });
                return;
            }

            renderWarmup(warmup);
        });
    });
}

function renderExerciseList(exercises) {
    const container = document.getElementById('exercises-container');
    if (!container) return;
    container.innerHTML = '';

    exercises.forEach((exercise, index) => {
        const completed = getCompletedSetCount(index);
        const total = exercise.sets;
        const allDone = completed === total && total > 0;

        const row = document.createElement('div');
        row.className = 'exercise-row' + (allDone ? ' all-done' : '');
        row.innerHTML = `
            <div class="exercise-row-thumb">
                <video src="${exercise.video}" onerror="onVideoError(this)" class="exercise-thumb-gif"
                       autoplay loop muted playsinline></video>
            </div>
            <div class="exercise-row-info">
                <div class="exercise-row-name">${exercise.name}${exercise.tempo ? `<span class="tempo-badge">${exercise.tempo}</span>` : ''}</div>
                <div class="exercise-row-target">${formatTargetText(exercise)}</div>
                ${exercise.warning ? '<div class="exercise-row-warn">⚠️</div>' : ''}
            </div>
            <div class="exercise-row-status${allDone ? ' done' : ''}">
                ${allDone ? '✓' : `${completed}/${total}`}
            </div>
        `;
        row.addEventListener('click', () => openExerciseDetail(index));
        container.appendChild(row);
    });

    updateProgressBar(exercises);
}

function formatTargetText(exercise) {
    if (exercise.sideMode === 'variants') {
        return `${exercise.sets} × ${exercise.holdSeconds}s holds`;
    }
    if (exercise.type === 'time') {
        return `${exercise.sets} × ${exercise.holdSeconds}s`;
    }
    if (exercise.sideMode === 'perSide') {
        return `${exercise.sets} sets × ${exercise.reps} reps each side`;
    }
    if (exercise.sideMode === 'totalCombined') {
        return `${exercise.sets} sets × ${exercise.reps} reps (total)`;
    }
    return `${exercise.sets} sets × ${exercise.reps} reps`;
}

function getCompletedSetCount(exerciseIndex) {
    const sets = sessionData[exerciseIndex];
    return sets ? Object.keys(sets).length : 0;
}

function findFirstPendingSet(totalSets, completedSets) {
    for (let i = 1; i <= totalSets; i++) {
        if (!completedSets[i]) return i;
    }
    return null;
}

function getLastSetsForExercise(dayId, exerciseId) {
    const lastSession = StorageManager.getLastSessionForDay(dayId);
    if (!lastSession) return null;
    const ex = lastSession.exercises.find(e => e.id === exerciseId);
    if (!ex || !ex.sets.length) return null;
    return ex.sets;
}

function getLastWeightForExercise(dayId, exerciseId) {
    const sets = getLastSetsForExercise(dayId, exerciseId);
    if (!sets) return null;
    return sets[sets.length - 1].weight ?? null;
}

/**
 * Rest duration for a given exercise: a user-editable override (stored in
 * localStorage, set via the rest dropdown on the Exercise Detail View) if
 * one exists, otherwise the exercise's baseline default from PROGRAM,
 * otherwise 90s as a last resort. Kept separate from PROGRAM so the default
 * is editable without a code change/redeploy.
 */
function getExerciseRestDefault(exercise) {
    const overrides = StorageManager.getData()?.exerciseRestDefaults || {};
    if (overrides[exercise.id] != null) return overrides[exercise.id];
    return exercise.defaultRestSeconds ?? 90;
}

function setExerciseRestDefault(exerciseId, seconds) {
    const data = StorageManager.getData();
    if (!data.exerciseRestDefaults) data.exerciseRestDefaults = {};
    data.exerciseRestDefaults[exerciseId] = seconds;
    StorageManager.saveData(data);
}

function openExerciseDetail(exerciseIndex) {
    const exercise = getDay(currentDay).exercises[exerciseIndex];
    currentExerciseIndex = exerciseIndex;
    editingSetNum = null;

    document.getElementById('detail-exercise-name').textContent = exercise.name;

    const warningEl = document.getElementById('detail-warning');
    if (exercise.warning) {
        warningEl.textContent = exercise.warning;
        warningEl.classList.remove('detail-warning-hidden');
    } else {
        warningEl.classList.add('detail-warning-hidden');
    }

    const noteEl = document.getElementById('detail-note');
    if (noteEl) {
        if (exercise.note) {
            noteEl.textContent = (exercise.tempo ? `${exercise.tempo}: ` : '') + exercise.note;
            noteEl.classList.remove('detail-note-hidden');
        } else {
            noteEl.classList.add('detail-note-hidden');
        }
    }

    renderExerciseRestDefault(exercise);
    renderDetailSets(exercise, exerciseIndex);
    renderExerciseTrend(exercise);
    document.getElementById('exercise-detail').classList.remove('hidden');

    // Restart video from beginning (user gesture context — required for iOS autoplay)
    const video = document.getElementById('detail-video');
    if (video) {
        video.onerror = () => onVideoError(video);
        video.src = exercise.video;
        video.currentTime = 0;
        video.play().catch(() => {});
    }

    // Warm up AudioContext during this user gesture so chime works later
    initAudioContext();
}

function closeExerciseDetail() {
    stopRestTimer();
    document.getElementById('exercise-detail').classList.add('hidden');
    currentExerciseIndex = null;
    editingSetNum = null;
    if (currentDay) renderExerciseList(getDay(currentDay).exercises);
}

/**
 * The exercise-level default rest control. This markup is static in
 * workout.html (not rebuilt per exercise like the set rows are), so the
 * change handler is assigned via .onchange rather than addEventListener —
 * that replaces the previous handler instead of stacking a new one every
 * time a different exercise's detail view is opened.
 */
function renderExerciseRestDefault(exercise) {
    const select = document.getElementById('detail-rest-default-select');
    if (!select) return;

    select.value = getExerciseRestDefault(exercise);
    select.onchange = () => {
        setExerciseRestDefault(exercise.id, parseInt(select.value));
    };
}

/**
 * One data point per session (not per set) — the heaviest weight logged for
 * this exercise that day, across ALL days/sessions in the last `months`
 * months (not just the current day), oldest first. Raw data only: no e1RM
 * or other derived "progress" metric, per design intent — just what was
 * actually lifted, session by session.
 */
function getWeightTrendForExercise(exerciseId, months) {
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - months);

    return StorageManager.getSessions()
        .filter(s => new Date(s.date) >= cutoff)
        .map(session => {
            const ex = session.exercises.find(e => e.id === exerciseId);
            if (!ex || !ex.sets.length) return null;
            const weights = ex.sets.map(s => s.weight).filter(w => typeof w === 'number');
            if (!weights.length) return null;
            return { date: session.date, weight: Math.max(...weights) };
        })
        .filter(Boolean)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
}

/**
 * Renders a small inline-SVG line chart into #detail-trend-container — a
 * lightweight hand-rolled chart rather than a library like Chart.js, since
 * pulling one in from a CDN would break the app's offline-first PWA design
 * (nothing here needs interactivity, so it isn't worth the tradeoff).
 * Skipped entirely for timed-hold exercises (Plank etc.) — there's no
 * weight to plot.
 */
function renderExerciseTrend(exercise) {
    const container = document.getElementById('detail-trend-container');
    if (!container) return;

    if (exercise.type === 'time') {
        container.innerHTML = '';
        return;
    }

    const points = getWeightTrendForExercise(exercise.id, 6);

    if (points.length === 0) {
        container.innerHTML = `
            <div class="trend-section">
                <h4 class="trend-title">Weight Trend (last 6 months)</h4>
                <p class="trend-empty">No previous sessions logged yet for this exercise.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="trend-section">
            <h4 class="trend-title">Weight Trend (last 6 months)</h4>
            ${buildTrendSvg(points, exercise.unit)}
        </div>
    `;
}

function buildTrendSvg(points, unit) {
    const W = 320, H = 160;
    const padL = 34, padR = 12, padT = 12, padB = 22;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    const dateMs = points.map(p => new Date(p.date + 'T00:00:00').getTime());
    const weights = points.map(p => p.weight);

    const minDate = Math.min(...dateMs);
    const maxDate = Math.max(...dateMs);
    const dateRange = maxDate - minDate || 1;

    const minWeightRaw = Math.min(...weights);
    const maxWeightRaw = Math.max(...weights);
    const weightSpan = (maxWeightRaw - minWeightRaw) || Math.max(maxWeightRaw * 0.1, 1);
    const minWeight = Math.max(0, minWeightRaw - weightSpan * 0.15);
    const maxWeight = maxWeightRaw + weightSpan * 0.15;
    const weightRange = (maxWeight - minWeight) || 1;

    const xFor = (t) => padL + (points.length === 1 ? plotW / 2 : ((t - minDate) / dateRange) * plotW);
    const yFor = (w) => padT + (1 - (w - minWeight) / weightRange) * plotH;

    const coords = points.map((p, i) => ({ x: xFor(dateMs[i]), y: yFor(p.weight) }));
    const linePoints = coords.map(c => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');

    const yLabelValues = [maxWeight, (maxWeight + minWeight) / 2, minWeight];
    const fmtShort = (ms) => new Date(ms).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

    const gridlines = yLabelValues.map(w => {
        const y = yFor(w).toFixed(1);
        return `
            <line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="trend-gridline" />
            <text x="${padL - 6}" y="${(parseFloat(y) + 3).toFixed(1)}" class="trend-axis-label" text-anchor="end">${Math.round(w)}</text>
        `;
    }).join('');

    const dots = coords.map(c => `<circle cx="${c.x.toFixed(1)}" cy="${c.y.toFixed(1)}" r="3.5" class="trend-dot" />`).join('');

    const dateLabels = `
        <text x="${padL}" y="${H - 4}" class="trend-axis-label" text-anchor="start">${fmtShort(minDate)}</text>
        ${points.length > 2 ? `<text x="${(padL + W - padR) / 2}" y="${H - 4}" class="trend-axis-label" text-anchor="middle">${fmtShort((minDate + maxDate) / 2)}</text>` : ''}
        ${points.length > 1 ? `<text x="${W - padR}" y="${H - 4}" class="trend-axis-label" text-anchor="end">${fmtShort(maxDate)}</text>` : ''}
    `;

    return `
        <svg viewBox="0 0 ${W} ${H}" class="trend-svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Weight trend chart">
            ${gridlines}
            ${points.length > 1 ? `<polyline points="${linePoints}" class="trend-line" fill="none" />` : ''}
            ${dots}
            ${dateLabels}
        </svg>
        <p class="trend-unit-label">Weight (${unit})</p>
    `;
}

function renderDetailSets(exercise, exerciseIndex) {
    const container = document.getElementById('detail-sets-container');
    container.innerHTML = '';

    const completedSets = sessionData[exerciseIndex] || {};
    const firstPending = findFirstPendingSet(exercise.sets, completedSets);

    for (let setNum = 1; setNum <= exercise.sets; setNum++) {
        const data = completedSets[setNum];
        const setEl = document.createElement('div');
        const setLabel = exercise.sideMode === 'variants'
            ? exercise.variantLabels[setNum - 1]
            : `Set ${setNum}`;

        if (data && setNum === editingSetNum) {
            // Already-logged set, currently being corrected
            setEl.className = 'detail-set active';
            setEl.innerHTML = `
                <div class="active-set-header">
                    <span class="set-status-icon active-dot">●</span>
                    <span class="set-label">Editing ${setLabel}</span>
                </div>
                <div class="active-set-inputs">${renderActiveSetInputs(exercise, setNum, data)}</div>
                <div class="edit-set-actions">
                    <button class="btn btn-secondary cancel-edit-btn">Cancel</button>
                    <button class="btn btn-primary save-edit-btn">✓ Save</button>
                </div>
            `;
            setEl.querySelector('.save-edit-btn').addEventListener('click', () => {
                saveSetEdit(exerciseIndex, setNum, exercise);
            });
            setEl.querySelector('.cancel-edit-btn').addEventListener('click', () => {
                editingSetNum = null;
                renderDetailSets(exercise, exerciseIndex);
            });
        } else if (data) {
            // Already-logged set — tap to correct it
            setEl.className = 'detail-set completed';
            setEl.innerHTML = `
                <span class="set-status-icon done-check">✓</span>
                <span class="set-label">${setLabel}</span>
                <span class="set-result">${formatSetResult(exercise, data)}</span>
                <span class="set-edit-icon" aria-hidden="true">✎</span>
            `;
            setEl.addEventListener('click', () => {
                if (editingSetNum !== null) return; // finish/cancel the current edit first
                editingSetNum = setNum;
                renderDetailSets(exercise, exerciseIndex);
            });
        } else if (setNum === firstPending) {
            setEl.className = 'detail-set active';
            setEl.innerHTML = `
                <div class="active-set-header">
                    <span class="set-status-icon active-dot">●</span>
                    <span class="set-label">${setLabel}</span>
                </div>
                <div class="active-set-inputs">${renderActiveSetInputs(exercise, setNum)}</div>
                <button class="btn btn-primary complete-set-btn">✓ Complete ${exercise.sideMode === 'variants' ? setLabel : `Set ${setNum}`}</button>
            `;
            setEl.querySelector('.complete-set-btn').addEventListener('click', () => {
                completeSet(exerciseIndex, setNum, exercise);
            });
        } else {
            setEl.className = 'detail-set pending';
            setEl.innerHTML = `
                <span class="set-status-icon">○</span>
                <span class="set-label">${setLabel}</span>
                <span class="set-pending-text">Pending</span>
            `;
        }

        container.appendChild(setEl);
    }

    if (!firstPending && editingSetNum === null) {
        const doneEl = document.createElement('div');
        doneEl.className = 'all-sets-done';
        doneEl.innerHTML = `
            <div class="done-icon">✓</div>
            <p>All sets complete!</p>
            <button class="btn btn-secondary" id="back-after-done-btn">← Back to exercises</button>
        `;
        container.appendChild(doneEl);
        document.getElementById('back-after-done-btn')
            .addEventListener('click', closeExerciseDetail);
    }
}

const REST_OPTIONS = [30, 60, 90, 120, 180];

function formatRestLabel(seconds) {
    // Matches the original static option labels: 30s/60s/90s/2m/3m — only the
    // two round-minute values switch to "Xm", not every value >= 60.
    if (seconds === 120) return '2m';
    if (seconds === 180) return '3m';
    return `${seconds}s`;
}

/**
 * Escapes a user-typed string for safe embedding inside an HTML attribute
 * (e.g. value="..."). Only needed for the machine-setup notes field below —
 * every other input's `value` is numeric (weight/reps), which can't contain
 * a stray `"` that would otherwise break out of the attribute.
 */
function escapeAttr(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Per-set rest-duration override dropdown, plus a free-text "machine setup"
 * notes field (e.g. "seat height 4, pin 6") — appended to every
 * active/editing set's inputs (all exercise types get both, including
 * timed holds). Rest pre-selects the set's existing restSeconds when
 * editing a past set, or the exercise's current default for a new set —
 * per-set changes here don't touch the exercise default itself. Notes has
 * no such default/inheritance; it's just whatever was typed for this set,
 * blank otherwise.
 */
function renderRestSelectHtml(setNum, selectedSeconds, setupNotes) {
    return `
        <div class="set-rest-selector">
            <div class="set-rest-control">
                <span class="rest-selector-label">Rest</span>
                <select class="rest-select" id="set-rest-${setNum}">
                    ${REST_OPTIONS.map(s => `
                        <option value="${s}"${s === selectedSeconds ? ' selected' : ''}>${formatRestLabel(s)}</option>
                    `).join('')}
                </select>
            </div>
            <input type="text" class="setup-notes-input" id="set-setup-${setNum}"
                   placeholder="Machine setup (optional)"
                   value="${escapeAttr(setupNotes || '')}">
        </div>
    `;
}

function readSetRestSeconds(setNum, exercise) {
    const select = document.getElementById(`set-rest-${setNum}`);
    return select ? parseInt(select.value) : getExerciseRestDefault(exercise);
}

function readSetupNotes(setNum) {
    const input = document.getElementById(`set-setup-${setNum}`);
    return input ? input.value.trim() : '';
}

function renderActiveSetInputs(exercise, setNum, existingData) {
    const restSeconds = existingData?.restSeconds ?? getExerciseRestDefault(exercise);
    const restSelectHtml = renderRestSelectHtml(setNum, restSeconds, existingData?.setupNotes);

    if (exercise.sideMode === 'variants') {
        const seconds = existingData?.seconds;
        return `
            <div class="input-group">
                <label>Hold (seconds)</label>
                <input type="number" id="set-seconds-${setNum}" placeholder="${exercise.holdSeconds}" ${seconds != null ? `value="${seconds}"` : ''} inputmode="numeric">
            </div>
            ${restSelectHtml}
        `;
    }

    const weightValue = existingData?.weight;
    const lastWeight = weightValue ?? (getLastWeightForExercise(currentDay, exercise.id) ?? exercise.startWeight ?? 0);
    const weightInput = `
        <div class="input-group input-group-weight">
            <label>Weight (${exercise.unit})</label>
            <input type="number" id="set-weight-${setNum}" placeholder="${lastWeight}" ${weightValue != null ? `value="${weightValue}"` : ''} step="0.5" inputmode="decimal">
        </div>
    `;

    if (exercise.sideMode === 'perSide') {
        return `
            ${weightInput}
            <div class="side-inputs">
                <div class="input-group">
                    <label>Reps (L)</label>
                    <input type="number" id="set-reps-l-${setNum}" placeholder="${exercise.reps}" ${existingData ? `value="${existingData.repsL}"` : ''} inputmode="numeric">
                </div>
                <div class="input-group">
                    <label>Reps (R)</label>
                    <input type="number" id="set-reps-r-${setNum}" placeholder="${exercise.reps}" ${existingData ? `value="${existingData.repsR}"` : ''} inputmode="numeric">
                </div>
            </div>
            ${restSelectHtml}
        `;
    }

    return `
        ${weightInput}
        <div class="input-group">
            <label>Reps${exercise.sideMode === 'totalCombined' ? ' (total)' : ''}</label>
            <input type="number" id="set-reps-${setNum}" placeholder="${exercise.reps}" ${existingData ? `value="${existingData.reps}"` : ''} inputmode="numeric">
        </div>
        ${restSelectHtml}
    `;
}

function formatSetResult(exercise, data) {
    if (exercise.sideMode === 'variants') {
        return `${data.seconds}s`;
    }
    if (exercise.sideMode === 'perSide') {
        return `${data.weight} ${exercise.unit} × L${data.repsL} / R${data.repsR}`;
    }
    if (exercise.sideMode === 'totalCombined') {
        return `${data.weight} ${exercise.unit} × ${data.reps} reps (total)`;
    }
    return `${data.weight} ${exercise.unit} × ${data.reps} reps`;
}

/**
 * Reads whatever set-logging inputs are currently rendered for `setNum`
 * (shared by completeSet and saveSetEdit — the two only differ in what
 * happens after the entry is captured).
 */
function readSetInputs(exercise, setNum) {
    const restSeconds = readSetRestSeconds(setNum, exercise);
    const setupNotes = readSetupNotes(setNum);

    if (exercise.sideMode === 'variants') {
        const secondsInput = document.getElementById(`set-seconds-${setNum}`);
        const seconds = secondsInput.value !== ''
            ? parseInt(secondsInput.value)
            : parseInt(secondsInput.placeholder) || exercise.holdSeconds;
        return { seconds, restSeconds, setupNotes };
    }

    const weightInput = document.getElementById(`set-weight-${setNum}`);
    const weight = weightInput.value !== ''
        ? parseFloat(weightInput.value)
        : parseFloat(weightInput.placeholder) || exercise.startWeight || 0;

    if (exercise.sideMode === 'perSide') {
        const repsLInput = document.getElementById(`set-reps-l-${setNum}`);
        const repsRInput = document.getElementById(`set-reps-r-${setNum}`);
        const repsL = repsLInput.value !== '' ? parseInt(repsLInput.value) : parseInt(repsLInput.placeholder) || exercise.reps;
        const repsR = repsRInput.value !== '' ? parseInt(repsRInput.value) : parseInt(repsRInput.placeholder) || exercise.reps;
        return { weight, repsL, repsR, restSeconds, setupNotes };
    }

    const repsInput = document.getElementById(`set-reps-${setNum}`);
    const reps = repsInput.value !== '' ? parseInt(repsInput.value) : parseInt(repsInput.placeholder) || exercise.reps;
    return { weight, reps, restSeconds, setupNotes };
}

function completeSet(exerciseIndex, setNum, exercise) {
    const entry = readSetInputs(exercise, setNum);

    if (!sessionData[exerciseIndex]) sessionData[exerciseIndex] = {};
    sessionData[exerciseIndex][setNum] = entry;

    renderDetailSets(exercise, exerciseIndex);

    if (getCompletedSetCount(exerciseIndex) < exercise.sets) {
        startRestTimer(entry.restSeconds);
    }
}

/**
 * Corrects a set that was already logged this session. Deliberately does
 * NOT start the rest timer or otherwise touch progress through the rest of
 * the sets — this is a correction, not new logging. Nothing is written to
 * localStorage here; sessionData only gets persisted as a whole when
 * "Complete Workout" is tapped, so the corrected value flows through
 * automatically whenever that happens.
 */
function saveSetEdit(exerciseIndex, setNum, exercise) {
    sessionData[exerciseIndex][setNum] = readSetInputs(exercise, setNum);
    editingSetNum = null;
    renderDetailSets(exercise, exerciseIndex);
}

function initAudioContext() {
    if (audioCtx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    audioCtx = new AudioCtx();
}

function playTimerChime() {
    if (!audioCtx) return;
    try {
        audioCtx.resume().then(() => {
            [[880, 0, 0.25], [1100, 0.3, 0.4]].forEach(([freq, delay, dur]) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.4, audioCtx.currentTime + delay);
                gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + dur);
                osc.start(audioCtx.currentTime + delay);
                osc.stop(audioCtx.currentTime + delay + dur + 0.05);
            });
        });
    } catch (e) { /* audio not available */ }
}

function startRestTimer(seconds) {
    const duration = seconds || 90;
    restTotalDuration = duration;
    timerEndTime = Date.now() + duration * 1000;

    const bar = document.getElementById('rest-timer-bar');
    bar.classList.remove('rest-timer-hidden', 'timer-done');

    if (restTimerInterval) clearInterval(restTimerInterval);
    tickTimer();
    restTimerInterval = setInterval(tickTimer, 500);
}

function tickTimer() {
    if (!timerEndTime) return;
    const remaining = Math.ceil((timerEndTime - Date.now()) / 1000);
    restTimeRemaining = Math.max(0, remaining);
    updateRestTimerDisplay();

    if (restTimeRemaining <= 0) {
        if (restTimerInterval) { clearInterval(restTimerInterval); restTimerInterval = null; }
        timerEndTime = null;
        document.getElementById('rest-timer-bar').classList.add('timer-done');
        playTimerChime();
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
}

function updateRestTimerDisplay() {
    const mins = Math.floor(restTimeRemaining / 60);
    const secs = restTimeRemaining % 60;
    document.getElementById('rest-timer-display').textContent =
        `${mins}:${secs.toString().padStart(2, '0')}`;
    const pct = restTotalDuration > 0 ? (restTimeRemaining / restTotalDuration) * 100 : 0;
    document.getElementById('rest-timer-fill').style.width = pct + '%';
}

function stopRestTimer() {
    if (restTimerInterval) {
        clearInterval(restTimerInterval);
        restTimerInterval = null;
    }
    timerEndTime = null;
    const bar = document.getElementById('rest-timer-bar');
    if (bar) {
        bar.classList.add('rest-timer-hidden');
        bar.classList.remove('timer-done');
    }
}

function updateProgressBar(exercises) {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    let total = 0;
    let completed = 0;
    exercises.forEach((ex, idx) => {
        total += ex.sets;
        completed += getCompletedSetCount(idx);
    });

    const pct = total > 0 ? (completed / total) * 100 : 0;
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) progressText.textContent = `${completed} of ${total} sets completed`;
}

/**
 * Builds a self-describing session record: every exercise snapshots its own
 * name/unit/type/sideMode/tempo at save time, so history keeps rendering
 * correctly even after a future program swap changes/removes this exercise.
 */
function completeWorkout(day) {
    const today = getTodayDate();
    const sessionExercises = [];

    day.exercises.forEach((exercise, exerciseIdx) => {
        const setData = sessionData[exerciseIdx];
        if (!setData) return;

        const sets = Object.entries(setData)
            .map(([setNum, data]) => ({ setNumber: parseInt(setNum), ...data }))
            .sort((a, b) => a.setNumber - b.setNumber);

        if (sets.length > 0) {
            sessionExercises.push({
                id: exercise.id,
                name: exercise.name,
                unit: exercise.unit,
                type: exercise.type,
                sideMode: exercise.sideMode,
                variantLabels: exercise.variantLabels || null,
                tempo: exercise.tempo || null,
                sets
            });
        }
    });

    if (sessionExercises.length === 0) {
        alert('Please complete at least one set before finishing the workout.');
        return;
    }

    const session = {
        id: generateUUID(),
        programId: PROGRAM.programId,
        programName: PROGRAM.programName,
        dayId: day.id,
        dayName: day.name,
        date: today,
        exercises: sessionExercises
    };

    StorageManager.addSession(session);
    alert(`✓ Workout Day ${day.id} saved! ${sessionExercises.length} exercises logged.`);
    sessionData = {};
    sessionStorage.removeItem('currentWorkoutDay');
    navigateTo('index.html');
}

/* ===================================================================
   6. INFO SCREEN LOGIC
   =================================================================== */

/**
 * "Force Refresh" button: unregisters the service worker and clears its
 * Cache Storage entries (stale app.js/style.css/HTML), then navigates to
 * a freshly-fetched home screen. Deliberately does NOT touch localStorage,
 * so logged workout history survives — unlike clearing site data in the
 * phone's browser settings, which wipes everything for the site.
 */
function initInfoScreen() {
    document.getElementById('force-refresh-btn')?.addEventListener('click', async (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        btn.textContent = 'Refreshing…';

        try {
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                await Promise.all(registrations.map(r => r.unregister()));
            }
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
            }
        } catch (err) {
            console.error('Force refresh failed:', err);
        }

        window.location.href = 'index.html';
    });
}

/* ===================================================================
   7. INITIALIZATION ON PAGE LOAD
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('='.repeat(60));
    console.log('MALESTROM - Application Started');
    console.log('='.repeat(60));

    // Initialize storage structure
    StorageManager.init();

    // Determine which screen we're on and initialize
    if (document.getElementById('home-screen')) {
        initHomeScreen();
    } else if (document.getElementById('workout-screen')) {
        initWorkoutScreen();
    } else if (document.getElementById('info-screen')) {
        initInfoScreen();
    }

    console.log('✓ Application ready');
});
