window.onscroll = function () {
    scrollFunction()
};
// let header_padding = document.getElementsByClassName("nav-item");
// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//
//         Array.prototype.filter.call(header_padding, function (change_padding) {
//             change_padding.style.padding = "8px 16px"
//         });
//     }
//     else {
//         Array.prototype.filter.call(header_padding, function (change_padding) {
//             change_padding.style.padding = "16px 16px"
//         });
//     }
// }
let header_fix = document.querySelector("header")
function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        //header_fix.style.height = "70px"
        header_fix.classList.add('nav-fix')
    }
    else {
        //header_fix.style.height = "90px"
        header_fix.classList.remove('nav-fix')
    }
}