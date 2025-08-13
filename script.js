// Small progressive enhancement
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('show');
  });
}
document.getElementById('year').textContent = new Date().getFullYear();
