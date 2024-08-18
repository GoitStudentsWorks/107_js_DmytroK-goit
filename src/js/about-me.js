import Swiper from 'swiper';
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const swiperContainer = document.querySelector('.swiper');

const swiper = new Swiper(swiperContainer, {
  initialSlide: 0,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    invert: true,
  },
  touchEventsTarget: 'wrapper',
  slideClass: 'about-skills-item',
  slideActiveClass: 'about-skills-item-accent',
  wrapperClass: 'about-skills-list',
  rewind: true,

  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 2,
      width: 260,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      width: 600,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});

const container = document.querySelector('.about-accordion-container');

const accordion = new Accordion(container, {
  openOnInit: [0],
  showMultiple: true,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
