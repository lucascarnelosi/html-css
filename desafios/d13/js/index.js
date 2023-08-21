const switchBtn = document.getElementById('switchButton');
const body = document.getElementById('body');

switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('switch-dark')
    body.classList.toggle('dark')
})