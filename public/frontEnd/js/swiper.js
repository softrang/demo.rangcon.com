
// swiper start 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
 
  });
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
 
  });
var swiper = new Swiper(".mySwiper2", {

    spaceBetween: 20,
   
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 10,
          spaceBetween: 20,
        },
        1624: {
          slidesPerView: 12,
          spaceBetween: 20,
        },
      },
 
  });