function showNavbar() {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('.navbar a');

    burger.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}

showNavbar();