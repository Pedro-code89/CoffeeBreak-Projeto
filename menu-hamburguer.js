const BtnMenu = document.querySelector('.btn-menu');
const MenuHam = document.querySelector('.ham-menu');
const Overlay = document.querySelector('.overlay-menu');

/* ABRIR MENU */

BtnMenu.addEventListener('click', () => {
    MenuHam.classList.toggle('active');
    Overlay.classList.toggle('active');
});

/* FECHAR AO CLICAR NO OVERLAY */

Overlay.addEventListener('click', () => {
    MenuHam.classList.remove('active');
    Overlay.classList.remove('active');
});

/* FECHAR AO CLICAR NOS LINKS */

/* FOR EACH: PERCORRE OS LINKS, CADA LINK QUE CLICAR FAZ ALGUMA FUNÇÃO OU AÇÃO */

const links = document.querySelectorAll('.ham-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        MenuHam.classList.remove('active');
        Overlay.classList.remove('active');
    });
});