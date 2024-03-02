import axios from 'axios';

export function fetchImages(q) {
  let baseURL = 'https://pixabay.com/api/';
  return axios
    .get(baseURL, {
      params: {
        key: '42490410-91d7fda5db61c0a899b50e1d9',
        q,
        // per_page: 15,
        // page: 1,
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response.data);
      if (response.status !== 200) {
        throw new Error('Image error!');
      }
      const Data = response.data;
      return Data;
    });
}

// https://pixabay.com/api/?key=42490410-91d7fda5db61c0a899b50e1d9&q=fox&orientation=horizontal&safesearch=true
// https://pixabay.com/api/?KEY=42490410-91d7fda5db61c0a899b50e1d9&q=fox&ORIENTATION=horizontal&SAFESEARCH=true

// https://pixabay.com/api/?KEY=42490410-91d7fda5db61c0a899b50e1d9&ORIENTATION=horizontal&SAFESEARCH=true&query=fox
