// MOBILE NAVBAR
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

// PROJECTS

// filters
function tabsFilter() {
    const filters = document.querySelectorAll('.projects .projects__filter a');
    const projects = document.querySelectorAll('.projects .card');

    const resetActiveLinks = () => {
        filters.forEach(filter => {
            filter.classList.remove('active');
        });
    }

    const showProjects = (elem) => {
        projects.forEach(project => {
            let filter = project.getAttribute('data-category');

            if (elem === "all") {
                project.parentNode.classList.remove('hide');
                return;
            }

            filter !== elem ? project.parentNode.classList.add('hide') : project.parentNode.classList.remove('hide');
        });
    }

    filters.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');
        });
    });
}

tabsFilter();

//overlay

function showProjectDetails(){

}

showProjectDetails();

//stopped the video at 1:51:00