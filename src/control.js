const bntNavbar = document.querySelectorAll(".bnt-navbar");
const header = document.querySelector(".header");
const leftSide = document.querySelector(".left-side--header");
const sidebar = document.querySelector(".sidebar");

bntNavbar.forEach((bnt) =>
  bnt.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--open");
    if (header.classList.contains("header-sidebar--open"))
      setTimeout(function () {
        header.classList.remove("header-sidebar--open");
      }, 700);
    else header.classList.add("header-sidebar--open");
  })
);
