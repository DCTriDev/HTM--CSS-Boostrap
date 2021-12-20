// Slick
$(".banner-slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 300,
  prevArrow: '<button class="banner-slickPrev"></button>',
  nextArrow: '<button class="banner-slickNext"></button>',
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
// 