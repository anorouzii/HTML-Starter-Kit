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
    // Menu tabs
    const tabs = document.querySelectorAll('.menu__tab');
    const tabContents = document.querySelectorAll('.menu__content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        tabs.forEach(t => {
          t.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
        tab.classList.add('active');
      });
    });

  });
})();
