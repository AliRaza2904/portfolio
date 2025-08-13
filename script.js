// Small progressive enhancement
// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}

// --- Contact form (Formspree) ---
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if (form && statusEl) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = 'Sending...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.reset();
        statusEl.textContent = 'Thanks! Your message has been sent.';
      } else {
        statusEl.textContent = 'Sorry, something went wrong. Please try again.';
      }
    } catch {
      statusEl.textContent = 'Network error. Please try again later.';
    }
  });
}

// --- Clear button ---
const clearBtn = document.getElementById('clearFormBtn');
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (form) form.reset();
    if (statusEl) statusEl.textContent = '';
    const firstInput = form ? form.querySelector('input, textarea') : null;
    if (firstInput) firstInput.focus();
  });
}

// --- Footer year ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


