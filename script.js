/* script.js — Navigation & scroll interactions */

const nav       = document.getElementById('nav');
const toggle    = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const allLinks  = document.querySelectorAll('.nav-links a, .nav-drawer a');
const sections  = document.querySelectorAll('main section[id]');

/* ── Mobile drawer ─────────────────────────────────────────── */
// Create drawer element dynamically
const drawer = document.createElement('div');
drawer.className = 'nav-drawer';
drawer.innerHTML = navLinks.innerHTML;
document.body.appendChild(drawer);

toggle.addEventListener('click', () => {
  const open = toggle.classList.toggle('open');
  drawer.classList.toggle('open', open);
});

drawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open');
    drawer.classList.remove('open');
  });
});

/* ── Scroll: nav shadow + active link ─────────────────────── */
const setActive = (id) => {
  allLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => observer.observe(s));

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ── Reveal on scroll ──────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
