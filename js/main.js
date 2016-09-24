$(document).ready(function() {

  $('a.home-button').click(function() {    
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
    	$('.panel-cover').removeClass('animated panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').removeClass('animated slideInLeft');
    	$('.panel-cover').addClass('animated slideInRight');	
    	$('.content-wrapper').addClass('animated slideInRight');	
    }
    else{
    	$('.panel-cover').removeClass('animated slideInRight');
    	$('.content-wrapper').removeClass('animated slideInRight');
    	$('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    	$('.content-wrapper').addClass('animated slideInLeft');
    }    
  });
  
  $('a.blog-button').click(function() {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.panel-cover').removeClass('animated slideInRight');
    $('.content-wrapper').removeClass('animated slideInRight');
    $('.panel-cover').addClass('animated panel-cover--collapsed slideInLeft');
    $('.content-wrapper').addClass('animated slideInLeft');
  });

	if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

	if (window.location.hash && window.location.hash == "about") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

	if (window.location.hash && window.location.hash == "archive") {
    $('.panel-cover').addClass('panel-cover--collapsed');
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
