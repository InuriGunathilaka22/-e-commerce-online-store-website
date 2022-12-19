const ProductImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");

let activeImageSlide = 0;

ProductImages.forEach((item, i)=>{
    item.addEventListener('click', () => {
        ProductImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggles size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns [checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})