
function displayLargeImage() {
    const largeImage = document.querySelector('.large-img img');
    const smallImages = document.querySelectorAll('.small-img img');

    smallImages.forEach((element, index) => {
        element.addEventListener('click', () => {
            largeImage.src = `images/image-product-${index + 1}.jpg`
        })
    })
}


displayLargeImage();