import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refElemGalery = document.querySelector(".gallery");
const addCreateList = createList(galleryItems);
refElemGalery.insertAdjacentHTML("beforeend", addCreateList);
refElemGalery.addEventListener("click", onContainerGalleryClick);

function createList(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><div class="gallery">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div></li>`;
    })
    .join("");
}

function onContainerGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  instance.show();
  //////Close modal////////////////
  refElemGalery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
