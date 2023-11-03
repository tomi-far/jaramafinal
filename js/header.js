$(document).ready(function(){

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('header').addClass('header2');
            $('nav').addClass('fixed-top');
           // $('.ja_logo_header_text').addClass('ja_logo_header_text_none');
        } else {
            $('header').removeClass('header2');
            $('nav').removeClass('fixed-top');
           // $('.ja_logo_header_text').removeClass('ja_logo_header_text_none');
        }
    });
});