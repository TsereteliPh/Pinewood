const header = document.querySelector('.header');
const burgerBtn = header.querySelector('.header__button');
const burgerBtnDesc = header.querySelector('.js-btn-info');
const popup = header.querySelector('.header__popup');
const menu = header.querySelector('.nav__list').cloneNode(1);

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__button--cross');
    popup.classList.toggle('header__popup--active');
    popup.append(menu);

    if(popup.classList.contains('header__popup--active')) {
        burgerBtnDesc.textContent = 'Закрыть меню';
    } else {
        burgerBtnDesc.textContent = 'Открыть меню';
    }
})


// import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 744){
        const processSlider = new Swiper('.process__wrapper', {
            scrollbar: {
                el: '.process__scrollbar',
                draggable: true,
            },
            spaceBetween: 20  
        })
    }
})

const projectsSwiper = new Swiper('.projects__wrapper', {
    navigation: {
        nextEl: '.projects__right-btn',
        prevEl: '.projects__left-btn',
    },
    loop: true,
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 45
        },
        1920: {
            spaceBetween: 60
        }
    }
})

const servicesSwiper = new Swiper('.services__wrapper', {
    navigation: {
        nextEl: '.services__right-btn',
        prevEl: '.services__left-btn',
    },
    loop: true,
    slidesPerView: 'auto',
    breakpoints: {
        320: {
            spaceBetween: 75
        },
        1400: {
            spaceBetween: 30
        },
        1920: {
            spaceBetween: 60
        }
    }
})

