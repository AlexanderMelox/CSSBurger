$(document).ready(function() {

  // Nav button toggler
  $('.hamburger').on('click', function() {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
    }
  });

});