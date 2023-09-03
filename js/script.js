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

// //overlay

// function showProjectDetails(){
//     const links = document.querySelectorAll('.projects .card__link');
//     const modals = document.querySelectorAll('.projects .modal');
//     const closeBtns = document.querySelectorAll('.projects .modal__close');

//     const hideModals = () => {
//         modals.forEach(modal => {
//             modal.classList.remove("show");
//         });
//     }

//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             document.querySelector(`[id=${link.dataset.id}]`).classList.add("show");
//         });
//     });

//     closeBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             hideModals();
//         });
//     });
// }

// showProjectDetails();

// 4:48:00 I stopped where I must add the modal css

// EFFECTS

// scroll reveal
const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');
  
    sections.forEach((section, index) => {
      if (index === 0) return;
      section.style.opacity = "0";
      section.style.transition = "all 1.6s";
    });
  
    skills.forEach(skill => {
      skill.style.width = "0";
      skill.style.transition = "all .4s";
    });
  
    let sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    });
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width + '%';
          }
        });
      });
    
      skills.forEach(skill => {
        skillsObserver.observe(skill);
      });
    }

observerIntersectionAnimation();