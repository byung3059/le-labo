$(function () {

    $('.header .inner .mbtn').on('click', function () {
        $(this).toggleClass('on')

        $('.header .gnb').toggleClass('on')
    })


    $('.header .inner .gnb>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub_box').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게

        if ($('.header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        }
    })

    $('.header .inner .gnb .sub_box>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.smenu').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게


        if ($('.header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        } else ($('.header .gnb .sub_box').removeAttr('style'));

    })

    $('.header .inner .gnb .smenu>li>a').on('click', function (e) {

        e.preventDefault();
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.header .mbtn').removeClass('on');
        $('.header .gnb>ul>li ul').removeAttr('style');
        $('.header .gnb .sub_box').removeAttr('style');
    })



    const main_visual_slide = new Swiper('.visual_slide', {
        loop: true,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        on: {
            slideChangeTransitionStart: function () {
                $('.main_visual .main_visual_list>ul>li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')

                $('.main_visual .main_visual_list .visual_mlist>li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    })

    $('.main_visual .main_visual_list>ul>li').on('click', function () {

        const IDX = $(this).index();

        main_visual_slide.slideToLoop(IDX);
    })

    $('.main_visual .main_visual_list .visual_mlist>li').on('click', function () {

        const IDX = $(this).index();

        main_visual_slide.slideToLoop(IDX);
    })


    $('.to_top button').on('click', function () {
        $('html, body').animate({ scrollTop: 0, }, 300)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 830) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })


});

