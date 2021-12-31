window.onscroll = function () {
    scrollFunction()
};
let header_fix = document.querySelector("header")

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header_fix.classList.add('nav-fix')
    } else {
        header_fix.classList.remove('nav-fix')
    }
}