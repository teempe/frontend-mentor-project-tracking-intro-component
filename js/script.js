const navIcon = document.querySelector('.header__nav-icon');
const navBar = document.querySelector('.nav-bar');


navIcon.addEventListener('click', event => {
    navBar.classList.toggle('hidden');
    navIcon.classList.toggle('header__nav-icon--close');
});