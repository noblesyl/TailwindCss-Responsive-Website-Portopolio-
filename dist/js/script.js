// navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// bagian hamburger active

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');

})