const botonAbrirMenu = document.querySelector('.menu_icon');
const menu = document.querySelector('#menu_nav');
const menu_cerrar = document.querySelector('.cerrar');


botonAbrirMenu.addEventListener('click', (ev) => {
    menu.classList.toggle('active');

})

menu_cerrar.addEventListener('click', () => {
    menu.classList.toggle('active');

})
