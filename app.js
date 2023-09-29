const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');

const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount-1) * 100}vh`; // Перелистывание боковой панели в обратном порядке 
 
upBtn.addEventListener('click', () => {
    changeSlade('up')
});

downBtn.addEventListener('click', () => {
    changeSlade('down')
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlade('up');
    } else if (event.key === 'ArrowDown') {
        changeSlade('down');
    } 
})

function changeSlade (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }
    const container = document.querySelector('.container');
    const height = container.clientHeight;
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}