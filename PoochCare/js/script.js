window.onscroll = function () {
    scrollFunction()
};
let header = document.querySelector("header")
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        header.classList.add("nav-fixed")
    } else {
        header.classList.remove("nav-fixed")
    }
}
