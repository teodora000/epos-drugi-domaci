$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
  });

  document.querySelector(".owl-dots").style.display = "none";
});

const dugme = document.querySelector(".button");

dugme.addEventListener("click", klik);

function klik() {
  location.href = "usluge.html";
}
