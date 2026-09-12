(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#main-navigation');
  const header = document.querySelector('.header');
  if (!toggle || !navigation || !header) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  // Without JavaScript, keep the navigation visible and the content usable.
  document.documentElement.classList.add('nav-enhanced');
  toggle.hidden = false;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(isOpen));
    navigation.classList.toggle('is-open', isOpen);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('focusin', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 1081px)').addEventListener('change', closeMenu);
})();
