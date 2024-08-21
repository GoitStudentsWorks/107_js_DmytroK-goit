import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Initialize Swiper
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
  slidesPerView: 2, // Для екранів від 320px
  spaceBetween: 1, // Геп між елементами
  loop: true, // Циклічне прокручування
  loopedSlides: 6,
  navigation: {
    nextEl: '.about-swiper-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 3, // Для екранів від 768px
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

// Initialize Accordion
const container = document.querySelector('.about-accordion-container');

const accordion = new Accordion(container, {
  openOnInit: [0],
  showMultiple: false,
  duration: 500,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
