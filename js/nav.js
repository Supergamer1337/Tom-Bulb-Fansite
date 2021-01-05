// Declare objects
let btn = document.querySelector('.showBtn');
let nav = document.querySelector('.navlinks');

window.addEventListener("resize", function() {
    if (window.innerWidth > 500) {
        nav.classList.remove('hidden');
        btn.innerHTML = 'Hide'
    }
    if (window.innerWidth <= 500) {
        nav.classList.add('hidden');
        btn.innerHTML = 'Show'
    }
});

function changeNav() {
    if(!nav.classList.contains('hidden')) {
        nav.classList.toggle('hidden');
        btn.innerHTML = 'Show';
    } else {
        nav.classList.toggle('hidden');
        btn.innerHTML = 'Hide';
    }
}