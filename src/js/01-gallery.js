// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

const render = galleryItems.map(item => `<div class="gallery__item">
<a class:"gallery__link" href="${item.original}">
<img class: "gallery__image" src="${item.preview}"
data-source="${item.original}"
alt= "${item.description}"/></a></div>`).join("");

const galleryBox = document.querySelector('.gallery');

galleryBox.insertAdjacentHTML("beforeend", render);

galleryBox.addEventListener("click", e => {
    e.preventDefault();

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    })
})
