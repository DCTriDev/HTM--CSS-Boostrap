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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

document.querySelector('#back-to-top').addEventListener('click', function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})

let btn_dark_mode = document.querySelector("#btn-dark-mode");

btn_dark_mode.addEventListener("click", function () {
    //switch icon
    btn_dark_mode.classList.toggle("dark-mode-active");

    //Background when dark mode active
    if (btn_dark_mode.classList.contains("dark-mode-active")) {
        // document.documentElement.style.setProperty("--bg-color", "#131313");
        // document.documentElement.style.setProperty("--font-color", "#BBB");
        //document.body.style.background = 'black';
    }

    //Background when light mode active
    else {
        // document.documentElement.style.setProperty("--bg-color", "#FBFCFD")
        // document.documentElement.style.setProperty("--font-color", "#111")
        //document.body.style.background = 'white';
    }
});
