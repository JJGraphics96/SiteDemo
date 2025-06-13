document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        links.classList.toggle('show');
    });
});
