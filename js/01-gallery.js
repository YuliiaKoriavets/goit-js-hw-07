import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryItemsEl = galleryItems.map(
  ({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }
);

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsEl.join(""));

galleryEl.addEventListener("click", handleClickImg);

function handleClickImg(event) {
  event.preventDefault();

  if (event.target.nodeName !== `IMG`) {
    return;
  }
  const bannerSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
	<img class="gallery__image"
      src="${bannerSource}"
      width="750"
      height="450" />
`);
  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
