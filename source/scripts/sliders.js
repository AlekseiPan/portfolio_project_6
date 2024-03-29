import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

import { showCurrentSlide } from './util.js';

/* Main slider */

const swiperMain = new Swiper('.swiperMain', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Text sliders */

/* Text slider 1 */

const regionBlock = document.querySelector('.region');
const arrowLeft1 = regionBlock.querySelector('.info-template__arrow--left');
const arrowRight1 = regionBlock.querySelector('.info-template__arrow--right');

const currentSlide1 = regionBlock.querySelector(
  '.info-template__slide--current'
);
const lastSlide1 = regionBlock.querySelector('.info-template__slide--last');

const swiperText1 = new Swiper('.swiperText1', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  autoHeight: true,
});

arrowLeft1.addEventListener('click', () => {
  swiperText1.slidePrev();
});

arrowRight1.addEventListener('click', () => {
  swiperText1.slideNext();
});

const listSlides1 = regionBlock.querySelectorAll('.text-slider__item');
lastSlide1.textContent = `0${listSlides1.length}`;

showCurrentSlide(listSlides1, currentSlide1);

swiperText1.on('slideChange', () => {
  showCurrentSlide(listSlides1, currentSlide1);
});

/* Text slider 2 */

const scienceBlock = document.querySelector('.science');
const arrowLeft2 = scienceBlock.querySelector('.info-template__arrow--left');
const arrowRight2 = scienceBlock.querySelector('.info-template__arrow--right');

const currentSlide2 = scienceBlock.querySelector(
  '.info-template__slide--current'
);
const lastSlide2 = scienceBlock.querySelector('.info-template__slide--last');

const swiperText2 = new Swiper('.swiperText2', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  autoHeight: true,
});

arrowLeft2.addEventListener('click', () => {
  swiperText2.slidePrev();
});

arrowRight2.addEventListener('click', () => {
  swiperText2.slideNext();
});

const listSlides2 = scienceBlock.querySelectorAll('.text-slider__item');
lastSlide2.textContent = `0${listSlides2.length}`;

showCurrentSlide(listSlides2, currentSlide2);

swiperText2.on('slideChange', () => {
  showCurrentSlide(listSlides2, currentSlide2);
});

/* Picture slider */

const swiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    depth: 0,
    rotate: 0,
    scale: 0.78,
    slideShadows: false,
    stretch: 17,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const swiperPicture1 = new Swiper('.swiperPicture1', swiperOptions);
const swiperPicture2 = new Swiper('.swiperPicture2', swiperOptions);
