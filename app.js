const links = document.getElementById('links');
const bar= document.getElementById('bar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        links.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        links.classList.remove('active');
    })
}