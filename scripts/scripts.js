console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  addMyEventListeners();
  fadeInContent();
});
 
//Events
function addMyEventListeners(){

  // Click event to scroll to top
  $('a#backToTop').on('click', function(){
    scrollToTop();
  });

  // Click event to hide & show mobile nav
  $('#navbar li a, #mobile-menu').on('click', function(){
    if ($(window).width() <= 990) {
      toggleNav();
      toggleMenuToX();
    }
  });

  // Window resize event 
  $(window).on('resize', function () {
    showHideDesktopNav();
  });

}

// function to scroll back to top
function scrollToTop() {
  // Animate the html element with scrollTop method
  $('html').animate({scrollTop:0});
};

//Check to see if the window is top if not then display button
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) {
    $('#backToTop').fadeIn(); // show back to top
  } else {
    $('#backToTop').fadeOut();// hide back to top
  }
  
});

//Toggle hide / show Nav
function toggleNav(){
  $('#navbar').fadeToggle(700);
};

//Toggle mobile menu to X
function toggleMenuToX(){
  $('#mobile-menu').toggleClass('change');
};

//show desktop navigation when window is resized
function showHideDesktopNav() {
  if( $(window).width() >= 990)
  {
      $('#navbar').show();
  } else 
  {
      $('#navbar').hide();
      $("#mobile-menu").removeClass( "change");
  }
}

// hide heading h1 on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if ( $(window).width() >= 990) {
    if (prevScrollpos > currentScrollPos) {
      $("h1").fadeIn();
    } else {
      $("h1").fadeOut();
    }
  }
  prevScrollpos = currentScrollPos;
}

// fade in content on page load
function fadeInContent() {
  $('#home p').css({'opacity':'0'}).delay(500).animate({'paddingLeft':'30px','opacity':'1'},800);
  $('h1').css({'opacity':'0'}).delay(700).animate({'opacity':'1','paddingLeft':'4vw'},2000); 
  $('.logo, h2').css({'opacity':'0', 'paddingLeft':'5vw'}).delay(500).animate({'opacity':'1','paddingLeft':'0'},1800);
  $('h3').css({'opacity':'0'}).delay(200).animate({'opacity':'1','paddingLeft':'0px'},1000);
  $('#home button').css({'opacity':'0'}).delay(500).animate({'opacity':'1'},1100);
  $('.about-image-wrapper').css({'opacity':'0'}).delay(0).animate({'marginRight':'0px','opacity':'1'},2000);

  if ( $(window).width() >= 990) {
    $('#navbar li').css({'opacity':'0'});
    $('#navbar li:nth-child(1)').delay(200).animate({'paddingTop':'0px','opacity':'1'},400);
    $('#navbar li:nth-child(2)').delay(250).animate({'paddingTop':'0px','opacity':'1'},1000);
    $('#navbar li:nth-child(3)').delay(500).animate({'paddingTop':'0px','opacity':'1'},700);
    $('#navbar li:nth-child(4)').delay(600).animate({'paddingTop':'0px','opacity':'1'},700);
    $('#navbar li:nth-child(5)').delay(800).animate({'paddingTop':'0px','opacity':'1'},800);
    $('#navbar li:nth-child(6)').delay(900).animate({'paddingTop':'0px','opacity':'1'},1100);
  }
}
