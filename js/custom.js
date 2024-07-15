$(function () {

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
            }
        }
    })

    $('.main_visual .main_visual_list>ul>li').on('click', function () {

        let idx = $(this).index();

        main_visual_slide.slideTo(idx, 400);

    })


});

