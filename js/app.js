$(document).ready(function () {

    $('.intro__sliders').slick()

    $('.team__sliders').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.reviews__items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    $('.news__cards').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.partners__cards').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

});