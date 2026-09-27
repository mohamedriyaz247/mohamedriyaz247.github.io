/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


  // Close mobile menu after clicking a link

  const navigationLinks = navLinks.querySelectorAll("a");

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });

  });

}



/* =========================================================
   PROJECT FILTERS
========================================================= */

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach((filter) => {

  filter.addEventListener("click", () => {

    // Get selected category
    const selectedFilter = filter.dataset.filter;


    // Remove active class from all buttons
    filters.forEach((button) => {
      button.classList.remove("active");
    });


    // Add active class to clicked button
    filter.classList.add("active");


    // Show / hide projects
    projects.forEach((project) => {

      const projectCategory = project.dataset.category;


      if (
        selectedFilter === "all" ||
        projectCategory === selectedFilter
      ) {

        project.style.display = "";

      } else {

        project.style.display = "none";

      }

    });

  });

});



/* =========================================================
   SERVICES ACCORDION
========================================================= */

const services = document.querySelectorAll(".service");

services.forEach((service) => {

  const serviceButton = service.querySelector(".service-head");

  if (!serviceButton) return;


  serviceButton.addEventListener("click", () => {

    // Close other services
    services.forEach((otherService) => {

      if (otherService !== service) {

        otherService.classList.remove("active");

        const otherButton =
          otherService.querySelector(".service-head b");

        if (otherButton) {
          otherButton.textContent = "↗";
        }

      }

    });


    // Toggle selected service
    service.classList.toggle("active");


    const icon = service.querySelector(".service-head b");

    if (icon) {

      if (service.classList.contains("active")) {
        icon.textContent = "×";
      } else {
        icon.textContent = "↗";
      }

    }

  });

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}