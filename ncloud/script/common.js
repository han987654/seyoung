$(function(){
    var $body = $('body'),
        $window = $(window);

        //-----언어
        $(function(){
            $(".languages>a").click(function(){
                $(".languages_list").toggle();
            })
        })
        $(function(){
            $('.lang').click(function(){
                $(".footer_btn .languages_list").toggle();
                return false;
            })
        })


        var lastScrollTop = 0;
	$window.scroll(function(){
		var sT = $(this).scrollTop();

		if ($(this).scrollTop()>0) {
			$body.addClass('is-scroll');
		}else {
			$body.removeClass('is-scroll');
		}
        if(sT>lastScrollTop){
			$body.addClass('scroll-down');
			$body.removeClass('scroll-up');
		} else {
			$body.removeClass('scroll-down');
			$body.addClass('scroll-up');
		}
		lastScrollTop = sT;

	}).trigger('scroll');


        //-----메뉴
        $('.gnb>li').hover(function(){
            $(this).addClass('current').siblings('li').removeClass('current');
            $('.depth2_list>li').removeClass('hover');
            $('.depth2_list>li.current').show();
            // $('.depth2_title>li').css({color:'red'})
        }, function(){
            $('.gnb>li').removeClass('current');
        });
        
        $('.depth2_title>li').hover(function(){
            $('.depth2_list>li.current').hide();
            $('.depth2_list>li').eq($(this).index()).addClass('hover').siblings('li').removeClass('hover');
        },function(){

        });
})




