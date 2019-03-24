let active = 0;
$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if(scroll>=80 && !active){
      active=1;
      $(".fixed-nav").css({'display':'unset'}).animate({opacity:'1'},300);
    }
    else if(scroll<80 && active){
      active=0;
      $(".fixed-nav").animate({opacity:'0'},300).css({'display':'none'});
    }
});
