const toggle = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.site-list');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('main-header__toggle--closed')) {
    toggle.classList.remove('main-header__toggle--closed');
    toggle.classList.add('main-header__toggle--opened');
    nav.classList.remove('site-list--closed');
  } else {
    toggle.classList.add('main-header__toggle--closed');
    toggle.classList.remove('main-header__toggle--opened');
    nav.classList.add('site-list--closed');
  }
});
