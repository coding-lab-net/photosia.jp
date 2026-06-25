/**
 * PHOTOSIA — main.js
 * Version: 7.0 (2026)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const spNav     = document.getElementById('spNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    spNav.classList.toggle('open');
    document.body.style.overflow = spNav.classList.contains('open') ? 'hidden' : '';
  });

  function closeNav() {
    hamburger.classList.remove('open');
    spNav.classList.remove('open');
    document.body.style.overflow = '';
  }
  spNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

  /* ── COUNT UP ── */
  function easeOutExpo(t) {
    return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function countUp(el, target, duration) {
    const start   = performance.now();
    const isLarge = target >= 1000;
    (function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value    = Math.round(easeOutExpo(progress) * target);
      el.textContent = isLarge ? value.toLocaleString() : value;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = isLarge ? target.toLocaleString() : target;
      }
    })(start);
  }

  /* ── INTERSECTION OBSERVER (stats + general fade) ── */
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const delay = parseInt(el.dataset.delay) || 0;
      setTimeout(() => {
        el.classList.add('visible');
        const countEl = el.querySelector('[data-count]');
        if (countEl) {
          countUp(
            countEl,
            parseInt(el.dataset.target),
            parseInt(el.dataset.duration) || 1200
          );
        }
      }, delay);
      statObserver.unobserve(el);
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.number-item').forEach(el => statObserver.observe(el));

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
