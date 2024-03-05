'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';

const inputSearch = document.querySelector('.input-picstyle');
const searchButton = document.querySelector('.search-btn');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.loadmore-btn');
const loader = document.querySelector('.loader');
const theEnd = document.querySelector('.the-end');

let lastQuery = '';
let page = 1;
const perpage = 15;

// event listener for Search button
searchButton.addEventListener('click', async () => {
  const perpage = 15;
  gallery.innerHTML = null;
  const q = inputSearch.value.trim().split(' ').join('+');
  theEnd.classList.add('is-hidden');
  lastQuery = q;
  console.log(q);
  if (!q) {
    iziToast.error({
      color: 'red',
      message: 'Please fill in the querry, what are you looking for?',
      position: 'center',
      progressBarColor: 'rgb(0, 255, 184)',
      timeout: 2000,
    });
    return;
  }
  loader.classList.remove('is-hidden');
  try {
    const images = await fetchImages(q, page, perpage);
    console.log(images);

    if (images.length === 0) {
      gallery.innerHTML = null;
      loadMoreBtn.classList.add('is-hidden');
      iziToast.error({
        color: 'yellow',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        timeout: 2000,
      });
    } else {
      displayImages(images);
      loader.classList.add('is-hidden');
      if (images.length <= 14) {
        loadMoreBtn.classList.add('is-hidden');
        theEnd.classList.remove('is-hidden');
      } else {
        loadMoreBtn.classList.remove('is-hidden');
      }
      let lightboxInstance = new SimpleLightbox('.pic-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightboxInstance.refresh();
    }
  } catch (error) {
    console.log('Error caught:', error.message);
    iziToast.error({
      color: 'red',
      message: 'Error while fetching images',
      position: 'center',
      progressBarColor: 'rgb(0, 255, 184)',
      timeout: 2000,
    });
  } finally {
    inputSearch.value = '';
    let lastInput = q.split('+').join(' ');
    inputSearch.placeholder = `Last searched for "${lastInput}"`;
  }
});

// event listener for Load More button
loadMoreBtn.addEventListener('click', async () => {
  loader.classList.remove('is-hidden');
  try {
    page++;
    let images = await fetchImages(lastQuery, page, perpage);

    loader.classList.add('is-hidden');
    displayImages(images);
    const card = document.querySelector('.pic-card');
    let cardLength = card.getBoundingClientRect();

    window.scrollBy({
      top: 2 * cardLength.height,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error('Error while fetching images:', error.message);
  }
});
