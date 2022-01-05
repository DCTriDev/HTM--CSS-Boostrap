// Slick Header
$(".images-inner").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  prevArrow: "none",
  nextArrow: "none",
});
// Slick Testimonials
$(".owl-stage").slick({
  autoplay: false,
  dots: true,
  infinite: true,
  arrows: false,
});

// Sticky header
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#site-header").addClass("whiteHeader");
  } else {
    $("#site-header").removeClass("whiteHeader");
  }
});
// btn scroll top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#movetop").fadeIn();
    } else {
      $("#movetop").fadeOut();
    }
  });
  $("#movetop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
