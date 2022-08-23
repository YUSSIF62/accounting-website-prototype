$(function(){
    $(".caurousel-side").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".testimonials-caurousels").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".image-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button class="btn slide-arrow prev-arrow"></button>',
       nextArrow: '<button class="btn slide-arrow next-arrow"></button>',
        responsive: [
             {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1
                }
             }
        ]
    })
})