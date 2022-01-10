window.onscroll = function () {
    scrollFunction()
};
let header_fix = document.querySelector("#header")
let back_to_top = document.querySelector('#back-to-top')

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_fix.classList.add('nav-fixed')
        back_to_top.style.display = 'block'
    } else {
        header_fix.classList.remove('nav-fixed')
        back_to_top.style.display = "none"
    }
}

back_to_top.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})