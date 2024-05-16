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

    // Popular Dished Carousel
    const elem = document.querySelector('.popular-dishes__carousel');
    const flkty = new Flickity(elem, {
      fullscreen: true,
      prevNextButtons: false,
      pageDots: false,
      lazyLoad: true
    });

    // Navigation buttons
    const prevButton = document.querySelector('.popular-dishes__navigation-prev');
    const nextButton = document.querySelector('.popular-dishes__navigation-next');

    prevButton.addEventListener('click', () => {
      flkty.previous();
    });

    nextButton.addEventListener('click', () => {
      flkty.next();
    });

    // Slide counter

    const sliderCounter = document.querySelector('.popular-dishes__navigation-counter');
    const totalSlides = flkty.slides.length;
    sliderCounter.innerHTML = `<span>1</span> / ${totalSlides}`;

    flkty.on('change', (index) => {
      sliderCounter.innerHTML = `<span>${index + 1}</span> / ${totalSlides}`;
      // Disable navigation buttons on first and last slide
      if (index === 0) {
        prevButton.disabled = true;
      } else {
        prevButton.disabled = false;
      }
      if (index === totalSlides - 1) {
        nextButton.disabled = true;
      } else {
        nextButton.disabled = false;
      }
    });

    // Copyright text
    const currentYear = new Date().getFullYear();
    document.querySelector('.copyright__year').innerText = currentYear;
  });
})();
