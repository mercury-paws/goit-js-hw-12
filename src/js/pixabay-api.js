import axios from 'axios';

export async function fetchImages(q, page, perpage) {
  let baseURL = 'https://pixabay.com/api/';
  const response = await axios.get(baseURL, {
    params: {
      key: '42490410-91d7fda5db61c0a899b50e1d9',
      q,
      per_page: perpage,
      page: page,
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  console.log(response.data.total);
  if (response.status !== 200) {
    throw new Error('Image error!');
  }
  const Data = await response.data;
  return Data.hits;
}
