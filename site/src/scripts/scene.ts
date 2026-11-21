// Project scenes: entry choreography and scroll depth for every scene;
// the playing device for the scene that has one (Taggo).
//
// Player rules (Agreed design direction, sections 5 and 7):
// - real screens cross-fade about every 2.6 s, with step label and segmented progress
// - hovering or touching the screen, or keyboard focus on a step button,
//   holds the current screen; pressing Play always resumes
// - a visible pause control is always present
// - the progress segments are real buttons: choosing one shows that step, marks
//   it as current, clears the others and pauses playback
// - with reduced motion there is no automatic cycling at all: the device stays
//   on the first screen, the Pause/Play control is hidden (there is nothing to
//   pause) and visitors change screens only by choosing a step. This also
//   follows the setting if it changes while the page is open.

const STEP_MS = 2600;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function initScenes(): void {
  document.querySelectorAll<HTMLElement>('[data-scene]').forEach(initScene);
}

function initScene(scene: HTMLElement): void {

  // Entry: once, when the scene comes into view
  const entry = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        scene.classList.add('is-in');
        entry.disconnect();
      }
    },
    { rootMargin: '0px 0px -15% 0px' },
  );
  entry.observe(scene);

  // Scroll depth follows touch and pointer devices, with less travel on small
  // screens. Reduced-motion visitors see a still composition.
  {
    let queued = false;
    const update = () => {
      queued = false;
      if (reduceMotion.matches) {
        scene.style.setProperty('--depth', '0');
        return;
      }
      const r = scene.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      scene.style.setProperty('--depth', Math.max(-1, Math.min(1, p)).toFixed(4));
    };
    const queue = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue, { passive: true });
    reduceMotion.addEventListener('change', queue);
    update();
  }

  if (scene.querySelector('[data-player]')) initPlayer(scene);
}

function initPlayer(scene: HTMLElement): void {
  const player = scene.querySelector<HTMLElement>('[data-player]');
  const media = scene.querySelector<HTMLElement>('[data-media]');
  const device = scene.querySelector<HTMLElement>('[data-device]');
  const images = Array.from(scene.querySelectorAll<HTMLImageElement>('[data-screen-index]'));
  const steps = Array.from(scene.querySelectorAll<HTMLButtonElement>('[data-step]'));
  const toggle = scene.querySelector<HTMLButtonElement>('[data-toggle]');
  const nowNum = scene.querySelector<HTMLElement>('[data-now-num]');
  const nowLabel = scene.querySelector<HTMLElement>('[data-now-label]');
  const live = scene.querySelector<HTMLElement>('[data-live]');
  const caseLink = scene.querySelector<HTMLAnchorElement>('[data-case-link]');
  if (!player || !media || !device || !toggle || images.length === 0) return;

  const count = images.length;
  let index = 0;
  let paused = reduceMotion.matches;
  let held = false;
  let inView = false;
  let timer = 0;

  const restartFill = () => {
    player.classList.remove('is-ticking');
    void player.offsetWidth; // restart the CSS progress animation
    player.classList.add('is-ticking');
  };

  const render = (announce = false) => {
    images.forEach((img, i) => {
      const active = i === index;
      img.classList.toggle('is-active', active);
      if (active) img.removeAttribute('aria-hidden');
      else img.setAttribute('aria-hidden', 'true');
    });
    steps.forEach((btn, i) => {
      btn.classList.toggle('is-done', i < index);
      if (i === index) btn.setAttribute('aria-current', 'step');
      else btn.removeAttribute('aria-current');
    });
    const current = steps[index];
    if (current && nowNum && nowLabel) {
      nowNum.textContent = current.dataset.num ?? '';
      nowLabel.textContent = current.dataset.label ?? '';
    }
    if (announce && live && current) {
      live.textContent = `Showing step ${current.dataset.num}: ${current.dataset.label}`;
    }
  };

  const canPlay = () => !reduceMotion.matches && !paused && !held && inView && !document.hidden;

  const schedule = () => {
    window.clearTimeout(timer);
    const playing = canPlay();
    player.classList.toggle('is-playing', playing);
    if (!playing) return;
    restartFill();
    timer = window.setTimeout(() => {
      index = (index + 1) % count;
      render();
      schedule();
    }, STEP_MS);
  };

  // The visible word and the accessible name change together ("Pause" /
  // "Pause Taggo screens"), so aria-pressed is not used.
  const setToggle = () => {
    const word = paused ? 'Play' : 'Pause';
    toggle.textContent = word;
    toggle.setAttribute('aria-label', `${word} ${scene.querySelector('[data-scene-name]')?.textContent?.trim() ?? ''} screens`.replace('  ', ' '));
  };

  // Reduced motion: no autoplay, so no Pause/Play control
  const applyMotionPreference = () => {
    const reduce = reduceMotion.matches;
    if (reduce) paused = true;
    if (reduce && document.activeElement === toggle) steps[index]?.focus();
    toggle.hidden = reduce;
    setToggle();
    schedule();
  };
  reduceMotion.addEventListener('change', applyMotionPreference);

  toggle.addEventListener('click', () => {
    if (reduceMotion.matches) return; // never start cycling under reduced motion
    paused = !paused;
    if (!paused) held = false; // an explicit Play wins over any hold
    setToggle();
    schedule();
  });

  steps.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      index = i;
      paused = true;
      setToggle();
      render(true);
      schedule();
    });
  });

  // Hold: mouse over the screen, keyboard focus on a step button, or a finger on the screen
  const stepGroup = scene.querySelector<HTMLElement>('.player__steps');
  device.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') {
      held = true;
      schedule();
    }
  });
  device.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse') {
      held = false;
      schedule();
    }
  });
  stepGroup?.addEventListener('focusin', () => {
    held = true;
    schedule();
  });
  stepGroup?.addEventListener('focusout', (e) => {
    if (!stepGroup.contains(e.relatedTarget as Node | null)) {
      held = false;
      schedule();
    }
  });
  device.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') {
      held = true;
      schedule();
    }
  });
  const release = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' && held) {
      held = false;
      schedule();
    }
  };
  device.addEventListener('pointerup', release);
  device.addEventListener('pointercancel', release);

  // Play only while the device is on screen and the tab is visible
  new IntersectionObserver((entries) => {
    inView = entries.some((e) => e.isIntersecting);
    schedule();
  }).observe(device);
  document.addEventListener('visibilitychange', schedule);

  // Remember the screen in view so the case study opens on the same one
  caseLink?.addEventListener('click', () => {
    try {
      sessionStorage.setItem('taggo-screen', String(index));
    } catch {
      /* storage unavailable */
    }
  });

  render();
  applyMotionPreference();
}
