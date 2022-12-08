const bntNavbar = document.querySelectorAll(".bnt-navbar");
const header = document.querySelector(".header");
const leftSide = document.querySelector(".left-side--header");
const sidebar = document.querySelector(".sidebar");

bntNavbar.forEach((bnt) =>
  bnt.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar--open");

    if (sidebar.classList.contains("hidden"))
      sidebar.classList.remove("hidden");
    else
      setTimeout(
        function () {
          sidebar.classList.add("hidden");
        },
        window.screen.availWidth >= 768 ? 0 : 600
      );
  })
);
