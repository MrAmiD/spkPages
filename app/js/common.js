function scrollAnimate(selector){
    var absOffsetTop = selector.offset().top - $(window).height();
    var scrollWin = $(window).scrollTop();
    if (scrollWin >= absOffsetTop - 100) {
        //console.log('addClass animate');
        selector.addClass('animate');
    } else {
        //console.log('removeClass animate')
        selector.removeClass('animate');
    }
};
function MainSliderInit(){//слайдер на главной странице
    $('.main-slider').slick({
        dots: false,
        infinite: true,
        //dotsClass: 'slick-dots container d-flex align-items-center justify-content-end',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M9.006,1.033 C8.971,1.061 8.934,1.087 8.902,1.118 C6.805,3.175 4.709,5.231 2.612,7.288 C2.580,7.319 2.549,7.352 2.508,7.395 C2.547,7.437 2.582,7.477 2.621,7.514 C4.710,9.564 6.799,11.613 8.890,13.662 C8.924,13.696 8.967,13.723 9.006,13.753 C9.006,13.783 9.006,13.812 9.006,13.842 C8.859,13.979 8.710,14.113 8.566,14.253 C8.306,14.506 8.048,14.762 7.806,15.000 C5.210,12.455 2.621,9.917 -0.005,7.343 C0.017,7.331 0.075,7.312 0.114,7.274 C2.544,4.893 4.973,2.511 7.402,0.129 C7.571,-0.037 7.972,-0.038 8.140,0.126 C8.428,0.408 8.717,0.691 9.006,0.973 C9.006,0.993 9.006,1.013 9.006,1.033 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="15px"> <path fill-rule="evenodd"  fill="rgb(0, 0, 0)" d="M-0.006,13.967 C0.029,13.939 0.066,13.913 0.097,13.881 C2.195,11.825 4.291,9.769 6.388,7.712 C6.420,7.681 6.451,7.648 6.492,7.605 C6.453,7.563 6.418,7.523 6.379,7.486 C4.290,5.436 2.201,3.387 0.110,1.338 C0.076,1.304 0.033,1.277 -0.006,1.248 C-0.006,1.218 -0.006,1.188 -0.006,1.158 C0.141,1.021 0.290,0.887 0.434,0.747 C0.695,0.494 0.952,0.239 1.194,-0.000 C3.790,2.545 6.379,5.083 9.005,7.657 C8.983,7.669 8.925,7.688 8.886,7.726 C6.456,10.107 4.027,12.489 1.598,14.871 C1.429,15.037 1.028,15.038 0.860,14.874 C0.572,14.592 0.283,14.309 -0.006,14.027 C-0.006,14.007 -0.006,13.987 -0.006,13.967 Z"/></svg>' +
        '</button>'
    });



    $(document).on('click', '.slider-trigers .item-t', function () {
        var slideIndex = $(this).index();
        console.log('slideIndex = ', slideIndex);
        // $( '.main-slider' ).slickGoTo( parseInt(slideIndex) );

        var slider = $('.main-slider');
        slider[0].slick.slickGoTo(parseInt(slideIndex));

    });


}
function feedbackSliderSliderInit(){//слайдер на главной странице
    $('.feedback-slider').on('init', function(slick){
        console.log('.feedback-slider init was hit');

        $('.feedback-slider .slick-slide').each(function(index){
            $(this).attr('data-mh',$('.feedback-slider .slick-slide')[index].clientHeight+26);
        });

        heightFeedback();

    });

    $('.feedback-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        heightFeedback();
    });

    $('.feedback-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="29px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M7.852,14.105 C7.972,14.185 8.110,14.246 8.209,14.347 C10.835,17.037 13.456,19.732 16.078,22.426 C17.313,23.695 17.316,25.222 16.087,26.487 C15.869,26.712 15.651,26.937 15.432,27.160 C14.292,28.318 12.763,28.328 11.627,27.167 C9.521,25.014 7.423,22.852 5.322,20.694 C3.851,19.183 2.379,17.673 0.909,16.161 C-0.295,14.922 -0.291,13.098 0.919,11.854 C4.466,8.210 8.013,4.567 11.560,0.925 C12.777,-0.324 14.275,-0.324 15.490,0.921 C15.717,1.154 15.945,1.387 16.171,1.621 C17.281,2.771 17.285,4.355 16.174,5.498 C13.528,8.219 10.879,10.937 8.230,13.655 C8.129,13.758 8.008,13.839 7.897,13.931 C7.882,13.989 7.867,14.047 7.852,14.105 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="28px"><path fill-rule="evenodd" fill="rgb(208, 208, 208)" d="M9.148,13.895 C9.028,13.816 8.890,13.755 8.791,13.653 C6.165,10.969 3.544,8.281 0.922,5.593 C-0.313,4.326 -0.316,2.803 0.913,1.541 C1.131,1.317 1.349,1.092 1.568,0.869 C2.708,-0.286 4.237,-0.296 5.373,0.863 C7.479,3.011 9.577,5.168 11.678,7.321 C13.149,8.828 14.621,10.335 16.091,11.843 C17.295,13.080 17.291,14.900 16.081,16.142 C12.534,19.777 8.987,23.412 5.440,27.046 C4.223,28.292 2.725,28.292 1.510,27.049 C1.283,26.817 1.055,26.585 0.829,26.352 C-0.281,25.203 -0.285,23.624 0.826,22.483 C3.472,19.768 6.121,17.056 8.770,14.345 C8.871,14.242 8.992,14.160 9.103,14.069 C9.118,14.011 9.133,13.953 9.148,13.895 Z"/></svg>' +
        '</button>'
    });
}

function featuresSlider(){
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}
function factorsSlider(){
    $('.factors-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}
function verticalSlider(){
    $('.vertical-slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        prevArrow: '<button type="button" class="vertRow slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38px" height="20px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M37.610,17.748 C37.872,18.005 38.004,18.328 38.004,18.682 C38.004,19.036 37.872,19.358 37.610,19.615 C37.085,20.131 36.233,20.131 35.708,19.615 L18.986,3.197 L2.263,19.615 C1.738,20.131 0.886,20.131 0.361,19.615 C-0.164,19.100 -0.164,18.263 0.361,17.748 L18.035,0.395 C18.559,-0.120 19.412,-0.120 19.936,0.395 L37.610,17.748 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="vertRow slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="39px" height="21px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M0.390,2.255 C0.127,1.997 -0.004,1.675 -0.004,1.320 C-0.004,0.966 0.127,0.643 0.390,0.385 C0.914,-0.132 1.767,-0.132 2.292,0.385 L19.014,16.830 L35.737,0.385 C36.262,-0.132 37.114,-0.132 37.639,0.385 C38.164,0.901 38.164,1.739 37.639,2.255 L19.965,19.635 C19.441,20.151 18.588,20.151 18.063,19.635 L0.390,2.255 Z"/></svg>' +
        '</button>'
    });
}
function sliderprevSlider(){
    $('.slider-prev').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        vertical: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    swipe: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
function planSlider(){
    $('.slider-plan').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}
function akciiSlider(){
    $('.akciiSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}
function feedbackSlider(){
    $('.slider-feedBak').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}
function howBuySlider(){
    $('#how-buy-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="39px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M17.748,0.390 C18.006,0.127 18.328,-0.004 18.682,-0.004 C19.036,-0.004 19.358,0.127 19.615,0.390 C20.131,0.914 20.131,1.767 19.615,2.292 L3.196,19.014 L19.615,35.737 C20.131,36.261 20.131,37.114 19.615,37.639 C19.100,38.164 18.263,38.164 17.748,37.639 L0.396,19.965 C-0.120,19.440 -0.120,18.588 0.396,18.064 L17.748,0.390 Z"/></svg>' +
        '</button>',
        nextArrow: '<button type="button" class="slick-next sliderAboutArrow">' +
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="38px"><path fill-rule="evenodd" fill="rgb(0, 0, 0)" d="M2.252,37.610 C1.994,37.873 1.672,38.003 1.318,38.003 C0.964,38.003 0.642,37.873 0.385,37.610 C-0.131,37.086 -0.131,36.234 0.385,35.711 L16.803,19.001 L0.385,2.292 C-0.131,1.768 -0.131,0.917 0.385,0.391 C0.900,-0.132 1.737,-0.132 2.252,0.391 L19.604,18.051 C20.120,18.575 20.120,19.426 19.604,19.951 L2.252,37.610 Z"/></svg>' +
        '</button>'
    });
}

function trigerSliderArrow(sliderSelector, varthis){//При нажатии на кнопки Prev/next преключать позицию слайдера sliderSelector
    console.log('trigerSlider', sliderSelector);
    if($(varthis).hasClass('slick-next')){
        $(sliderSelector).slick('slickNext');
        console.log('slick-next', sliderSelector);
    } else if($(varthis).hasClass('slick-prev')){
        $(sliderSelector).slick('slickPrev');
        console.log('slickPrev', sliderSelector);
    }
}

function trigerSliderPrev(sliderSelectorClick, sliderSelectorChange, varthis){//При нажатии на элемент слайдера sliderSelectorClick, преключать позицию слайдера sliderSelectorChange
    var sliderChange = $(varthis).closest('.row').find('.slider-prev'),
        sliderClick = $(varthis).parents('.vertical-slider'),
        index = $(varthis).data("slick-index");
    console.log('index = ', $(varthis).data("slick-index"));
    sliderChange[0].slick.slickGoTo(parseInt(index));
    sliderClick[0].slick.slickGoTo(parseInt(index));
}

function inMap(selector) {
    $(selector).fadeIn(100);
}
function outMap(selector) {
    setTimeout(function() { $(selector).hide(); }, 200);
}

$(document).on('click', '.vertRow', function () {
    console.log('click');
    trigerSliderArrow('.slider-prev', this);
});
$(document).on('click', '.vertical-slider .slider-item', function () {
    //console.log('index = ', this.attr("data-slick-index"));

    trigerSliderPrev(".vertical-slider", ".slider-prev", this);

});

function setFormParam(a, n, t) {
    var o = window.location.origin + window.location.pathname,
        i = $('form[name="MODAL_ORDER_LANGING"]');
    i.find('[field="URL"]').val(o), i.find('[field="PARAMS"]').val(a)
}

$(document).on('click', '#how-buy-slider .hb-item', function () {
    $($(this).data().target).click();
    
});


function tabsChange(varthis){
    var index = $(varthis).index();
    //$('.gallery-sec .tabs-c .t-item').removeClass('active');
    $(varthis).closest('.tabs-c').find('.t-item').removeClass('active');
    $(varthis).addClass('active');

    $(varthis).closest('.container').find('.tab-cont .row').removeClass('active');
    $(varthis).closest('.container').find('.tab-cont .row').eq(index).addClass('active');

    //$('.tab-cont .row').removeClass('active');
    //$('.tab-cont .row').eq(index).addClass('active');


}

$('.secTrigger ul li').on('click', function () {
    $("html, body").animate({ scrollTop: $($(this).data().trigger).offset().top - 0}, 600);
});
 

$(document).on('click', '.gallery-sec .tabs-c .t-item', function () {
    tabsChange(this);
    $('.vertRow').click();
    //$('.tab-cont')
});

$(document).on('click', '.buildMonth-sec .tabs-c .t-item', function () {
    tabsChange(this);
    //$('.tab-cont')
});
$(document).on('click', '.docs-sec .tabs-c .t-item', function () {
    tabsChange(this);
});

$(function() {

    $('#mainmap').maphilight({
        fillColor: '8c4d8b',
        strokeColor: '8c4d8b',
        fill: true,
        fillOpacity: 0.2,
        stroke: true,
        strokeOpacity: 1,
        strokeWidth: 3,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: false
    });

    $('input[type="tel"]').mask("+7 (999) 999-9999");

    /*datepicker start*/

    //Календарь для выбора даты
    var now = new Date();
    var minDate = new Date(new Date().getTime() + 30 * 60 * 1000);//now +30 минут
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate()+1);//now + 1 day

    var datetime = $('.datepicker-here').datepicker({
        dateFormat : 'dd.mm.yyyy',
        minDate: minDate,
        maxDate: maxDate,
        onSelect: function(fd, d, picker) {
            console.log('dateSelected', $('.datepicker-here').val());
        }
    });

    /*datepicker end*/


    $('.js-single-i input[type=checkbox]').on('change', function() {
        $('.js-single-i input[type=checkbox]').not(this).prop('checked', false);
    }); 
    //setInvest start
    $('select').styler({
        selectSearch: true,
    });
    //setInvest end


    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


    $('#my-menu').html($('.main-menu').html());

    //var  socials = $("#my-menu").data();
    $("#my-menu").mmenu({
        "extensions": [
            "fx-panels-none",
            "fx-listitems-slide"
        ],
        "offCanvas": {
            "position": "bottom"
        },
        "navbar": {
            "title": ""
        },
        "pageScroll": true
    });

    //Если меню выезжает снизу, расчитываем размер шапки и выкатываем меню до неё
    //mmenu bagfix

    // $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('.header-top').height());
    var api = $("#my-menu").data( "mmenu" );
    //   Hook into methods
    // api.bind( "open:after", function() {
    //     });

    api.bind( "open:finish", function() {
        $("#menu-btn").addClass('is-active');
        $(".mm-menu.mm-offcanvas.mm-bottom").css('height', $(window).height() - $('#my-header').height());

        //bugfix fixed menu 1-3 START
        $(window).scroll();
        $("#my-header").css({ top: $(window).scrollTop()});
    });
    api.bind( "open:start", function() {
        $(window).scroll();
        //bugfix fixed menu 2
        $("#my-header").css({ top: $(window).scrollTop() });
    });
    api.bind( "open:before", function() {
        $('#my-menu').css('top', $('#my-header').height()+6);
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $("#my-header").css({ top: 0});
    });
});
