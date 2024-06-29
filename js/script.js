window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var brand = document.getElementById("brand");
  var navLinks = navbar.querySelectorAll(".test");
  var homeSection = document.getElementById("home");
  var scrolledPastHome = window.scrollY > homeSection.offsetHeight - 100;
  if (scrolledPastHome) {
    navbar.classList.add("colordNav");
    brand.style.color = "black";
    navLinks.forEach(function (link) {
      link.style.color = "black";
      link.classList.remove("text-light");
    });
  } else {
    navbar.classList.remove("colordNav");
    brand.style.color = "white";
    navLinks.forEach(function (link) {
      link.style.color = "white";
    });
  }
});
