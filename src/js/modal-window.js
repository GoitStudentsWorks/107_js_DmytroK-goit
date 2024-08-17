function showModal() {
  const modal = document.querySelector('.modal-window');
  if (modal) {
    modal.style.display = 'block';

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        hideModal();
      }
    });

    document.addEventListener(
      'keydown',
      function (event) {
        if (event.key === 'Escape') {
          hideModal();
        }
      },
      { once: true }
    );
  }
}

function hideModal() {
  const modal = document.querySelector('.modal-window');
  if (modal) {
    modal.style.display = 'none';
  }
}

const closeButton = document.querySelector('.btn-close');

if (closeButton) {
  closeButton.addEventListener('click', function () {
    hideModal();
  });
}
