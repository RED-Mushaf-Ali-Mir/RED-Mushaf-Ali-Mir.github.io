const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

const filters = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-topic]');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.topic !== filter;
    });
  });
});
