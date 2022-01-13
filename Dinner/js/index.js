// back to top
let backToTop = document.getElementById("back-to-top")
backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
})


// owl carouse
$(document).ready(function () {
    $("#owl-agency").owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            736: {
                items: 1,
                nav: false
            }
        }
    })
})

//--magnific popup-- >

$(document).ready(function () {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
});

//-- //magnific popup -->

// dark mode

let btn_dark_mode = document.querySelector('#btn-dark-mode')

btn_dark_mode.addEventListener('click', function () {
    //switch icon
    btn_dark_mode.classList.toggle('dark-mode-active')

    //Color when dark mode active
    if (btn_dark_mode.classList.contains('dark-mode-active')) {

    }

    //   color when light mode active
    else {

    }
})                             