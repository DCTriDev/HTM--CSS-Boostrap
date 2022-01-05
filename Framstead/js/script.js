// Slick Header
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
