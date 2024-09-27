document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menubutton');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        menu.classList.toggle('open');
    });
});