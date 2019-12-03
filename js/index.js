$(function () {
  $('.menu-bars').click(function () {
    $('nav.mobile').slideToggle();
  })

  // Menu Scroll
  $('nav a, .btn-action-apresentation a').click(function () {
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    $('html, body').animate({ 'scrollTop': offSetTop }, 2000);

    return false;
  })
})