function toggleLanguage() {
  alert('Language toggle will be implemented soon!');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    const menuBackdrop = document.querySelector('.menu-backdrop');
    const closeMenuButton = document.querySelector('.close-menu-button');
    const mobileNavigation = document.querySelector('.mobile-nav-list');

    const toggleMenu = () => {
        menu.classList.toggle('active');
        menuBackdrop.classList.toggle('active');
        menuButton.classList.toggle('active');
    }

    menuButton.addEventListener('click', toggleMenu);
    menuBackdrop.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);
    mobileNavigation.addEventListener('click', toggleMenu);
})
