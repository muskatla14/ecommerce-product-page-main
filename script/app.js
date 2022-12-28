const cartIconHeader = document.querySelector('.cart-icon-header');
const modal = document.querySelector('.modal');

const largeImage = document.querySelector('.large-img img');
const smallImages = document.querySelectorAll('.small-img img');
const body = document.querySelector('body');

const price = document.querySelector('.price');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const quantity = document.querySelector('.quantity');
let current = parseInt(quantity.innerHTML);


// Cart
cartIconHeader.addEventListener('click', () => {
    modal.style.display = 'flex';
})


  document.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    if(!e.target.parentElement.classList.contains('modal') && e.target != cartIconHeader) {
        modal.style.display = 'none';
    }
  })



// Add quantity
increaseBtn.addEventListener('click', () => {
    current++;
    quantity.innerHTML = current;
});

decreaseBtn.addEventListener('click', () => {
    current--;

    if (current < 0) {
        current = 0
    }

    quantity.innerHTML = current;
});


function addItemtoCart(image, price, title) {
    
}




function displayLargeImage() {
    smallImages.forEach((element, index) => {
        element.addEventListener('click', () => {
            largeImage.src = `images/image-product-${index + 1}.jpg`
        })
        element.parentElement.addEventListener('focus', (event) => {
            console.log(event.target)
            event.target.style.borderRadius = '10px';
            event.target.style.border = '4px solid hsl(26, 100%, 55%)';
            // event.target.style.filter = 'opacity(0.20)'; 
        }, true)
        element.parentElement.addEventListener('blur', (event) => {
            // event.target.style.filter = 'none';
            event.target.style.border = 'none';
        }, true)
    })
}


function displayLightboxGallery() {
    // Create overlay div
    const lightboxContainer = document.createElement('div');

    // Append overlay to body
    body.appendChild(lightboxContainer);

    // Add class to overlay div
    lightboxContainer.classList.add('overlay');

    //  Create lightbox gallery div
    const lightboxGallery = document.createElement('div');

    // Append gallery to body div
    body.appendChild(lightboxGallery);

    // Add class to gallery div
    lightboxGallery.classList.add('lightbox');
    lightboxGallery.style.zIndex = 1;

    // Create close btn
    const closeBtn = document.createElement('img');
    closeBtn.src = 'images/icon-close.svg';
    closeBtn.classList.add('closeBtn');
    lightboxGallery.appendChild(closeBtn);
    closeBtn.addEventListener('click', () => {
        lightboxContainer.style.display = 'none';
        lightboxGallery.style.display = 'none';
    })

    // Create large image element
    const largeImageLightBox = document.createElement('img');
    largeImageLightBox.src = 'images/image-product-1.jpg';
    largeImageLightBox.classList.add('large-img');


    // Append large image to gallery
    lightboxGallery.appendChild(largeImageLightBox);


    const thumbnailsContainer = document.createElement('div');
    thumbnailsContainer.classList.add('thumbnailsContainer');

    lightboxGallery.appendChild(thumbnailsContainer);



    // Version2
    const thumbnail1 = document.createElement('img');
    thumbnail1.src = 'images/image-product-1-thumbnail.jpg';
    const thumbnail2 = document.createElement('img');
    thumbnail2.src = 'images/image-product-2-thumbnail.jpg';
    const thumbnail3 = document.createElement('img');
    thumbnail3.src = 'images/image-product-3-thumbnail.jpg';
    const thumbnail4 = document.createElement('img');
    thumbnail4.src = 'images/image-product-4-thumbnail.jpg';


    const thumbnailsArr = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

    console.log(thumbnailsArr);

    thumbnailsArr.forEach((element, index) => {
        element.style.cursor = 'pointer';
        const imageDiv = document.createElement('div');
        element.setAttribute("tabindex", "1")
        imageDiv.appendChild(element);
        thumbnailsContainer.appendChild(imageDiv);
        element.addEventListener('click', (e) => {
            largeImageLightBox.src = `images/image-product-${index + 1}.jpg`
        })
        element.parentElement.addEventListener('focus', (event) => {
            console.log(event.target)
            event.target.style.borderRadius = '10px';
            event.target.style.border = '4px solid hsl(26, 100%, 55%)';
            // event.target.style.filter = 'opacity(0.20)'; 
        }, true)
        element.parentElement.addEventListener('blur', (event) => {
            // event.target.style.filter = 'none';
            event.target.style.border = 'none';
        }, true)
    });

    // Icon next and previous
    const next = document.createElement('img');
    next.src = 'images/icon-next.svg';
    next.classList.add('nextBtn');
    const previous = document.createElement('img');
    previous.src = 'images/icon-previous.svg';
    previous.classList.add('previousBtn');
    lightboxGallery.appendChild(next);
    lightboxGallery.appendChild(previous);



    // Slider
    const slideImages = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];

    let i = 0;

    function prev() {
        if (i <= 0) i = slideImages.length;
        i--;
        return setImg();
    }

    function nextImg() {
        if (i >= slideImages.length - 1) i = -1;
        i++;

        return setImg();
    }


    function setImg() {
        return largeImageLightBox.setAttribute('src', 'images/' + slideImages[i])
    }

    previous.addEventListener('click', prev);
    next.addEventListener('click', nextImg);
}


displayLargeImage();
largeImage.addEventListener('click', displayLightboxGallery)