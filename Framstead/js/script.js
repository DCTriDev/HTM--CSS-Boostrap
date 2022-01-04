// Slick
$(".images-inner").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,

  infinite: true,
  prevArrow: "none",
  nextArrow: "none",
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
