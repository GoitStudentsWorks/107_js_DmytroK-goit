import axios from 'axios';
function hideModal() {
  const modal = document.querySelector('.modal-window');
  const bodyModal = document.querySelector('body');

  if (modal) {
    modal.style.display = 'none';
    bodyModal.style.overflow = '';
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
    // document.body.classList.remove('no-scroll');
  }
}
hideModal();
function showModal() {
  const modal = document.querySelector('.modal-window');
  const bodyModal = document.querySelector('body');
  if (modal) {
    modal.style.display = 'block';
    bodyModal.style.overflow = 'hidden';
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    // document.body.classList.add('no-scroll');
  }
}

function handleClickOutside(event) {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent && !modalContent.contains(event.target)) {
    hideModal();
  }
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    hideModal();
  }
}

const commentsForm = document.querySelector('.work-together-form');
const closeButton = document.querySelector('.btn-close');

if (commentsForm) {
  commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = commentsForm.elements['email'].value;
    const comments = commentsForm.elements['comments'].value;

    const data = {
      email: email,
      comment: comments,
    };

    axios
      .post('https://portfolio-js.b.goit.study/api/requests', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Форма успішно відправлена:', response.data);
        commentsForm.reset();

        showModal();
      })
      .catch(error => {
        console.error('Виникла помилка:', error);
        alert('Виникла помилка при відправці форми.');
      });
  });
}

if (closeButton) {
  closeButton.addEventListener('click', function () {
    commentsForm.reset();
    hideModal();
  });
}
