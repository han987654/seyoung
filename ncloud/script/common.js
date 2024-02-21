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

        //-----네비배경
        $(".gnb").hover(function(){
            $(".navbar").css({background:'black'})
        },function(){
            $(".navbar").css({background:'none'})
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

    
    $('.gnb>li').hover(function () {
        $(this).addClass('current').siblings('li').removeClass('current');

    }, function () {
        $('.depth2_title>li').eq(0).addClass('current').siblings('li').removeClass('current');
        $('.depth2_list>li').eq(0).addClass('current').siblings('li').removeClass('current');
        $('.gnb>li').removeClass('current');
    });
    
    $('.depth2_title>li').hover(function(){
        var n = $(this).index();
        $(this).addClass('current').siblings('li').removeClass('current');
        
        $('.depth2_list>li').eq(n).addClass('current').siblings('li').removeClass('current');
    });
    
    $('.js_gnb_menu').click(function(){
        $('body').addClass('gnb-open');
        
    });
    
    $('.js-gnb-cls').click(function(){
        $('body').removeClass('gnb-open');
    });
    
    var mobileGnbToogle = function( $this, toogleList, toogleParent, toogleParentList){
        $this.next(toogleList).slideToggle().parents(toogleParent).siblings(toogleParentList).find(toogleList).slideUp();
        $this.parents(toogleParent).addClass('depth-open').siblings(toogleParentList).removeClass('depth-open'); //+ - 버튼 css 할거임.
    }
    $('.gnb>li>a').click(function(){
        // $(this).css({color:'#4ca4f5'})
        var $this = $(this),
            toogleList = $('.depth'),
            toogleParent = $('.gnb>li'),
            toogleParentList = $('li')
        mobileGnbToogle( $this, toogleList, toogleParent, toogleParentList );
        return false;
    });
    
    $('.depth2_list >li >h2').click(function(){
        
        var $this = $(this),
            toogleList = $('.depth2_sub_list'),
            toogleParent = $('.depth2_list>li'),
            toogleParentList = $('li')
        mobileGnbToogle( $this, toogleList, toogleParent, toogleParentList );
        
    });
    
    $('.depth_list>li>span').click(function(){
        
        var $this = $(this),
            toogleList = $('.depth_right_list'),
            toogleParent = $('.depth_list'),
            toogleParentList = $('ul')
        mobileGnbToogle( $this, toogleList, toogleParent, toogleParentList );
        
    });
    
});




