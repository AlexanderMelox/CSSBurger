$(document).ready(function() {

  // Nav button toggler
  $('.hamburger').on('click', function(e) {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
    }

    const $nav = $('.nav');
    const $hamburgerInner = $('.hamburger .hamburger-inner');

    if ($nav.hasClass('nav-visible')) {
      $nav.removeClass('nav-visible');
      $hamburgerInner.removeClass('hamburger-inner--black');
    } else {
      $nav.addClass('nav-visible');
      $hamburgerInner.addClass('hamburger-inner--black');
    }

    e.preventDefault();
  }); 

  $('.nav-visible')

});