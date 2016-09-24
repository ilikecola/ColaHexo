$(document).ready(function() {

  $('a.blog-button').click(function() {
  	$('.panel-cover').addClass('animated');
    $('.content-wrapper').addClass('animated');
    
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
    	$('.panel-cover').removeClass('panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').removeClass('slideInLeft');
    	$('.panel-cover').addClass('slideInRight');	
    	$('.content-wrapper').addClass('slideInRight');	
    }
    else{
    	$('.panel-cover').removeClass('slideInRight');
    	$('.content-wrapper').removeClass('slideInRight');
    	$('.panel-cover').addClass('panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').addClass('slideInLeft');
    }    
  });

  if (window.location.pathname != "/" && window.location.pathname != "/#blog") {       // if hexo in subdir of site, should change this line
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
