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

searchButton.addEventListener('click', () => {
  const query = inputSearch.value.trim().split(' ').join('+');
  if (!query) {
    iziToast.error({
      color: 'red',
      message: 'Please fill in the querry, what are you looking for?',
      position: 'center',
      progressBarColor: 'rgb(0, 255, 184)',
      timeout: 2000,
    });
    return;
  }
  gallery.innerHTML = '<span class="loader"></span>';
  fetchImages(query)
    .then(data => {
      const images = data.hits;
      if (images.length === 0) {
        iziToast.error({
          color: 'yellow',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          progressBarColor: 'rgb(0, 255, 184)',
          timeout: 2000,
        });
      }
      displayImages(images);
      let lightboxInstance = new SimpleLightbox('.pic-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightboxInstance.refresh();
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        message: 'Error while fetching images',
        position: 'center',
        progressBarColor: 'rgb(0, 255, 184)',
        timeout: 2000,
      });
    })
    .finally(() => {
      inputSearch.value = '';
      let lastQuery = query.split('+').join(' ');
      inputSearch.placeholder = `Last searched for "${lastQuery}"`;
    });
});
