// Fill current year
const y = new Date().getFullYear();
document.getElementById('year').textContent = y;
document.getElementById('year2').textContent = y;

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
menuToggle?.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.classList.toggle('open', open);
});

// Close mobile menu after clicking a nav link
document.querySelectorAll('.side-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

// Scrollspy — highlight the active section in the sidebar nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.side-nav a');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.side-nav a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(sec => spy.observe(sec));

// Scroll Animation Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-left, .animate-right').forEach(el => {
  observer.observe(el);
});
