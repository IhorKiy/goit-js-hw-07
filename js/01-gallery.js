import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refElemGalery = document.querySelector('.gallery');
refElemGalery.addEventListener('click', onContainerGalleryClick )
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
  };

function onContainerGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
  instance.show()
//////Close modal////////////////
  refElemGalery.addEventListener('keydown', (evt) => {
  if (evt.code === "Escape") {
    instance.close();
  }
});
}




