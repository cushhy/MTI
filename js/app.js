$(document).ready(function () {

    $('.intro__sliders').slick({
        dots: true,
    });

    $('.team__sliders').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews__items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.news__cards').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.partners__cards').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Burger

    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

});