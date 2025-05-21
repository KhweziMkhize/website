
const ham = document.querySelector('.ham')
const nav = document.querySelector('.nav-bar1')

ham.addEventListener('click', () => {
    nav.classList.toggle('hidden')
})