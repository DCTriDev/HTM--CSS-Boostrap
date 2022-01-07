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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})