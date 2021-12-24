window.onscroll = function () {
    scrollFunction()
};
let header_padding = document.getElementsByClassName("nav-item");
let header = document.querySelector("header")


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        header.classList.add("header-responsive")
        // header.style.padding = "5px 0"
    } else {
        // Array.prototype.filter.call(header_padding, function (change_padding) {
        //     change_padding.style.padding = "16px 16px !important"
        // });
        header.classList.remove("header-responsive")
        header.style.padding = "15px 0"
    }
}


let navbar_toggle = document.querySelector("button.navbar-toggler")
navbar_toggle.onclick = function (){
    header.style.height = "auto !important"
}