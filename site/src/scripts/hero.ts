// Hero: each line of the title rises from behind a mask (1.1 s, ~100 ms stagger),
// then the positioning line fades up. Lines are detected at run time so the
// stagger follows the real line breaks at every width.
export function revealHero(): void {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  const units = Array.from(hero.querySelectorAll<HTMLElement>('.hero__title .mask'));
  let line = -1;
  let lastTop = Number.NEGATIVE_INFINITY;
  for (const unit of units) {
    const top = Math.round(unit.offsetTop);
    if (top > lastTop + 2) {
      line += 1;
      lastTop = top;
    }
    (unit.firstElementChild as HTMLElement | null)?.style.setProperty('--line', String(line));
  }
  hero.style.setProperty('--lines', String(line + 1));
  requestAnimationFrame(() => hero.classList.add('is-revealed'));
}
