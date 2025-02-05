// JavaScript to toggle the 'active' class on the navbar for the hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  // Toggle the active class when the hamburger menu is clicked
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle("active");
  };

  // Close the menu if the user clicks outside the navbar
  document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});




