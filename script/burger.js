const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burger.addEventListener('click', () => {
    const closeBtn = document.createElement('img');
    closeBtn.src = './images/icon-close-mobile.svg';
    closeBtn.classList.add('closeBtn');
    closeBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        closeBtn.remove();
    })
    nav.appendChild(closeBtn);
    nav.classList.toggle('active');
})

