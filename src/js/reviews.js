import { getReviews } from './api';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const ulElement = document.querySelector('.list-reviews');

function reviewMarkup({ author, avatar_url, review }) {
  return `<li class="item-review swiper-slide-reviews">
           <img src="${avatar_url}" class="img-review" alt="${author}" />
           <h3 class="name-review">${author}</h3>
           <p class="text-review">${review}</p>
          </li>`;
}

function reviewsMarkup(array) {
  return array.map(reviewMarkup).join('');
}

async function showReviews() {
  try {
    const reviews = await getReviews();

    if (reviews && reviews.length > 0) {
      ulElement.innerHTML = reviewsMarkup(reviews);

      const swiper = new Swiper('.swiper-review', {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
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
        breakpoints: {
          768: {
            slidesPerView: 'auto',
          },
        },
      });

      swiper.on('reachEnd', () => {
        document
          .querySelector('.swiper-button-next-review')
          .classList.add('swiper-button-disabled');
      });

      swiper.on('reachBeginning', () => {
        document
          .querySelector('.swiper-button-prev-review')
          .classList.add('swiper-button-disabled');
      });

      swiper.on('fromEdge', () => {
        document
          .querySelector('.swiper-button-next-review')
          .classList.remove('swiper-button-disabled');
        document
          .querySelector('.swiper-button-prev-review')
          .classList.remove('swiper-button-disabled');
      });
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

showReviews();
