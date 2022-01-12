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

let btn_dark_mode = document.querySelector('#btn-dark-mode')

btn_dark_mode.addEventListener('click', function () {
    //switch icon
    btn_dark_mode.classList.toggle('dark-mode-active')


    if (btn_dark_mode.classList.contains('dark-mode-active')) {
        document.documentElement.style.setProperty("--primary-color", "#4867B0");
        document.documentElement.style.setProperty("--bg-color", "#161C2D");
        document.documentElement.style.setProperty("--heading-color", "#FDFFFC");
    }
    else {
        document.documentElement.style.setProperty("--primary-color", "#0D369F");
        document.documentElement.style.setProperty("--bg-color", "#FFF");
        document.documentElement.style.setProperty("--heading-color", "#060606");
    }
})