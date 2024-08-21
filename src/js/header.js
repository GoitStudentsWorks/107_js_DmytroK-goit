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

// Функція для показу мобільного меню
function showMobileMenu() {
  const mobMenu = document.querySelector('.mob-menu');
  if (mobMenu) {
    mobMenu.classList.add('is-open'); // Додаємо клас для показу меню
    document.body.classList.add('no-scroll'); // Запобігаємо прокручуванню сторінки
  }
}

// Функція для приховування мобільного меню
function hideMobileMenu() {
  const mobMenu = document.querySelector('.mob-menu');
  if (mobMenu) {
    mobMenu.classList.remove('is-open'); // Видаляємо клас для приховування меню
    document.body.classList.remove('no-scroll'); // Дозволяємо прокручування сторінки
  }
}

// Обробник подій для кнопки відкриття мобільного меню
const openMenuBtn = document.querySelector('.open-menu-btn');
if (openMenuBtn) {
  openMenuBtn.addEventListener('click', function () {
    showMobileMenu();
  });
}

// Обробник подій для кнопки закриття мобільного меню
const closeMenuBtn = document.querySelector('.mob-menu-close-btn');
if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', function () {
    hideMobileMenu();
  });
}

// Закриття мобільного меню при натисканні поза меню
document.addEventListener('click', function (event) {
  const mobMenu = document.querySelector('.mob-menu');
  const openMenuBtn = document.querySelector('.open-menu-btn');

  if (
    mobMenu &&
    !mobMenu.contains(event.target) &&
    !openMenuBtn.contains(event.target)
  ) {
    hideMobileMenu();
  }
});
document.addEventListener('click', function (event) {
  const mobMenuNavLinks = document.querySelectorAll('.mob-menu a');

  mobMenuNavLinks.forEach(link => {
    if (link === event.target) {
      hideMobileMenu();
    }
  });
});
