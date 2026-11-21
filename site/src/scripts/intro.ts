// Intro: sparse particles at three depths, a slow push forward, two or three
// soft light trails and warm ambient light. At ~0.8 s the light gathers into a
// horizon line that opens onto the hero. Gone by about 1 s after the canvas
// starts, so the whole intro stays under 1.2 s from first paint.

const OPEN_AT = 680; // ms: horizon opens
const END_AT = 960; // ms: intro gone (opening transition is 0.28 s)
const HORIZON_FROM = 500; // ms: horizon line starts to draw

type Particle = { x: number; y: number; z: number; size: number; alpha: number; speed: number };
type Trail = { angle: number; start: number; speed: number; width: number };

const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

export function runIntro(onOpen: () => void): void {
  const root = document.documentElement;
  const el = document.querySelector<HTMLElement>('[data-intro]');
  if (!el || !root.classList.contains('has-intro')) {
    el?.remove();
    onOpen();
    return;
  }

  const canvas = el.querySelector('canvas');
  const ctx = canvas?.getContext('2d');
  const skip = el.querySelector<HTMLButtonElement>('[data-intro-skip]');

  let opened = false;
  let openedAt = 0;
  let finished = false;
  let raf = 0;

  const open = () => {
    if (opened) return;
    opened = true;
    openedAt = performance.now();
    el.classList.add('is-opening');
    onOpen();
  };

  const finish = () => {
    if (finished) return;
    finished = true;
    open();
    cancelAnimationFrame(raf);
    window.removeEventListener('keydown', onKey);
    window.removeEventListener('resize', resize);
    const hadFocus = el.contains(document.activeElement);
    const wait = Math.max(0, openedAt + 290 - performance.now());
    window.setTimeout(() => {
      root.classList.remove('has-intro');
      el.remove();
      if (hadFocus) document.getElementById('main')?.focus({ preventScroll: true });
    }, wait);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') finish();
  };
  window.addEventListener('keydown', onKey);
  skip?.addEventListener('click', (e) => {
    e.stopPropagation();
    finish();
  });
  el.addEventListener('pointerdown', finish);

  if (!canvas || !ctx) {
    finish();
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0;
  let H = 0;
  function resize() {
    W = canvas!.width = Math.round(window.innerWidth * dpr);
    H = canvas!.height = Math.round(window.innerHeight * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  // Sparse particles at three depths (far, mid, near)
  const layers = [
    { count: 54, size: 0.7, alpha: 0.45, speed: 0.55 },
    { count: 24, size: 1.1, alpha: 0.7, speed: 0.8 },
    { count: 8, size: 1.6, alpha: 0.95, speed: 1.1 },
  ];
  const particles: Particle[] = [];
  const spawn = (p: Partial<Particle>, z?: number): Particle => ({
    x: (Math.random() * 2 - 1) * 1.3,
    y: (Math.random() * 2 - 1) * 0.85,
    z: z ?? 0.25 + Math.random() * 0.75,
    size: p.size ?? 1,
    alpha: p.alpha ?? 0.6,
    speed: p.speed ?? 1,
  });
  for (const l of layers) {
    for (let i = 0; i < l.count; i++) particles.push(spawn(l));
  }

  // Two or three soft light trails
  const trails: Trail[] = [0, 1, 2].map((i) => ({
    angle: -2.6 + i * 2.1 + Math.random() * 0.5,
    start: 0.04 + Math.random() * 0.08,
    speed: 0.85 + Math.random() * 0.35,
    width: 1 + i * 0.35,
  }));

  const t0 = performance.now();
  let last = t0;

  const frame = (now: number) => {
    const t = now - t0;
    const dt = Math.min(now - last, 50);
    last = now;
    const k = Math.min(t / OPEN_AT, 1);
    const cx = W / 2;
    const cy = H / 2;
    const focal = Math.min(W, H) * 0.55;
    const reach = Math.max(W, H);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#0f0c0a';
    ctx.fillRect(0, 0, W, H);

    // Warm ambient light, gathering towards the centre
    const amb = ctx.createRadialGradient(cx, cy, 0, cx, cy, reach * 0.6);
    amb.addColorStop(0, `rgba(122, 84, 42, ${0.16 + 0.14 * k})`);
    amb.addColorStop(1, 'rgba(15, 12, 10, 0)');
    ctx.fillStyle = amb;
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = 'lighter';

    // Slow camera push: particles approach, accelerating slightly
    const push = 0.00055 * (0.6 + 1.4 * k * k);
    const fadeIn = Math.min(1, t / 220);
    for (const p of particles) {
      p.z -= dt * push * p.speed;
      if (p.z < 0.06) Object.assign(p, spawn(p, 1));
      const sx = cx + (p.x / p.z) * focal;
      const sy = cy + (p.y / p.z) * focal;
      if (sx < 0 || sx > W || sy < 0 || sy > H) continue;
      const r = Math.min((p.size * dpr * 0.5) / p.z, 3 * dpr);
      ctx.fillStyle = `rgba(255, 238, 214, ${p.alpha * fadeIn * (1 - p.z * 0.55)})`;
      ctx.beginPath();
      ctx.arc(sx, sy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Light trails sweeping outwards from the centre
    for (const tr of trails) {
      const prog = Math.min(1, (t / OPEN_AT) * tr.speed);
      const head = (tr.start + easeOut(prog) * 0.9) * reach * 0.62;
      const tail = Math.max(0, head - reach * 0.22 * prog);
      const cos = Math.cos(tr.angle);
      const sin = Math.sin(tr.angle);
      const x1 = cx + cos * tail;
      const y1 = cy + sin * tail * 0.62;
      const x2 = cx + cos * head;
      const y2 = cy + sin * head * 0.62;
      const a = 0.42 * Math.sin(Math.PI * Math.min(prog, 1)) * fadeIn;
      const g = ctx.createLinearGradient(x1, y1, x2, y2);
      g.addColorStop(0, 'rgba(255, 226, 170, 0)');
      g.addColorStop(1, `rgba(255, 236, 196, ${a})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = tr.width * dpr;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // The light gathers into a thin horizon line
    if (t > HORIZON_FROM) {
      const h = Math.min(1, (t - HORIZON_FROM) / (OPEN_AT - HORIZON_FROM));
      const half = (W / 2) * easeOut(h);
      const line = ctx.createLinearGradient(cx - half, 0, cx + half, 0);
      line.addColorStop(0, 'rgba(255, 232, 190, 0)');
      line.addColorStop(0.5, `rgba(255, 244, 222, ${0.95 * h})`);
      line.addColorStop(1, 'rgba(255, 232, 190, 0)');
      ctx.fillStyle = line;
      ctx.fillRect(cx - half, cy - dpr, half * 2, 2 * dpr);
      const glow = ctx.createLinearGradient(0, cy - 30 * dpr, 0, cy + 30 * dpr);
      glow.addColorStop(0, 'rgba(240, 200, 140, 0)');
      glow.addColorStop(0.5, `rgba(240, 200, 140, ${0.18 * h})`);
      glow.addColorStop(1, 'rgba(240, 200, 140, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(cx - half, cy - 30 * dpr, half * 2, 60 * dpr);
    }

    if (t >= OPEN_AT) open();
    if (t >= END_AT) {
      finish();
      return;
    }
    raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);
}
