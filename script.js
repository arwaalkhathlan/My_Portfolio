document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');
});

document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('nav').classList.remove('show');
    });
});

function toggleButton() {
    var button = document.getElementById('menu-icon');
    button.style.display = window.innerWidth <= 1200 ? 'block' : 'none';
}

window.onload = toggleButton;
window.onresize = toggleButton;
