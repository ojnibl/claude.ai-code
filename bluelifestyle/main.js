// Nav scroll state
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const burger = document.querySelector('.burger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

function openMenu() {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) closeMenu();
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav?.offsetHeight ?? 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Email form
const joinForm = document.querySelector('#join form');
joinForm?.addEventListener('submit', e => {
  e.preventDefault();
  const input = joinForm.querySelector('input[type="email"]');
  const btn = joinForm.querySelector('button[type="submit"]');
  const email = input?.value.trim();

  if (!email) return;

  const original = btn.textContent;
  btn.textContent = 'Joining…';
  btn.disabled = true;

  // Simulate async submission
  setTimeout(() => {
    input.value = '';
    btn.textContent = "You're in!";
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 3000);
  }, 1000);
});
