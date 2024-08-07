$(function () {

    const sub_detail_slide = new Swiper('.detail_slide', {

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        on: {
            slideChangeTransitionStart: function () {
                $('.detail_slide_list>ul>li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }

    })

    $('.detail_slide_list>ul>li').on('click', function () {

        let idx = $(this).index();

        sub_detail_slide.slideTo(idx, 400);

    })


    $('.sub_detail .inner .right .option_box .opt button').on('click', function () {



        $('.sub_detail .inner .right .option_box .opt button>ul').toggleClass('on')

        $(this).parent().siblings().find('ul').stop().removeClass();


    })

})