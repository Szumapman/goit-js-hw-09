const createImage = ({ preview: small, original: large, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery-item");

    li.innerHTML =
        `<a class="gallery-link" href="${large}">
		    <img 
                class="gallery-image" 
                src="${small}" 
                alt="${description}" 
            />
	    </a>`;
    
    return li;
};

export const initImages = (images) => {
    const imgs = images.map(createImage);

    const fragment = document.createDocumentFragment();
    fragment.append(...imgs);
    return fragment;
}
