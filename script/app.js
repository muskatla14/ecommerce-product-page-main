const largeImage = document.querySelector('.large-img img');
const smallImages = document.querySelectorAll('.small-img img');
const body = document.querySelector('body');




function displayLargeImage() {
    smallImages.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            e.target.classList.toggle('border');
            largeImage.src = `images/image-product-${index + 1}.jpg`
        })
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

    // const thumbnailDiv = document.createElement('div');
    // thumbnailsContainer.appendChild(thumbnailDiv);
    // const thumbnail1 = document.createElement('img');
    // thumbnail1.src = 'images/image-product-1-thumbnail.jpg';
    // thumbnailDiv.appendChild(thumbnail1);
    
    // const thumbnail2 = document.createElement('img');
    // thumbnail2.src = 'images/image-product-2-thumbnail.jpg';
    // lightboxGallery.appendChild(thumbnail2);
    // const thumbnail3 = document.createElement('img');
    // thumbnail3.src = 'images/image-product-3-thumbnail.jpg';
    // lightboxGallery.appendChild(thumbnail3);
    // const thumbnail4 = document.createElement('img');
    // thumbnail4.src = 'images/image-product-4-thumbnail.jpg';
    // lightboxGallery.appendChild(thumbnail4);

    // thumbnailsContainer.appendChild(thumbnail1);
    // thumbnailsContainer.appendChild(thumbnail2);
    // thumbnailsContainer.appendChild(thumbnail3);
    // thumbnailsContainer.appendChild(thumbnail4);


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
    
    thumbnailsArr.forEach(image => {
        const imageDiv = document.createElement('div');
        imageDiv.appendChild(image);
        thumbnailsContainer.appendChild(imageDiv);
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
}

displayLargeImage();
largeImage.addEventListener('click', displayLightboxGallery)