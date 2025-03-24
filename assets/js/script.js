$(document).ready(function () {
    'use strict';

    //..navbar mobile-menu js start..//
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 10) {
            $('.navbar-wrapper-main').addClass('nav-fixed')
        } else {
            $('.navbar-wrapper-main').removeClass('nav-fixed')
        }

    })

    $(".ham-menu").click(function (event) {
        event.stopPropagation();
        $(".mobile-menu-wrapper").toggleClass("active");
        $(".ham-menu").toggleClass("active");
    });

    $('.mobile-drop-down-menu').on('click', function () {
        $(this).children(".mobile-drop-down-menu-wrapper").slideToggle();
        $(this).children(".drop-down-menu-btn").toggleClass('active');
    });
    //..navbar mobile-menu js end..//

    //..search bar js start..//
    $(".search-open").click(function (event) {
        event.stopPropagation();
        $(".search-bar").addClass('active1');
    });

    $(".search-bar-close").click(function (event) {
        event.stopPropagation();
        $(".search-bar").removeClass('active1');
    });
    //..search bar js end..//

    // filter sidebar js start--
    $(".filter-open-btn").click(function (event) {
        event.stopPropagation();
        $(".filter-box").addClass('active');
    });

    $(".filter-close-btn").click(function (event) {
        event.stopPropagation();
        $(".filter-box").removeClass('active');
    });
    // filter sidebar js end--

    // **..product-single-accordion js start..**
    $('.accordion-toggle-btn').on('click', function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });
    // **..product-single-accordion js end..**

    // price range slider---

    var parent = document.querySelector(".price-range-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });
})


// top-bar slider js start--
var swiper = new Swiper(".top-bar-slider", {
    spaceBetween: 0,
    slidesPerView: 6,
    loop: true,
    speed: 5000,
    autoplay: {
        enabled: true,
        delay: 1,
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 3,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
        },
        // when window width is >= 1440px
        1440: {
            slidesPerView: 6,
        }
    }
});
// top-bar slider js end--

// banner slider js start--
var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 1,
        }
    }
});
// banner slider js end--

// trending slider js start--
var swiper = new Swiper(".trending-slider", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 993px
        993: {
            slidesPerView: 4,
        }
    }
});
// trending slider js end--

// collection slider js start--
var swiper = new Swiper(".collection-slider", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 993px
        993: {
            slidesPerView: 4,
        }
    }
});
// collection slider js end--

// blog slider js start--
var swiper = new Swiper(".blog-slider", {
    slidesPerView: 4,
    spaceBetween: 25,
    grabCursor: true,
    loop: true,
    speed: 500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 993px
        993: {
            slidesPerView: 4,
        }
    }
});
// blog slider js end--

// **..product-single-slider js start..**
var swiper = new Swiper(".single-product-swiper", {
    direction: 'vertical',
    effect: 'slide',
    loop: true,
    spaceBetween: 6,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 4,
            direction: 'horizontal',
            effect: 'slide',
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 4,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 6,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 6,
        }
    }
});
var swiper2 = new Swiper(".single-product-swiper-2", {
    loop: true,
    spaceBetween: 10,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
// **..product-single-slider js end..**

// content animation--
new WOW().init();