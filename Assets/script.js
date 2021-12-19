// Mobile Menu


//Variables
const burgerIcon = document.querySelector('#burger')
const navbarMenu = document.querySelector('#nav-links')

//Adding event listener to make burger menu visible on handheld devices
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});