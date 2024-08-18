import axios from 'axios';
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
