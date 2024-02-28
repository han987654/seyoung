$(function(){
    var $body = $('body'),
        $window = $(window);

        //-----언어
        $(function(){
            $("#header .languages>a").click(function(){
                $("#header .languages_list").toggle();
                return false;
            })
        })

        $(function(){
            $("#footer .lang").click(function(){
                $("#footer .lang .languages_list").toggle();
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
                $body.addClass('is_scroll');
            }else {
                $body.removeClass('is_scroll');
            }
            if(sT>lastScrollTop){
                $body.addClass('scroll_down');
                $body.removeClass('scroll_up');
            } else {
                $body.removeClass('scroll_down');
                $body.addClass('scroll_up');
            }
            lastScrollTop = sT;
        }).trigger('scroll');

    
    $('.gnb>li').hover(function(){
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
        $('body').addClass('gnb_open');
        
    });
    
    $('.js_gnb_cls').click(function(){
        $('body').removeClass('gnb_open');
    });
    
    var mobileGnbToggle = function( $this, toggleList, toggleParent, toggleParentList){
        $this.next(toggleList).slideToggle().parents(toggleParent).siblings(toggleParentList).find(toggleList).slideUp();
        $this.parents(toggleParent).addClass('depth_open').siblings(toggleParentList).removeClass('depth_open');
    }
    $('.gnb>li>a').click(function(){
        $(this).find('i').toggleClass('xi-minus').parents('li').siblings().find('i').removeClass('xi-minus');
        // $(this).css({color:'#4ca4f5'})
        var $this = $(this),
            toggleList = $('.depth'),
            toggleParent = $('.gnb>li'),
            toggleParentList = $('li')
        mobileGnbToggle( $this, toggleList, toggleParent, toggleParentList );
        return false;

        
    });
    
    $('#header .depth2_list >li >h2').click(function(){
        var $this = $(this),
            toggleList = $('#header .depth2_sub_list'),
            toggleParent = $('#header .depth2_list>li'),
            toggleParentList = $('li')
        mobileGnbToggle( $this, toggleList, toggleParent, toggleParentList );
        
    });
    
    $('.depth_list>li>span').click(function(){
        
        var $this = $(this),
            toggleList = $('.depth_right_list'),
            toggleParent = $('.depth_list'),
            toggleParentList = $('ul')
        mobileGnbToggle( $this, toggleList, toggleParent, toggleParentList );
        
    });
    
    $('.footer_menu>ul>li').click(function(){
        $(this).find('.footer_sub').slideToggle();
        $(this).siblings('li').find('.footer_sub').slideUp();
        $(this).find('i').toggleClass('xi-angle-down');
        $(this).find('i').addClass('xi-angle-up');
        $(this).siblings().children('i').removeClass('xi-angle-up');
        $(this).siblings().children('i').addClass('xi-angle-down')
    })
});




