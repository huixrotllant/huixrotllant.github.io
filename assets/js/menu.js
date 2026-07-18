document.addEventListener("DOMContentLoaded", function () {

  const button = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  button.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

});
