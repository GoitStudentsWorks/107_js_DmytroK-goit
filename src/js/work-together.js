function hideModal() {
  const modal = document.querySelector('.modal-window');
  if (modal) {
    modal.style.display = 'none';
  }
}
hideModal();
function showModal() {
  const modal = document.querySelector('.modal-window');
  if (modal) {
    modal.style.display = 'block';
  }
}

const commentsForm = document.querySelector('.work-together-form');
const closeButton = document.querySelector('.btn-close');

if (commentsForm) {
  commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();
    showModal();
  });
}
if (closeButton) {
  closeButton.addEventListener('click', function () {
    hideModal();
  });
}
