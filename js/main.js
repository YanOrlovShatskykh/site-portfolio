document.addEventListener('DOMContentLoaded', ()=> {

  const preloader = document.querySelector('.preloader');
  // const buttonToTop = document.querySelector('.contacts-policy');

  

  setTimeout(() => {
    
    preloader.classList.add('preloader_disabled');
    setTimeout(() => {
      
      preloader.style.display = 'none';
      AOS.init({
        duration: 1500
      });
    }, 1000);
  }, 4000);
  





// new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  // autoplay: {
    // delay: 5000,
    // disableOnInteraction: true,
  // },
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
});


// jQuery

 // smooth scroll script
 //to top
  $('.contacts-policy').on('click', event => {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  //to bottom
  $('.hero-button').on('click', event => {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("footer").offset().top
  }, 200);
  });

  // init phome mask from maskedinput library
  $(".input-phone").mask("+9 (9999) 999-99-99");
  
  // form validation
  $(".contacts-form").validate({
    errorClass: "invalid", // rename error-class  
    errorElement: 'div',   // change error tag 
    rules: {
      username: {
        required: true,
        rangelength: [2, 15]
      }
    },
    messages: {
      username: {
        required: "Пожалуйста введите своё имя",
        rangelength: "Ваше имя должно быть больше одного символа и меньше 15"
      }
    }
  });

// $('.owl-carousel').owlCarousel({
  // loop:true,
  // margin:30,
  // nav:true,
  // navContainerClass:'arrows',
  // navClass:['arrows__left', 'arrows__right'],
  // autoplay:true,
  // autoplayTimeout:2000,
  // autoplayHoverPause:true,
  // autoWidth:true,
  // items: 2
  // responsive:{
  //     0:{
  //         items:1
  //     },
  //     700:{
  //         items:1
  //     },
  //     900:{
  //         items:1
  //     },
  //     1200:{
  //         items:1
  //     }
  // }
// });

}); 


