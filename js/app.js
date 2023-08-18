$(function () {
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // wow js
  new Window().init();
});

// JavaScript to close the navbar when clicking a link
function closeNavbar() {
  const navBar = document.querySelector(".navbar-collapse");
  if (navBar.classList.contains("show")) {
    navBar.classList.remove("show");
  }

  if (window.innerWidth <= 992) {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
}

$(document).ready(function () {
  // Hero slider
  $("#testimonial-active").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
});

// phone initialize library
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["ug"],
  separateDialCode: true,
});
