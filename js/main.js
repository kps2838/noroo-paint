$(function(){
    let w = window.innerWidth;
    console.log(w);
    if(w >= 768){
        $('#gnb > ul > li').mouseover(function(){
            $('#gnb').css('height','409px')
            $('.depth2').addClass('on')
            $('.menu-line').addClass('on')
        })
        $('#gnb').mouseleave(function(){
            $('#gnb').css('height','96px')
            $('.depth2').removeClass('on')
            $('.menu-line').removeClass('on')
        })
    
        $('#gnb li ul').hover(function(){
            $('#gnb .menu-line-click').addClass('on')
            },function(){
            $('#gnb .menu-line-click').removeClass('on')
        });
    
        $('#news .info-container .info-box').hover(function(){
            $(this).find('.text').css('top','0')}
            , function(){
            $(this).find('.text').css('top','236px')
        });
        
        $('#media .media-box').hover(function(){
            $(this).css('background-size','150%')
        }, function(){
            $(this).css('background-size','cover')
        });

        $('#gnb > ul > li').find('.depth2').hover(function(){
            $(this).parent('li').find('> a').css('color','#E31D1A')},
            function(){
                $(this).parent('li').find('> a').css('color','#000')
            });

        $('#gnb > ul > li').eq(0).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '291px')
        })

        $('#gnb > ul > li').eq(1).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '441px')
        })

        $('#gnb > ul > li').eq(2).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '591px')
        })

        $('#gnb > ul > li').eq(3).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '741px')
        })

        $('#gnb > ul > li').eq(4).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '891px')
        })

        $('#gnb > ul > li').eq(5).find('.depth2').mouseover(function(){
            $('.menu-line-click').css('left', '1041px')
        })
    } else{
    $('#gnb ul li').off();
    $('#news .info-container .info-box').off();
    $('#main-footer .text').find('.adress').html('<p>(13977) ????????? ????????? ????????? ????????? 351 <br> ???????????? ?????????, ????????? <br> ????????????????????? : 123-86-06034 <br>???????????? 031-467-6114 | ????????? ????????? 080-944-7777(????????? ??????)</p)')
    };

    $(window).resize(function(){
        let w = window.innerWidth;
        console.log(w);
        if(w >= 768){
            $('#gnb > ul > li').mouseover(function(){
                $('#gnb').css('height','409px')
                $('.depth2').addClass('on')
                $('.menu-line').addClass('on')
            })
            $('#gnb').mouseleave(function(){
                $('#gnb').css('height','96px')
                $('.depth2').removeClass('on')
                $('.menu-line').removeClass('on')
            })
        
            $('#gnb li ul').hover(function(){
                $('#gnb .menu-line-click').addClass('on')
                },function(){
                $('#gnb .menu-line-click').removeClass('on')
            });
        
            $('#news .info-container .info-box').hover(function(){
                $(this).find('.text').css('top','0')}
                , function(){
                $(this).find('.text').css('top','236px')
            });
            
            $('#media .media-box').hover(function(){
                $(this).css('background-size','150%')
            }, function(){
                $(this).css('background-size','cover')
            });
    
            $('#gnb > ul > li').find('.depth2').hover(function(){
                $(this).parent('li').find('> a').css('color','#E31D1A')},
                function(){
                    $(this).parent('li').find('> a').css('color','#000')
                });
    
            $('#gnb > ul > li').eq(0).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '291px')
            })
    
            $('#gnb > ul > li').eq(1).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '441px')
            })
    
            $('#gnb > ul > li').eq(2).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '591px')
            })
    
            $('#gnb > ul > li').eq(3).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '741px')
            })
    
            $('#gnb > ul > li').eq(4).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '891px')
            })
    
            $('#gnb > ul > li').eq(5).find('.depth2').mouseover(function(){
                $('.menu-line-click').css('left', '1041px')
            })
            
        } else{
        $('#gnb ul li').off();
        $('#news .info-container .info-box').off();
        $('#media .media-box').off();
        $('#main-footer .text').find('.adress').html('<p>(13977) ????????? ????????? ????????? ????????? 351 <br> ???????????? ?????????, ????????? <br> ????????????????????? : 123-86-06034 <br>???????????? 031-467-6114 | ????????? ????????? 080-944-7777(????????? ??????)</p)')
        }
    });
    
    $('#sns .sns-container .images li').click(function(){
        var selected_img = $(this).find('img').attr('src');
        var first_img = $('#sns .sns-container .images li').eq(0).find('img').attr('src');
        $('#sns .sns-container .images li').eq(0).find('img').attr('src',selected_img);
        $(this).find('img').attr('src', first_img);
        console.log(selected_img);
    })

    $('#gnb .mobile-menu').click(function(){
        $('#gnb > ul').toggleClass('on');
    })

    $('#site-map').click(function(){
        $('.sitemap-modal').addClass('on');
    })
    $('#close').click(function(){
        $('.sitemap-modal').removeClass('on');
    })
})