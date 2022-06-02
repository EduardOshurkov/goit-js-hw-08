// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");

function galleryLightBox() {
    const galleryImages = galleryItems.map(
        ({ preview, original, description }) =>
            `<li class="gallery__item" style="list-style: none;">
            <a href="${original}"><img src="${preview}" alt="${description}" title="${description}"/></a>
            </li>`
    ).join("")

    gallery.insertAdjacentHTML("afterbegin", galleryImages)
}

galleryLightBox();

new SimpleLightbox('.gallery a', { captionDelay: 250, });

// document.addEventListener("DOMContentLoaded", galleryLightBox);

// const onClickOpenImages = (event) => {
//     if (event.target.nodeName !== "IMG") {
//         return;
//     }


//     event.preventDefault();

//     const imageLink = event.target.dataset.source;

//     instance
//         .element()
//         .querySelector('img')
//         .setAttribute("src", imageLink)
    
//     instance.show();
// };

// gallery.addEventListener("click", onClickOpenImages);

// const instance = basicLightbox.create(`<img src="" width="800" height="600">`, {
//   closable: true,
//   onShow: () => {
//     document.addEventListener("keydown", closeByEscape);
//   },
//   onClose: (instance) => {
//     instance.element().querySelector("img").setAttribute("src", "");

//     document.removeEventListener("keydown", closeByEscape);
//   },
// }); 

// function closeByEscape(event) {
//   if (event.code === "Escape") {
//     if (instance.visible()) {
//       instance.close();
//     }
//   }
// }