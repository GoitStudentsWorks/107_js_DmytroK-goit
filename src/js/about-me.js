import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const swiperCont = document.querySelector('.about-skills');

const swiper = new Swiper(swiperCont, {
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  touchEventsTarget: 'wrapper',
  slideClass: 'about-skills-item',
  slideActiveClass: 'about-skills-item-accent',
  wrapperClass: 'about-skills-list',
  loop: true,
  width: 6,
  // loopAdditionalSlides: 4,
  slidesPerView: 6,
  // slidesPerGroup: 1,

  // breakpoints: {
  //   // when window width is >= 375px
  //   375: {
  //     slidesPerView: 2,
  //     width: 260,
  //   },
  //   // when window width is >= 768px
  //   768: {
  //     slidesPerView: 3,
  //     width: 600,
  //   },
  //   // when window width is >= 1440px
  //   1440: {
  //     slidesPerView: 'auto',
  //     width: 200,
  //   },
  // },
});

const container = document.querySelector('.about-accordion-container');

const accordion = new Accordion(container, {
  openOnInit: [0],
  showMultiple: false,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
