export function fetchImages(query) {
  const KEY = '42490410-91d7fda5db61c0a899b50e1d9';
  const BASE_URL = 'https://pixabay.com/api/';
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = true;
  const LINK = `${BASE_URL}?key=${KEY}&q=${query}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
  return fetch(LINK).then(response => {
    if (!response.ok) {
      throw new Error('Image error!');
    }
    return response.json();
  });
}
