const leftMenuButton = document.querySelector('.header-nav-left-menus');
const rightMenuButton = document.querySelector('.header-nav-right-menus');
const leftMenu = document.querySelector('.nav.header-nav-left');
const rightMenu = document.querySelector('.nav.header-nav-right');

leftMenuButton.addEventListener('click', () => {
    leftMenuButton.classList.toggle('open');
    leftMenu.classList.toggle('open');
})

rightMenuButton.addEventListener('click', () => {
    rightMenuButton.classList.toggle('open');
    rightMenu.classList.toggle('open');
})

