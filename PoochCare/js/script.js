window.onscroll = function () {
    scrollFunction()
};
let header = document.querySelector("header")
let backToTop = document.getElementById("back-to-top")
let btnDarkMode = document.querySelector('#btn-dark-mode')

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


btnDarkMode.addEventListener('click', function () {
    //Toggle icon
    if (btnDarkMode.classList.contains('dark-mode-active')) {
        btnDarkMode.classList.remove('dark-mode-active')
    } else {
        btnDarkMode.classList.add('dark-mode-active')
    }

    //Active darkmode

    if (btnDarkMode.classList.contains('dark-mode-active')) {
        document.documentElement.style.setProperty('--bg-color', '#151515');
        document.documentElement.style.setProperty('--bg-light', '#222');
        document.documentElement.style.setProperty('--heading-color', '#DDD');
        document.documentElement.style.setProperty('--font-color', '#AFAFAF');
        document.documentElement.style.setProperty('--border-light', '#444');
        document.documentElement.style.setProperty('--border-color', '#333');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#FFF');
        document.documentElement.style.setProperty('--bg-light', 'rgba(147, 107, 232, 0.05)');
        document.documentElement.style.setProperty('--heading-color', '#00c04');
        document.documentElement.style.setProperty('--border-light', '#F0F3F0');
        document.documentElement.style.setProperty('--border-color', '#DDD');
    }
})