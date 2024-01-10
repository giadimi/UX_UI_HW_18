$( document ).ready(function() {
  $(document).on("scroll", function() {
    console.log( $(window).scrollTop() );
    if ($(window).scrollTop() > 120) {
        $(".nav").addClass("nav-grad");
    } else {
        $(".nav").removeClass("nav-grad");
    }


  })
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.overlay-trigger');
  const overlay = document.querySelector('.overlay');
  const overlayClose = document.querySelector('.overlay-close');

  // Toggle the 'show' class on the overlay when the menu icon is clicked
  menuIcon.addEventListener('click', function () {
    overlay.classList.toggle('show');
  });

  // Close the overlay when the close button is clicked
  overlayClose.addEventListener('click', function () {
    overlay.classList.remove('show');
  });
});

// Additional code for changing the nav style on scroll
$(document).on("scroll", function () {
  if ($(window).scrollTop() > 120) {
    $(".nav").addClass("nav-grad");
  } else {
    $(".nav").removeClass("nav-grad");
  }
});
