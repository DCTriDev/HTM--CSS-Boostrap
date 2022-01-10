window.onscroll = function () {
    scrollFunction()
};
let header_fix = document.querySelector("#header")

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_fix.classList.add('nav-fixed')
    } else {
        header_fix.classList.remove('nav-fixed')
    }
}