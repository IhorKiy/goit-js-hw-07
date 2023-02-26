import { galleryItems } from "./gallery-items.js";

const refElemGalery = document.querySelector('.gallery');
const addCreateList = createList(galleryItems);
refElemGalery.insertAdjacentHTML('beforeend', addCreateList);

function createList(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function createModal(evt) {
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
  `);
  instance.show();

  const closeModal = (evt) => {
    if (evt.code === "Escape") {
      instance.close();
      refElemGalery.removeEventListener('keydown', closeModal);
    }
  };

  refElemGalery.addEventListener('keydown', closeModal);
}

refElemGalery.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    createModal(evt);
  }
});



