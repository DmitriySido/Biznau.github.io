const swiper1 = new Swiper('.reviews__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.reviews__swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.reviews__swiper-button-next',
  //   prevEl: '.reviews__swiper-button-prev',
  // },
  slidesPerView: 3.231,
  speed: 600,

  breakpoints:{
    1024:{
      slidesPerView: 3.1
    },915:{
      slidesPerView: 3
    },855:{
      slidesPerView: 2.7
    },802:{
      slidesPerView: 2.8
    },767:{
      slidesPerView: 2
    },700:{
      slidesPerView: 2
    },400:{
      slidesPerView: 1
    },310:{
      slidesPerView: 1
    },
  }, 
});

const swiper2 = new Swiper('.how-do__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.how-do__swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.reviews__swiper-button-next',
  //   prevEl: '.reviews__swiper-button-prev',
  // },
  slidesPerView: 1.019,
  speed: 600,

  breakpoints:{
    1024:{
      slidesPerView: 3.1
    },915:{
      slidesPerView: 2
    },
  }, 
});