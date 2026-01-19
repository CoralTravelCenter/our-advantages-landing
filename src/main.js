import './main.css';

import banner from './banner/banner.html?raw';
import './banner/banner.css';

import benefits from './benefits/benefits.html?raw';
import './benefits/benefits.css';

import cards from './cards/cards.html?raw';
import './cards/cards.css';

import slider from './slider/slider.html?raw';
import './slider/slider.css'
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';

import slider2 from './slider-2/slider-2.html?raw';


const c = document.querySelector('#monkey-app')
c.insertAdjacentHTML('beforeend', banner)
c.insertAdjacentHTML('beforeend', benefits)
c.insertAdjacentHTML('beforeend', cards)
c.insertAdjacentHTML('beforeend', slider)
c.insertAdjacentHTML('beforeend', slider2)


async function hostReactAppReady(
  selector = "#__next > div",
  timeout = 500,
) {
  return new Promise((resolve) => {
    const waiter = () => {
      const host_el = document.querySelector(selector);
      if (host_el?.getBoundingClientRect().height) {
        resolve();
      } else {
        setTimeout(waiter, timeout);
      }
    };
    waiter();
  });
}

hostReactAppReady().then(() => {
  let swiper;

  const sliderMedia = window.matchMedia("(max-width: 1279px)");

  function initSwiperByMedia(e) {
    const isMobile = e.matches;
    if (isMobile && !swiper) {
      swiper = new Swiper(".js-slider-advantages", {
        modules: [Navigation, Pagination],
        slidesPerView: 1.3,
        spaceBetween: 32,
        loop: true,
        pagination: {
          el: ".js-slider-advantages-pagination",
        },
        breakpoints: {
          768: {
            slidesPerView: 1.7,
          },
          1024: {
            slidesPerView: 2.7,
          },
        },
      });
    }

    if (!isMobile && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  initSwiperByMedia(sliderMedia);
  sliderMedia.addEventListener("change", initSwiperByMedia);
});

hostReactAppReady().then(() => {
  let swiper;

  const sliderMedia = window.matchMedia("(max-width: 1279px)");

  function initSwiperByMedia(e) {
    const isMobile = e.matches;
    if (isMobile && !swiper) {
      swiper = new Swiper(".js-slider-advantages-2", {
        modules: [Navigation, Pagination],
        slidesPerView: 1.3,
        spaceBetween: 32,
        loop: true,
        pagination: {
          el: ".js-slider-advantages-pagination",
        },
        breakpoints: {
          768: {
            slidesPerView: 1.7,
          },
          1024: {
            slidesPerView: 2.7,
          },
        },
      });
    }

    if (!isMobile && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  initSwiperByMedia(sliderMedia);
  sliderMedia.addEventListener("change", initSwiperByMedia);
})
