const cartIconHeader = document.querySelector('.cart-icon-header');
const modal = document.querySelector('.modal');
const largeImage = document.querySelector('#defaultImage');
const smallImages = document.querySelectorAll('.small-img img');
const body = document.querySelector('body');
const price = document.querySelector('.price');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const quantity = document.querySelector('.quantity');
let current = parseInt(quantity.innerHTML);
const addButton = document.getElementById('addBtn');
const previousBtnMobile = document.querySelector('.previousBtnMobile');
const nextBtnMobile = document.querySelector('.nextBtnMobile');


// Cart
cartIconHeader.addEventListener('click', () => {
    modal.style.display = 'flex';
})

  document.addEventListener('click', (e) => {
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

function displayQuantityOnCart(quant){
    const cart = document.querySelector('.cart-img-div');
    cart.style.position = 'relative';
    const smallNum = document.createElement('small');
    smallNum.classList.add('small-icon');
    cart.appendChild(smallNum);
    smallNum.position = 'absolute';
    smallNum.innerHTML = quant;
}

function addItemToCart() {
    const currentPrice = parseInt((price.textContent).substring(1));
    const currentQuantity = parseInt(quantity.textContent);
    const total = currentPrice * currentQuantity;

    if(currentQuantity !== 0) {
        document.querySelector('.empty').style.display = 'none';
        const modalMain = document.createElement('div');
        modalMain.classList.add('modal-main');
        modal.appendChild(modalMain);
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('modal-img')
        const img = document.createElement('img');
        img.src = 'images/image-product-1-thumbnail.jpg';
        imgDiv.appendChild(img);
        modalMain.appendChild(imgDiv);
        const divProduct = document.createElement('div');
        divProduct.classList.add('product');
        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');
        modalMain.appendChild(divProduct);
        divProduct.appendChild(divProductInfo);
        const modalProductName = document.createElement('p');
        modalProductName.innerHTML = document.querySelector('.main-product-name').textContent;
        divProductInfo.appendChild(modalProductName);
        const pTotal = document.createElement('p');
        pTotal.classList.add('total');
        pTotal.innerHTML = `$${currentPrice.toFixed(2)}  x  ${currentQuantity}`;
        const totalModal = document.createElement('strong');
        totalModal.innerText = ` $${total.toFixed(2)}`;
        pTotal.appendChild(totalModal);
        divProductInfo.appendChild(pTotal);
        const divDeleteItemModal = document.createElement('div');
        divDeleteItemModal.classList.add('delete');
        modalMain.appendChild(divDeleteItemModal);
        modalMain.classList.remove('empty');
        const deleteItemImg = document.createElement('img');
        deleteItemImg.src = 'images/icon-delete.svg';
        divDeleteItemModal.appendChild(deleteItemImg);
        const divCheckout = document.createElement('div');
        divCheckout.classList.add('checkout');
        const checkoutButton = document.createElement('button');
        checkoutButton.innerHTML = 'Checkout';
        checkoutButton.classList.add('btn-primary');
        divCheckout.appendChild(checkoutButton);
        modal.appendChild(divCheckout);

        if(deleteItemImg) {
            deleteItemImg.addEventListener('click', function(e) {
                let trash = e.target;
                trash.parentElement.parentElement.remove();
                divCheckout.remove();
                document.querySelector('.empty').style.display = 'flex';
                document.querySelector('.small-icon').remove();
                
            })
        }

        displayQuantityOnCart(currentQuantity);
    } 
}

addButton.addEventListener('click', addItemToCart);

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


    const thumbnail1 = document.createElement('img');
    thumbnail1.src = 'images/image-product-1-thumbnail.jpg';
    const thumbnail2 = document.createElement('img');
    thumbnail2.src = 'images/image-product-2-thumbnail.jpg';
    const thumbnail3 = document.createElement('img');
    thumbnail3.src = 'images/image-product-3-thumbnail.jpg';
    const thumbnail4 = document.createElement('img');
    thumbnail4.src = 'images/image-product-4-thumbnail.jpg';

    const thumbnailsArr = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

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
        }, true)
        element.parentElement.addEventListener('blur', (event) => {
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

    // Slider Desktop
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
        return largeImageLightBox.setAttribute('src', 'images/' + slideImages[i]);
        
    }


    // Slider Mobile
    function prevMobile() {
        if (i <= 0) i = slideImages.length;
        i--;
        return setImgMobile();
    }

    function nextImgMobile() {
        if (i >= slideImages.length - 1) i = -1;
        i++;
        return setImgMobile();
    }

    function setImgMobile() {
        return document.querySelector('#defaultImageMobile').setAttribute('src', 'images/' + slideImages[i]);

    }

    previous.addEventListener('click', prev);
    next.addEventListener('click', nextImg);
    previousBtnMobile.addEventListener('click', prevMobile);
    nextBtnMobile.addEventListener('click', nextImgMobile);
    
}

displayLargeImage();
largeImage.addEventListener('click', displayLightboxGallery)





