export function displayImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => {
        return `<div class="pic-card">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}" />
          </a>
          <div class="pic-info">
            <div class="info"><p class="label">Likes</p> <p class="info-label">${likes}</p></div>
            <div class="info"><p class="label">Views</p> <p class="info-label">${views}</p></div>
            <div class="info"><p class="label">Comments</p> <p class="info-label">${comments}</p></div>
            <div class="info"><p class="label">Downloads</p> <p class="info-label">${downloads}</p></div>
          </div>
        </div>`;
      }
    )
    .join('');
}
