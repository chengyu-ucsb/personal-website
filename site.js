const navMenus = [...document.querySelectorAll('.nav-item.has-submenu')];
function closeNavMenu(item) {
  item.classList.remove('is-open');
  item.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
}
navMenus.forEach((item) => {
  const button = item.querySelector('.nav-toggle');
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const shouldOpen = !item.classList.contains('is-open');
    navMenus.forEach(closeNavMenu);
    item.classList.toggle('is-open', shouldOpen);
    item.classList.toggle('suppress-hover', !shouldOpen);
    button.setAttribute('aria-expanded', String(shouldOpen));
  });
  item.addEventListener('mouseleave', () => item.classList.remove('suppress-hover'));
  item.addEventListener('focusout', (event) => {
    if (!item.contains(event.relatedTarget)) closeNavMenu(item);
  });
  item.querySelectorAll('.nav-flyout a').forEach((link) => {
    link.addEventListener('click', () => closeNavMenu(item));
  });
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item.has-submenu')) navMenus.forEach(closeNavMenu);
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const open = navMenus.find((item) => item.classList.contains('is-open'));
  if (open) {
    closeNavMenu(open);
    open.querySelector('.nav-toggle').focus();
  }
});
