(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const links = [...document.querySelectorAll('nav a')];
  let lastY = 0;
  document.querySelector('#year').textContent = new Date().getFullYear();
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
  links.forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));
  addEventListener('scroll', () => { const y = scrollY; header.classList.toggle('scrolled', y > 20); header.classList.toggle('hidden', y > 160 && y > lastY); lastY = y; }, { passive: true });
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  const sections = [...document.querySelectorAll('main section[id]')];
  const navObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) links.forEach(link => link.classList.toggle('active', link.hash === '#' + entry.target.id)); }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(section => navObserver.observe(section));
})();
