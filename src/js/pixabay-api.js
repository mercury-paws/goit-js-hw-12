import axios from 'axios';

export async function fetchImages(q) {
  let baseURL = 'https://pixabay.com/api/';
  const response = await axios.get(baseURL, {
    params: {
      key: '42490410-91d7fda5db61c0a899b50e1d9',
      q,
      per_page: 15,
      // page: 1,
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  if (response.status !== 200) {
    throw new Error('Image error!');
  }
  const Data = await response.data;
  return Data.hits;
}
