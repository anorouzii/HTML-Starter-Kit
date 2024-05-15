/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile navigation
    const toggleButton = document.querySelector('.nav__toggle');
    const navList = document.querySelector('.nav__list');
    toggleButton.addEventListener('click', function () {
      navList.classList.toggle('show');
      toggleButton.classList.toggle('active');
    });
  });
})();
