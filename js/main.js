  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('mostrar');
    });

    links.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('mostrar');
      });
    });
  });