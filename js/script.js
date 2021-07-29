window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

//slider
var slider = tns({
    container: '.rew__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    
  });

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };

  //scroll 
  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

//modal
$('.img1').on('click', function(){
    $('.overlay, modal__1').fadeIn();
  });
  $('.modal__close, .overlay').on('click', function(){
    $('.overlay').fadeOut();
  });
//
  $('.img2').on('click', function(){
    $('.overlay2, modal__2').fadeIn();
  });
  $('.modal__close, .overlay2').on('click', function(){
    $('.overlay2').fadeOut();
  });
//
  $('.img3').on('click', function(){
    $('.overlay3, modal__3').fadeIn();
  });
  $('.modal__close, .overlay3').on('click', function(){
    $('.overlay3').fadeOut();
  });
  //
  $('.img4').on('click', function(){
    $('.overlay4, modal__4').fadeIn();
  });
  $('.modal__close, .overlay4').on('click', function(){
    $('.overlay4').fadeOut();
  });
  //
  $('.img5').on('click', function(){
    $('.overlay5, modal__5').fadeIn();
  });
  $('.modal__close, .overlay5').on('click', function(){
    $('.overlay5').fadeOut();
  });
  //
  $('.img6').on('click', function(){
    $('.overlay6, modal__6').fadeIn();
  });
  $('.modal__close, .overlay6').on('click', function(){
    $('.overlay6').fadeOut();
  });
  //
  $('.img7').on('click', function(){
    $('.overlay7, modal__7').fadeIn();
  });
  $('.modal__close, .overlay7').on('click', function(){
    $('.overlay7').fadeOut();
  });
  //
  $('.img8').on('click', function(){
    $('.overlay8, modal__8').fadeIn();
  });
  $('.modal__close, .overlay8').on('click', function(){
    $('.overlay8').fadeOut();
  });
  //
  $('.img9').on('click', function(){
    $('.overlay9, modal__9').fadeIn();
  });
  $('.modal__close, .overlay9').on('click', function(){
    $('.overlay9').fadeOut();
  });

  //terapy
  $('.methods__circle1').on('click', function(){
    $('.methods__descr_1').fadeIn();
  });

  $('.methods__close').on('click', function(){
    $('.methods__descr_1, .methods__descr_2, .methods__descr_3').fadeOut();
  });

  $('.methods__circle2').on('click', function(){
    $('.methods__descr_2').fadeIn();
  });

  
  $('.methods__circle3').on('click', function(){
    $('.methods__descr_3').fadeIn();
  });

  


  
 