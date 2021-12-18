window.onscroll = function () {
    scrollFunction()
};
let header_padding = document.getElementsByClassName("nav-item");
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        Array.prototype.filter.call(header_padding, function (change_padding) {
            change_padding.style.padding = "8px 16px"
        });
    }
    else {
        Array.prototype.filter.call(header_padding, function (change_padding) {
            change_padding.style.padding = "16px 16px"
        });
    }
}