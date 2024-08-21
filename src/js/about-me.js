import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Initialize Swiper
const swiper = new Swiper('.about-skills', {
  navigation: {
    nextEl: '.about-swiper-btn', // Assign button as next slide trigger
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
  slidesPerView: 2,
  spaceBetween: 1,
  loop: true,
  loopedSlides: 6,
  breakpoints: {
    768: {
      slidesPerView: 3,
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
