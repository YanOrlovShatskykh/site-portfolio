document.addEventListener('DOMContentLoaded', ()=> {

  const preloader = document.querySelector('.preloader');
  const form = document.querySelector('.contacts-form');
  const popup = document.querySelector('.popup');
  const popupDialog = document.querySelector('.popup-dialog');
  const popupClose = document.querySelector('.popup-dialog__close');
  const formData = new FormData();
  
  setTimeout(() => { 
    preloader.classList.add('preloader_disabled');
    setTimeout(() => {
      preloader.style.display = 'none';
      AOS.init({
        duration: 1500
      });
    }, 1000);
  }, 4000);
  
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.projects-pagination',
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active',
      clickable: true
    },
  });

  const closeP = ()=> {
    popup.classList.remove('popup_active');
    document.querySelector('.popup-dialog__text').remove();
  };

  const closePopup = event => {
    event.preventDefault();
    let target = event.target;
    
    if(event.keyCode === 27) {
      event.preventDefault();
      closeP();
    }

    if(target.classList.contains('popup-dialog__close')) {
      closeP();
    }

    if(!target.closest('.popup-dialog')) {
      closeP();
    }

    popupClose.removeEventListener('click', closePopup);
  };

  const sendMail = event => {
    if(!document.querySelector('.input-name').classList.contains('invalid')) {
      event.preventDefault();
      let username = form[0].value;
      let phone = form[1].value;
      let comment = form[2].value;
      formData.append('username', username);
      formData.append('phone', phone);
      formData.append('comment', comment);

      fetch("php/mail.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(response => {        
        const popupText = document.createElement('h3');
        popupText.classList.add('popup-dialog__text');

        if(response == 'true') {
          popupText.innerText = `${username}, спасибо за заявку! Я вскоре с Вами свяжусь))`;
          popupDialog.insertAdjacentElement('beforeend', popupText);
        } else {
          popupText.innerText = `${username}, что-то пошло не так( Попробуйте отправить заявку ещё разок или свяжитесь со мной через контакты, указанные на сайте.`;
          popupDialog.insertAdjacentElement('beforeend', popupText);
        }
        popup.classList.add('popup_active');
      });

      popup.addEventListener('click', closePopup);
      document.addEventListener('keydown', event => {
        if(event.keyCode === 27 && popup.classList.contains('popup_active')) {
          closeP();
        }
      });
    }
  };

  form.addEventListener('submit', sendMail);
  
  ////////////////////////////////
  // jQuery
  ///////////////////////////////

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
});