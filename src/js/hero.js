document.querySelectorAll('.hero_social_media, .email').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'translateY(-10px)';
      item.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseout', () => {
      item.style.transform = 'translateY(0px)';
      item.style.transition = 'transform 0.3s ease-in-out';
    });
  });