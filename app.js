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
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Eccentric',
                    note: 'Slow descent — slowly lower the dumbbells toward your upper chest (sternum/clavicle area) for a controlled count of 3 to 5 seconds before driving back to the start position.',
                    warning: null,
                    video: 'videos/db-incline-chest-press.mp4', sourceVideoUrl: 'https://youtube.com/shorts/8fXfwG4ftaQ?si=fjM1P9mxNli7dJxd'
                },
                {
                    id: 'db-standing-lateral-raise', name: 'DB Standing Lateral Raise',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-standing-lateral-raise.mp4', sourceVideoUrl: 'https://youtube.com/shorts/U2gMn8GXr2A?si=Z3EZjgYy46eNnBCm'
                },
                {
                    id: 'db-chest-flys', name: 'DB Chest Flys',
                    sets: 4, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Tempo 3/1/3',
                    note: '3s down in a wide arc with a slight elbow bend (~10-15°) — actively stretches the pecs. 1s pause at chest level (no bouncing). 3s up, squeezing the pecs in a wide hugging motion back to the start, stopping just short of the dumbbells touching at the top to keep constant tension.',
                    warning: null,
                    video: 'videos/db-chest-flys.mp4', sourceVideoUrl: 'https://youtube.com/shorts/rk8YayRoTRQ?si=Ue2D0hHZf4OFoThu'
                },
                {
                    id: 'cable-tricep-pushdown', name: 'Cable Tricep Pushdowns',
                    sets: 3, reps: 15, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/cable-tricep-pushdown.mp4', sourceVideoUrl: 'https://youtube.com/shorts/1FjkhpZsaxc?si=L30mWGwYwb6EOG-q'
                },
                {
                    id: 'db-bench-pullover', name: 'DB Bench Pullovers',
                    sets: 4, reps: 12, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-bench-pullover.mp4', sourceVideoUrl: 'https://youtube.com/shorts/Datv2L6t3-4?si=I3S5r_z70LDwC4fM'
                },
                {
                    id: 'db-tricep-overhead-extension', name: 'DB Tricep Overhead Extension',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
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
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Tempo 3/1/3',
                    note: 'From the top position with arms extended, pull the bar down to your upper chest taking 3s. Pause at the chest for 1s. Then slowly control the bar back up to the starting position taking exactly 3s.',
                    warning: null,
                    video: 'videos/lat-pulldown.mp4', sourceVideoUrl: 'https://youtube.com/shorts/bNmvKpJSWKM?si=oHHZebRIQFEZp8ms'
                },
                {
                    id: 'cable-bicep-curl', name: 'Cable Bicep Curls',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/cable-bicep-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/CrbTqNOlFgE?si=bDmA2DDgOs-tsk_1'
                },
                {
                    id: 'db-one-arm-row', name: 'DB One-Arm Row',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'perSide', unit: 'kg', startWeight: null,
                    tempo: null,
                    note: '2 second pause at the top of each rep.',
                    warning: null,
                    video: 'videos/db-one-arm-row.mp4', sourceVideoUrl: 'https://youtube.com/shorts/yHqqGd0tXcw?si=OUEF-Gar595Uyz_2'
                },
                {
                    id: 'db-seated-hammer-curl', name: 'DB Seated Alt. Hammer Curl',
                    sets: 4, reps: 12, type: 'reps', sideMode: 'totalCombined', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-seated-hammer-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/cR2yNeMt1Xo?si=e03gOdSC7zCol0CI'
                },
                {
                    id: 'seated-row', name: 'Seated Row',
                    sets: 3, reps: 8, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Eccentric',
                    note: 'Instead of letting the weight snap your arms forward, slowly extend your arms back to the starting position. Take 3 to 5 seconds to control the stack, allowing a deep stretch in your lats at the end of the movement.',
                    warning: null,
                    video: 'videos/seated-row.mp4', sourceVideoUrl: 'https://youtube.com/shorts/qD1WZ5pSuvk?si=_HdzoMNspqzFCv7p'
                },
                {
                    id: 'bb-bicep-21s', name: "BB Bicep 21's",
                    sets: 3, reps: 21, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
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
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Tempo 3/1/3',
                    note: '3s controlled descent — core tight, chest up, knees tracking properly. 1s pause in the hole, no bouncing. 3s smooth ascent, driving evenly through mid-foot and hips until standing tall.',
                    warning: null,
                    video: 'videos/bb-back-squat.mp4', sourceVideoUrl: 'https://youtube.com/shorts/dW3zj79xfrc?si=9KTTsYBade2ueL7u'
                },
                {
                    id: 'db-walking-lunge', name: 'DB Walking Lunge',
                    sets: 3, reps: 12, type: 'reps', sideMode: 'totalCombined', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/db-walking-lunge.mp4', sourceVideoUrl: 'https://youtube.com/shorts/mWnmd5ZVcFw?si=jZOIjaptgA0nzBoA'
                },
                {
                    id: 'bb-deadlift', name: 'BB Deadlift',
                    sets: 4, reps: 6, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/bb-deadlift.mp4', sourceVideoUrl: 'https://youtube.com/shorts/xNwpvDuZJ3k?si=NttTJEc74-XW6Ojr'
                },
                {
                    id: 'seated-leg-curl', name: 'Seated Leg Curl',
                    sets: 3, reps: 10, type: 'reps', sideMode: 'none', unit: 'kg', startWeight: null,
                    tempo: 'Eccentric',
                    note: 'Release the weight slowly and deliberately back to the starting position. This phase should take 3 to 5 seconds to maximize muscle tension.',
                    warning: null,
                    video: 'videos/seated-leg-curl.mp4', sourceVideoUrl: 'https://youtube.com/shorts/xdbEG3xGLI8?si=MDxOHsez4NPuDH_d'
                },
                {
                    id: 'plank-side-plank', name: 'Plank & Side Plank',
                    sets: 3, reps: null, type: 'time', sideMode: 'variants',
                    variantLabels: ['Plank', 'Side Plank (Left)', 'Side Plank (Right)'],
                    holdSeconds: 30, unit: 'sec', startWeight: null,
                    tempo: null, note: null, warning: null,
                    video: 'videos/plank-side-plank.mp4',
                    sourceVideoUrl: ['https://youtube.com/shorts/xe2MXatLTUw?si=Wvk0w27B4WV-Ik6U', 'https://youtube.com/shorts/BtM0a9x1F5o?si=i_MuYmZjv3M5xMGW']
                },
                {
                    id: 'russian-twist', name: 'Russian Twist',
                    sets: 3, reps: 20, type: 'reps', sideMode: 'totalCombined', unit: 'bodyweight/kg', startWeight: null,
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
                    restPeriod: 90, // Default 90 seconds
                    theme: 'dark'
                }
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
     * @param {String} key - Setting key (e.g., 'restPeriod')
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
    // page should be 'index.html', 'workout.html', 'history.html', or 'info.html'
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
                        <h3 class="day-letter">Day ${day.id}</h3>
                        <p class="day-focus">${day.name}</p>
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

    // Add handler for view history button
    const historyBtn = document.getElementById('view-history-btn');
    if (historyBtn) {
        historyBtn.addEventListener('click', () => {
            navigateTo('history.html');
        });
    }
}

/* ===================================================================
   5. WORKOUT SCREEN LOGIC
   =================================================================== */

// In-session state (cleared on each new workout)
let sessionData = {};           // { exerciseIndex: { setNum: {...} } }
let currentExerciseIndex = null;
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

    // Rest duration selector — mark saved setting as active
    const savedPeriod = StorageManager.getSettings()?.restPeriod || 90;
    document.querySelectorAll('.rest-opt-btn').forEach(btn => {
        if (parseInt(btn.dataset.seconds) === savedPeriod) btn.classList.add('active');
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.rest-opt-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            StorageManager.updateSetting('restPeriod', parseInt(e.currentTarget.dataset.seconds));
        });
    });

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

/**
 * Warm-up is a non-logging checklist: tap a row to check it off for this
 * session. Nothing here is persisted to history.
 */
function renderWarmup(warmup) {
    const container = document.getElementById('warmup-container');
    if (!container) return;

    if (!warmup || !warmup.items || !warmup.items.length) {
        container.innerHTML = '';
        return;
    }

    const roundsLabel = [warmup.cardio, warmup.rounds ? `${warmup.rounds} rounds` : null]
        .filter(Boolean).join(' · ');

    container.innerHTML = `
        <button type="button" class="warmup-toggle" id="warmup-toggle">
            <span>🔥 Warm-up${roundsLabel ? ` — ${roundsLabel}` : ''}</span>
            <span class="warmup-toggle-icon">▾</span>
        </button>
        <div class="warmup-list" id="warmup-list">
            ${warmup.items.map((item, idx) => `
                <div class="warmup-item" data-warmup-idx="${idx}">
                    <div class="warmup-item-thumb">
                        <video src="${item.video}" onerror="onVideoError(this)"
                               autoplay loop muted playsinline></video>
                    </div>
                    <div class="warmup-item-info">
                        <div class="warmup-item-name">${item.name}</div>
                        <div class="warmup-item-reps">${item.reps}x${item.perSide ? ' each side' : ''}${item.note ? ` — ${item.note}` : ''}</div>
                    </div>
                    <span class="warmup-item-check">○</span>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('warmup-toggle')?.addEventListener('click', () => {
        document.getElementById('warmup-list')?.classList.toggle('expanded');
        document.getElementById('warmup-toggle')?.classList.toggle('expanded');
    });

    container.querySelectorAll('.warmup-item').forEach(row => {
        row.addEventListener('click', () => {
            row.classList.toggle('done');
            const check = row.querySelector('.warmup-item-check');
            if (check) check.textContent = row.classList.contains('done') ? '✓' : '○';
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

function openExerciseDetail(exerciseIndex) {
    const exercise = getDay(currentDay).exercises[exerciseIndex];
    currentExerciseIndex = exerciseIndex;

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

    renderDetailSets(exercise, exerciseIndex);
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
    if (currentDay) renderExerciseList(getDay(currentDay).exercises);
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

        if (data) {
            setEl.className = 'detail-set completed';
            setEl.innerHTML = `
                <span class="set-status-icon done-check">✓</span>
                <span class="set-label">${setLabel}</span>
                <span class="set-result">${formatSetResult(exercise, data)}</span>
            `;
        } else if (setNum === firstPending) {
            setEl.className = 'detail-set active';
            setEl.innerHTML = `
                <div class="active-set-header">
                    <span class="set-status-icon active-dot">●</span>
                    <span class="set-label">${setLabel}</span>
                </div>
                <div class="active-set-inputs">${renderActiveSetInputs(exercise)}</div>
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

    if (!firstPending) {
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

function renderActiveSetInputs(exercise) {
    if (exercise.sideMode === 'variants') {
        return `
            <div class="input-group">
                <label>Hold (seconds)</label>
                <input type="number" id="active-seconds" placeholder="${exercise.holdSeconds}" inputmode="numeric">
            </div>
        `;
    }

    const lastWeight = getLastWeightForExercise(currentDay, exercise.id) ?? exercise.startWeight ?? 0;
    const weightInput = `
        <div class="input-group input-group-weight">
            <label>Weight (${exercise.unit})</label>
            <input type="number" id="active-weight" placeholder="${lastWeight}" step="0.5" inputmode="decimal">
        </div>
    `;

    if (exercise.sideMode === 'perSide') {
        return `
            ${weightInput}
            <div class="side-inputs">
                <div class="input-group">
                    <label>Reps (Left)</label>
                    <input type="number" id="active-reps-l" placeholder="${exercise.reps}" inputmode="numeric">
                </div>
                <div class="input-group">
                    <label>Reps (Right)</label>
                    <input type="number" id="active-reps-r" placeholder="${exercise.reps}" inputmode="numeric">
                </div>
            </div>
        `;
    }

    return `
        ${weightInput}
        <div class="input-group">
            <label>Reps${exercise.sideMode === 'totalCombined' ? ' (total)' : ''}</label>
            <input type="number" id="active-reps" placeholder="${exercise.reps}" inputmode="numeric">
        </div>
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

function completeSet(exerciseIndex, setNum, exercise) {
    let entry;

    if (exercise.sideMode === 'variants') {
        const secondsInput = document.getElementById('active-seconds');
        const seconds = secondsInput.value !== ''
            ? parseInt(secondsInput.value)
            : parseInt(secondsInput.placeholder) || exercise.holdSeconds;
        entry = { seconds };
    } else {
        const weightInput = document.getElementById('active-weight');
        const weight = weightInput.value !== ''
            ? parseFloat(weightInput.value)
            : parseFloat(weightInput.placeholder) || exercise.startWeight || 0;

        if (exercise.sideMode === 'perSide') {
            const repsLInput = document.getElementById('active-reps-l');
            const repsRInput = document.getElementById('active-reps-r');
            const repsL = repsLInput.value !== '' ? parseInt(repsLInput.value) : parseInt(repsLInput.placeholder) || exercise.reps;
            const repsR = repsRInput.value !== '' ? parseInt(repsRInput.value) : parseInt(repsRInput.placeholder) || exercise.reps;
            entry = { weight, repsL, repsR };
        } else {
            const repsInput = document.getElementById('active-reps');
            const reps = repsInput.value !== '' ? parseInt(repsInput.value) : parseInt(repsInput.placeholder) || exercise.reps;
            entry = { weight, reps };
        }
    }

    if (!sessionData[exerciseIndex]) sessionData[exerciseIndex] = {};
    sessionData[exerciseIndex][setNum] = entry;

    renderDetailSets(exercise, exerciseIndex);

    if (getCompletedSetCount(exerciseIndex) < exercise.sets) {
        startRestTimer();
    }
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

function startRestTimer() {
    const settings = StorageManager.getSettings();
    const duration = (settings && settings.restPeriod) ? settings.restPeriod : 90;
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
   6. HISTORY SCREEN LOGIC
   =================================================================== */

/**
 * Initialize the history screen
 */
function initHistoryScreen() {
    console.log('Initializing history screen...');

    const filterContainer = document.getElementById('filter-buttons');
    if (filterContainer) {
        const buttons = [{ id: 'all', label: 'All Days' }, ...PROGRAM.days.map(d => ({ id: d.id, label: `Day ${d.id}` }))];
        filterContainer.innerHTML = buttons.map((b, idx) => `
            <button class="filter-btn${idx === 0 ? ' active' : ''}" data-filter="${b.id}">${b.label}</button>
        `).join('');
    }

    renderHistory('all');

    // Add filter button handlers
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Re-render with filter
            const filter = e.target.dataset.filter;
            renderHistory(filter);
        });
    });
}

/**
 * Render the history of all sessions
 */
function renderHistory(filter) {
    const container = document.getElementById('history-container');
    if (!container) return;

    let sessions = StorageManager.getSessions();

    // Filter by day if specified
    if (filter !== 'all') {
        sessions = sessions.filter(s => s.dayId === filter);
    }

    // Sort by date (newest first)
    sessions.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render
    if (sessions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No workouts logged yet.</p>
                <p class="empty-state-hint">Start a workout on the home screen to see your history here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = sessions.map(session => `
        <div class="session-item" data-session-id="${session.id}">
            <div class="session-info">
                <div class="session-day">Day ${session.dayId} — ${session.dayName}</div>
                <div class="session-date">${formatDateReadable(session.date)} • ${session.exercises.length} exercises</div>
            </div>
            <div class="session-arrow">›</div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.session-item').forEach(item => {
        item.addEventListener('click', () => {
            const sessionId = item.dataset.sessionId;
            const session = StorageManager.getSessions().find(s => s.id === sessionId);
            if (session) {
                showSessionModal(session);
            }
        });
    });
}

/**
 * Show session details in a modal
 */
function showSessionModal(session) {
    const modal = document.getElementById('session-modal');
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-session-title');
    const content = document.getElementById('modal-exercises');

    if (!modal || !overlay || !title || !content) return;

    // Set title
    title.textContent = `Day ${session.dayId} — ${session.dayName} — ${formatDateReadable(session.date)}`;

    // Render exercises
    content.innerHTML = session.exercises.map(exercise => {
        const setsHTML = exercise.sets.map(set => `
            <div class="modal-set">${formatHistorySetLine(exercise, set)}</div>
        `).join('');

        return `
            <div class="modal-exercise-item">
                <div class="modal-exercise-name">${exercise.name}</div>
                ${setsHTML}
            </div>
        `;
    }).join('');

    // Show modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // Add close handlers
    const closeBtn = document.querySelector('.modal-close');
    const closeBtnBottom = document.getElementById('modal-close-btn');

    const closeModal = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

function formatHistorySetLine(exercise, set) {
    const label = exercise.sideMode === 'variants' && exercise.variantLabels
        ? exercise.variantLabels[set.setNumber - 1]
        : `Set ${set.setNumber}`;

    if (exercise.sideMode === 'variants') {
        return `${label}: ${set.seconds}s`;
    }
    if (exercise.sideMode === 'perSide') {
        return `${label}: ${set.weight} ${exercise.unit} × L${set.repsL} / R${set.repsR}`;
    }
    if (exercise.sideMode === 'totalCombined') {
        return `${label}: ${set.weight} ${exercise.unit} × ${set.reps} reps (total)`;
    }
    return `${label}: ${set.weight} ${exercise.unit} × ${set.reps} reps`;
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
    } else if (document.getElementById('history-screen')) {
        initHistoryScreen();
    }

    console.log('✓ Application ready');
});
