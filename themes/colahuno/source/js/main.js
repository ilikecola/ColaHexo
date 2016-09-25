$(document).ready(function() {

  $('a.home-button').click(function() {    
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
    	$('.panel-cover').removeClass('animated panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').removeClass('animated slideInLeft');
    	$('.panel-cover').addClass('animated slideInRight');	
    	$('.content-wrapper').addClass('animated slideInRight');
    	$('.other_navigation__item').addClass('sethidden');
    	$('.home_navigation__item').addClass('sethidden');   	
    	$('.navigation__item').css('display','inline-block');
    }
    else{
    	$('.panel-cover').removeClass('animated slideInRight');
    	$('.content-wrapper').removeClass('animated slideInRight');
    	$('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').addClass('animated slideInLeft');
    	$('.other_navigation__item').removeClass('sethidden');
    	$('.home_navigation__item').removeClass('sethidden');
    	$('.home_navigation__item').removeClass('sethidden');
    	$('.navigation__item').css('display','block');
    }    
  });
  
  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.panel-cover').removeClass('animated slideInRight');
    $('.content-wrapper').removeClass('animated slideInRight');
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper').addClass('animated slideInLeft');
    $('.other_navigation__item').removeClass('sethidden');
    $('.home_navigation__item').removeClass('sethidden');
    $('.navigation__item').css('display','block');
  });
  
	if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  
  if(!($('.panel-cover').hasClass('panel-cover--collapsed'))){
  	$('.other_navigation__item').addClass('sethidden');
  	$('.home_navigation__item').addClass('sethidden');
  	$('.navigation__item').css('display','inline-block');
  }
  
  if (window.location.pathname != "/") {       // if hexo in subdir of site, should change this line
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu').click(function() {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function() {
    // $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});
