$(function(){
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
})