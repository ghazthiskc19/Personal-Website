const toggle = document.querySelector('.nav-checkbox');
const menu = document.querySelector('.wrap-ul-navbar');


toggle.addEventListener('click' , function(){
    menu.classList.toggle('open-navbar');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("navbar-wrapper").style.backgroundColor = "orangered";
    document.getElementById("navbar-wrapper").style.setProperty("padding", "10px 100px");
    document.getElementById("navbar-wrapper").style.boxShadow = "  0px 0px 39px 0px rgba(0 ,0 ,0 ,50%)";
    // document.getElementById("navbar-wrapper").style.borderBottom = "1px solid black";
    // document.getElementById("logo-a").style.boxShadow = " 0px 20px 0px -10px orangered, 0px -20px 0px -10px orangered, 20px 0px 0px -10px orangered, -20px 0px 0px -10px orangered, 0px 0px 0px 3px black, 5px 5px 15px 5px rgba(0,0,0,0)";
    document.getElementById("logo-a").style.boxShadow = "orangered 0px 20px 0px -10px, orangered 0px -20px 0px -10px, orangered 20px 0px 0px -10px, orangered -20px 0px 0px -10px, 10px -10px orangered, -10px 10px orangered, black 0px 0px 0px 3px, rgb(0 0 0 / 0%) 5px 5px 15px 5px";
  }
  else {
    document.getElementById("navbar-wrapper").style.backgroundColor = "transparent";
    document.getElementById("navbar-wrapper").style.setProperty("padding", "0 100px");
    document.getElementById("navbar-wrapper").style.boxShadow = " none ";
    document.getElementById("navbar-wrapper").style.borderBottom = "0 solid black";
    document.getElementById("logo-a").style.boxShadow = " none ";
    // document.getElementById("hamburger-menu").style.setProperty("padding", "16px 20px");
  }
}  

const toggle2 = document.querySelector('.accordion-checkbox');
const menu2 = document.querySelector('.accordion-wrap');
const menu3 = document.querySelector('.fa-angle-right');


toggle2.addEventListener('click' , function(){
    menu2.classList.toggle('open-accordion');
    menu3.classList.toggle('icon-rotate');
});

$(window).scroll(function(){
  var WScroll = $(this).scrollTop();
    if ( WScroll > $('.profile-animate').offset().top -350 ) {
      $('.profile-animate').addClass('profile-top-animate');
      $('.profile-animate-p').addClass('animate-transform');
      $('.profile-animate-1').addClass('animate-transform');

    } 
    if ( WScroll > $('.left-right').offset().top -450 ) {
      $('.profile-header-anim-1').addClass('animate-transform');
      $('.profile-header-anim-2').addClass('animate-transform');
      $('.profile-header-anim-3').addClass('animate-transform');
      $('.profile-mini-animate').addClass('animate-transform');
      $('.profile-img').addClass('img-animate');
    }
    if ( WScroll > $('.left-right').offset().top -350 ) {
      $('.profile-img').addClass('profile-img-animate');
    }
    if ( WScroll > $('.left-right').offset().top -350 ) {
      $('.profile-paragraph-1').addClass('animate-transform');
      $('.profile-paragraph-2').addClass('animate-transform');
      $('.profile-paragraph-3').addClass('animate-transform');
      $('.left-right').addClass('after-left');
    }

    if ( WScroll > $('.profile-middle').offset().top -490 ) {
      $('.profile-m-paragraph-1-p').addClass('animate-transform');
      $('.profile-m-paragraph-2-p').addClass('animate-transform');
      $('.profile-m-paragraph-3-p').addClass('animate-transform');
    }

    if ( WScroll > $('.profile-middle').offset().top -400 ) {
      $('.profile-quote-animate').addClass('animate-transform');
      // $('.img-hero-animate').addClass('animate-transform');      
    }
    if ( WScroll > $('.profile-middle').offset().top -250 ) {
      $('.m-img-hero').addClass('img-animate-2');
    }
    if ( WScroll > $('.profile-middle').offset().top -50 ) {
      $('.profile-bottom-close-1').addClass('profile-bottom-animate');
      $('.profile-bottom-close-2').addClass('profile-bottom-animate-2');
    }

    if ( WScroll > $('.project-top').offset().top -425 ) {
      $('.profile-top.top-2').addClass('profile-top-animate-2');
      $('.p-animate-1').addClass('animate-transform');
      $('.project-animate-1').addClass('animate-transform');
      $('.project-animate-2').addClass('animate-transform');
      
    } 
    if ( WScroll > $('.project-content').offset().top -575 ) {
      $('.dark-mode').each(function(i){
        setTimeout(function () {
          $('.dark-mode').eq(i).addClass('show');
        }, 400 * (i*1) ) ; // 400 = 4s dalam satuan milisecond ( ms ) 
      });
    }
    if ( WScroll > $('.gallery-h1').offset().top -600 ) {
      $('.gallery-h1-animate-1').addClass('animate-transform');
      $('.gallery-h1-animate-2').addClass('animate-transform');
    };
    
    
    if ( WScroll > $('.gallery-wrap').offset().top -525 ) {
      $('.item').each(function(i){
        setTimeout(function () {
          $('.item').eq(i).addClass('show');
        }, 300 * (i*1) ) ; // 300 = 3s dalam satuan milisecond ( ms ) 
      });
    }
    if ( WScroll > $('.quote-h1-wrap').offset().top -600 ) {
      $('.quote-h1-1').addClass('animate-transform');
      $('.quote-h1-2').addClass('animate-transform');
    };
    if ( WScroll > $('.quote-wrap').offset().top -500 ) {
      $('.quote-bag-1 .quote-span-wrap .quote-span-animate').addClass('animate-transform');
      $('.quote-bag-2 .quote-span-wrap .quote-span-animate').addClass('animate-transform');
      $('.quote-bag-3 .quote-span-wrap .quote-span-animate').addClass('animate-transform');
      // $('.gallery-h1-animate-2').addClass('animate-transform');
    };


    if ( WScroll > $('.footer-svg').offset().top -350 ) {
      $('.sosmed-span-animate').addClass('animate-transform');
      $('.footer-span-animate').addClass('animate-transform');
      $('.contact-span-animate').addClass('animate-transform');
      $('.telp-icon').addClass('animate-transform');
      $('.email-icon').addClass('animate-transform');
      $('.location-icon').addClass('animate-transform');
      $('.telp-span-animate').addClass('animate-transform');
      $('.email-span-animate').addClass('animate-transform');
      $('.location-span-animate').addClass('animate-transform');
      $('.insta-wrap').addClass('animate-transform');
      $('.facebook-wrap').addClass('animate-transform');
      $('.twitter-wrap').addClass('animate-transform');
      $('.github-wrap').addClass('animate-transform');
      $('form').addClass('form-email');
    };
      // if ( WScroll > $('.footer-svg').offset().top -590 ) {
      //   $('.copy-span-animate').addClass('animate-transform');
      // };
    if ( WScroll > $('.footer-copyright').offset().top -600 ) {
      $('.footer .footer-copyright .copyright .copy-span-wrap .copy-span-animate').addClass('animate-transform');
    };



});