// functionHeader();
// export function functionHeader() {
//   // const modalWindow = document.querySelector('.backdrop');
//   // const openMenuBtn = document.querySelector('.open-menu-btn');
//   // const closeModalBtnHeader = document.querySelector('.modal-close-btn');
//   // const modalMenu = document.querySelector('.navi-modal-wrapper');
//   // const navigation = document.querySelector('.navi');
//   // const menu = document.querySelector('.menu');
//   // const itemsMenu = document.querySelector('.nav-wrapper');
//   // openMenuBtn.addEventListener('click', interactionModalWindow);
//   // closeModalBtnHeader.addEventListener('click', interactionModalWindow);
//   // modalMenu.addEventListener('click', interactionModalWindow);
//   // menu.addEventListener('click', interactionMenu);
//   // itemsMenu.addEventListener('click', interactionMenu);
//   // function interactionModalWindow() {
//   //   modalWindow.classList.toggle('is-open');
//   //   document.body.classList.toggle('modal-open');
//   // }
//   // function interactionMenu() {
//   //   navigation.classList.toggle('is-open');
//   // }

function hideMenuHeader() {
  const modalWindow = document.querySelector('.navi');
  if (modalWindow) {
    modalWindow.style.display = 'none';
  }
}

function showMenuHeader() {
  const modalWindow = document.querySelector('.navi');
  if (modalWindow) {
    modalWindow.style.display = 'block';
    modalWindow.style.opacity = 'inherit';
  }
}

const menuOpenLink = document.querySelector('.menu');
if (menuOpenLink) {
  menuOpenLink.addEventListener('click', function (event) {
    showMenuHeader();
  });
}

function closeMenu() {
  hideMenuHeader();
}

document.addEventListener('click', function (event) {
  const modalWindow = document.querySelector('.navi');
  const menuOpenLink = document.querySelector('.menu');

  if (
    modalWindow &&
    !modalWindow.contains(event.target) &&
    !menuOpenLink.contains(event.target)
  ) {
    hideMenuHeader();
  }
});
