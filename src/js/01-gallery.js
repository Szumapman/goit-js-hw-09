import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";
import { initImages } from "./create-gallery";

document.querySelector("ul.gallery").appendChild(initImages(images));