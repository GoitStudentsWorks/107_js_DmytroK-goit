import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next-button",
		prevEl: ".swiper-button-prev-button",
	},
});