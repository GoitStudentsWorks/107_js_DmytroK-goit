const scrollUpBtn = document.querySelector('.go-back-btn');
scrollUpBtn.addEventListener('click', scrollToTop);

async function scrollToTop() {
  await new Promise(resolve => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    resolve();
  });
}

function showScrollToTopBtn() {
  if (window.scrollY > 1300) {
    scrollUpBtn.classList.remove('scroll-hidden');
  } else {
    scrollUpBtn.classList.add('scroll-hidden');
  }
}

window.addEventListener('scroll', showScrollToTopBtn);
