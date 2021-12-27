// Slick
$(".banner-slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
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
// header-search
var btnSearchEl = document.querySelector("header .header-search .btn-material");
btnSearchEl.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.add("search-active");
});
var btnCloseEl = document.querySelector("header .header-search .icon-close");
btnCloseEl.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.remove("search-active");
});