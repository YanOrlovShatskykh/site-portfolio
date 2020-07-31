document.addEventListener('DOMContentLoaded', ()=> {

  const preloader = document.querySelector('.preloader');

  setTimeout(() => {
    
    preloader.classList.add('preloader_disabled');
    setTimeout(() => {
      
      preloader.style.display = 'none';
      AOS.init({
        duration: 1500
      });
    }, 1000);
  }, 2000);
  





// new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.projects-pagination',
    bulletClass: 'projects-bullet',
    bulletActiveClass: 'projects-bullet-active',
    clickable: true
  },
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


