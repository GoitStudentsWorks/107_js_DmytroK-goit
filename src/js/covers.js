const coversSection = document.getElementById('covers');
const marquees = document.querySelectorAll('.covers-marquee__inner');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        marquees.forEach(marquee => {
          marquee.style.animationPlayState = 'running';
        });
      } else {
        marquees.forEach(marquee => {
          marquee.style.animationPlayState = 'paused';
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

observer.observe(coversSection);
