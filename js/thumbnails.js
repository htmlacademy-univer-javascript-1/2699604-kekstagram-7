const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const picture = pictureTemplate.cloneNode(true);
    const image = picture.querySelector('.picture__img');

    image.src = photo.url;
    image.alt = photo.description;

    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;

    fragment.appendChild(picture);
  });

  picturesContainer.appendChild(fragment);
};

export { renderThumbnails };
