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


$(document).on('click', '.vertRow', function () {
    console.log('click');
    trigerSliderArrow('.slider-prev', this);
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
 



$(function() {

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
        $('#my-menu').css('top', $('#my-header').outerHeight());
    });
    api.bind( "close:finish", function() {
        $("#menu-btn").removeClass('is-active');

        //bugfix fixed menu 3 END
        $("#my-header").css({ top: 0});
    });
});
