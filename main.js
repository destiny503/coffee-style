let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.nav')
let flag = true

navBtn.addEventListener('click', function () {
    if (flag) {
        flag = false
        alert('это костыль, адаптив в сделку не входил)')
    }
    nav.className === 'nav'
        ? nav.className = 'nav-mobile'
        : nav.className = 'nav'
})