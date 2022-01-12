/**
 Solution:
 Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
 Dựa vào class dark, ta viết css dành riêng cho dark theme.

 Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

 */

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
// document.getElementById("switchButton").onclick = function () {
//     //khi button được click thì tìm đến thẻ body có id là myBody
//     // dùng classlist để gọi thuộc tính class của thẻ body
//     //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
//     document.getElementById("myBody").classList.toggle("dark");
// };


window.onscroll = function () {
    scrollFunction()
};
let backToTop = document.getElementById("back-to-top")

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"})
})


