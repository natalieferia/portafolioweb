$(function () {
    // Feather icons
    feather.replace();

    // Tooltip & Popovers
    if ($(window).width() > 768) {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    } else {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('[data-toggle="popover"]').popover('dispose');
    }

    // Smooth scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var offset = $(window).width() <= 768 ? 50 : 20;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - offset
        }, 1000);
        event.preventDefault();
    });

    // Slick slider
    if ($(window).width() <= 768) {
        $('.slick-about').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false
        });
    } else {
        $('.slick-about').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: true
        });
    }

    // Toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }
        scrollTop = scroll;

        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // Scroll to top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    // Theme switcher
    $('.switcher-trigger').click(function () {
        if ($(window).width() <= 768) {
            $('.switcher-wrap').css('position', 'fixed');
        }
        $('.switcher-wrap').toggleClass('active');
    });

    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});
