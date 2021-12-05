$(document).ready(function(){
  $('.faq_header').click(function(){
    $(this).toggleClass('active');
    $(this).parent('.singleFaq__item').toggleClass('active');
  });

  $('.mobileMenu').click(function(){
    $(this).toggleClass("active");
    $('.primaryMenu').toggleClass("active");
  });
  $('.menuLInk').click(function(){
    $('.primaryMenu').removeClass("active");
    $('.mobileMenu').removeClass("active");
  }); 


  $('.d-b-d').click(function(){  
		$('html, body').animate({    
			scrollTop:$($(this).attr('href')).offset().top
		}, 1000);
		$(".menu").removeClass("menu_active");
		$(".menu_bars").removeClass("open");

	return false;
	});
});

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();
		// back-to-top
  	if(scrollvalue>100){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
	}
	return false;
}); 