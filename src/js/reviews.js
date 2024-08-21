import { getReviews } from './api';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ulElement = document.querySelector('.list-reviews-script');

function reviewMarkup({ author, avatar_url, review }) {
  return `<li class="item-review swiper-slide swiper-slide-review">
           <img src="${avatar_url}" class="img-review" alt="${author}" />
           <h3 class="name-review">${author}</h3>
           <p class="text-review">${review}</p>
          </li>`;
}

function reviewsMarkup(array) {
  return array.map(reviewMarkup).join('');
}

document.addEventListener('DOMContentLoaded', showReviews);

async function showReviews() {
  try {
    const reviews = await getReviews();

    if (reviews && reviews.length > 0) {
      ulElement.innerHTML = reviewsMarkup(reviews);

      const swiper = new Swiper('.swiper-review', {
        // modules: [Navigation],
        slidesPerView: 'auto',
        breakpoints: {
          // when window width is >= 320
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1440
          1440: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        },
        spaceBetween: 16,
        navigation: {
          nextEl: '.swiper-button-next-review',
          prevEl: '.swiper-button-prev-review',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        },
        grabCursor: true,
        loop: false,
        speed: 600,
      });

      swiper.on('slideChange', () => updateNavigationButtons(swiper));
      swiper.on('reachEnd', () => updateNavigationButtons(swiper));
      swiper.on('reachBeginning', () => updateNavigationButtons(swiper));

      updateNavigationButtons(swiper);
      swiper.update();
    } else {
      ulElement.innerHTML = '<li class="item-review">Not found</li>';
    }
  } catch (err) {
    iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
      message: 'Failed to load reviews',
    });

    ulElement.innerHTML = '<li class="item-review">Not found</li>';
  }
}

function updateNavigationButtons(swiper) {
  const prevButton = document.querySelector('.swiper-button-prev-review');
  const nextButton = document.querySelector('.swiper-button-next-review');

  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;

  prevButton.classList.toggle('disabled', prevButton.disabled);
  nextButton.classList.toggle('disabled', nextButton.disabled);
}
