// Declare objects
let btn = document.querySelector('.showBtn');
let nav = document.querySelector('.navlinks');
let menu;

if (localStorage.getItem('menu') == null) {
    localStorage.setItem('menu', 'closed');
} else {
    localStorage.getItem('menu');
    setNav();
}

function setNav() {
    if(localStorage.getItem('menu') == 'closed') {
        nav.classList.add('hidden');
        btn.innerHTML = 'Show';
    } else {
        nav.classList.remove('hidden');
        btn.innerHTML = 'Hide';
    }
}

function changeNav() {
    if(localStorage.getItem('menu') == 'closed') {
        localStorage.setItem('menu', 'open');
        setNav();
    } else {
        localStorage.setItem('menu', 'closed');
        setNav();
    }
}