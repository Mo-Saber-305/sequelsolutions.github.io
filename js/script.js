// jquery code
$(function () {
    // active link in navebar
    $('.nav-item').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //************************************************************************//

    // scroll to top button
    let btn = $('#scroll-to-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.show()
        } else {
            btn.hide()
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    //************************************************************************//

    // smooth scroll
    let links = $(".navbar .nav-item .nav-link, footer .top-footer .box2 ul li a, .slider .carousel-item .carousel-content .carousel-box .box-btn")
    links.click(function() {
        $('html, body').animate({
            scrollTop: $("#" + $(this).data('value')).offset().top - 133
        }, 1500);
    });
});

// wow.js animate
new WOW().init();