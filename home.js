console.log("home ok");

// hero
let svgHero = document.querySelector(".logo_xlarg_footer");
console.log(svgHero);

// SWIPER Slider New campaign
const newCampaign = new Swiper('#is-new', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 16,
  allowTouchMove: false,
  autoplay: true,
  loop: true,
  breakpoints: {
    799: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// SWIPER Slider Ended soo n campaign

const endedCampaign = new Swiper('#is-ended', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 16,
  allowTouchMove: false,
  loop: true,
  breakpoints: {
    799: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  },

  navigation: {
    nextEl: '.is-arrow-ended-next',
    prevEl: '.is-arrow-ended-prev',
  },

});

/* SWIPER Slider Benefits 
const benefits = new Swiper('#is-benefits', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  delay: 4000,
  speed: 1000,
});
*/
