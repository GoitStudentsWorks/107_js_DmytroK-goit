import Swiper from 'swiper';
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// const swiper = new Swiper('.swiper', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   mousewheel: {
//     invert: true,
//   },
//   touchEventsTarget: 'wrapper',
//   slideClass: 'about-skills-item',
//   slideActiveClass: 'about-skills-item-accent',
//   wrapperClass: 'about-skills-list',
// });

const container = document.querySelector('.about-accordion-container');

const accordion = new Accordion(container, {
  openOnInit: [0],
  showMultiple: true,
  elementClass: 'about-ac',
  panelClass: 'about-ac-panel',
  triggerClass: 'about-ac-btn',
});
