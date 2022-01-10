window.onscroll = function () {
    scrollFunction()
};
let header = document.querySelector("header")
let backToTop = document.getElementById("back-to-top")
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        header.classList.add("nav-fixed")
    } else {
        header.classList.remove("nav-fixed")
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})