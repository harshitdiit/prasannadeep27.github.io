let active = 0;
$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if(scroll>=250 && !active){
      active=1;
      $(".fixed-nav").css({'display':'unset'});
    }
    else if(scroll<250 && active){
      active=0;
      $(".fixed-nav").css({'display':'none'});
    }
});
