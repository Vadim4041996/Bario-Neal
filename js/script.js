// Строгий режим
"use strict"


// Swiper Initialization

// swiperSlider
const swiperSlider = new Swiper('.slider__swiper', {
    // Optional parameters
    loop: true,
    speed: 1000,
    grabCursor: true,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: { 
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev',
    },
});





// Dynamic Change Footer 
const smallDevice = window.matchMedia("(max-width: 991px)")
smallDevice.addListener(handleDeviceChange)

function handleDeviceChange(e) {
    const threeColumns = document.querySelector('.footer__three-columns')
    const dynamicElements = document.querySelectorAll('.footer__column-inner--dynamic-el')
    if(e.matches) {
        if(dynamicElements.length) {
            dynamicElements.forEach(dynamicElement => {
                threeColumns.insertAdjacentElement('beforeend', dynamicElement)
            })
        }
    } else {
        if(dynamicElements.length) {
            dynamicElements.forEach(dynamicElement => {
                document.querySelector('.footer__two-columns').insertAdjacentElement('beforeend', dynamicElement)
            })
        }
    }
}

// Run it initially
handleDeviceChange(smallDevice)

    // const windowWidth = window.innerWidth
    // console.log(windowWidth)
    // if(windowWidth < 992) {
    //     const threeColumns = document.querySelector('.footer__three-columns')
    //     const dynamicElements = document.querySelectorAll('.footer__column-inner--dynamic-el')
    //     if(dynamicElements.length) {
    //         dynamicElements.forEach(dynamicElement => {
    //             threeColumns.insertAdjacentElement('beforeend', dynamicElement)
    //         });
    //     }
    // }
