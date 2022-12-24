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


const phoneInput = document.querySelectorAll('.js-phone-input');
phoneInput.forEach(input => {
    input.onfocus = () => {
        if (input.value === '') {
            input.value = '+';
        }
    }
});

const modal = document.querySelector('.modal');
const modalForm = modal.querySelector('.modal__form');
const modalOpenBtn = document.querySelectorAll('.js-modal-open');
const modalCloseBtn = modal.querySelector('.js-modal-close');
const modalSubmitBtn = modal.querySelector('.modal__button');

const bodyLock = () => {
    document.body.style.overflow = 'hidden';
}

const bodyUnlock = () => {
    document.body.style.overflow = 'visible';
}

const modalToggler = () => {
    if (modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        bodyUnlock();
    } else {
        modal.classList.add('modal--active');
        bodyLock();
    }
}

modalOpenBtn.forEach(button => {
    button.addEventListener('click', () => {
        modalToggler();
    }) 
});

modalCloseBtn.addEventListener('click', () => {
    modalToggler();
})

modalSubmitBtn.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (modalForm.checkValidity()) {
        modalToggler();
    }
})
const form = document.querySelector('.quiz__form');
const questions = form.querySelectorAll('.js-quiz-question');
const lastQuestion = form.querySelector('.form__last');
const quizSuccess = form.querySelector('.js-quiz-success');
const quizAlert = form.querySelector('.form__invalid');
const quizNext = form.querySelector('.form__next-btn');
const quizPrev = form.querySelector('.form__back-btn');
const quizSubmit = form.querySelector('.form__submit-btn');
const quizReset = form.querySelector('.form__reset-btn');

let questionCounter = 0;
let quizSend = false;

const currentQuestion = (n) => {
    for (question of questions) {
        question.classList.remove('js-quiz-active');
    }
    if (quizSend) {
        quizSuccess.classList.add('js-quiz-active');
        quizNext.style.display = 'none';
        quizPrev.style.display = 'none';
        quizReset.style.display = 'block';
    } else {
        quizNext.style.display = 'flex';
        quizPrev.style.display = 'flex';
        quizReset.style.display = 'none';
        quizSuccess.classList.remove('js-quiz-active');
        questions[n].classList.add('js-quiz-active');
        btnHider();
    }
}

const btnHider = () => {
    if (lastQuestion.classList.contains('js-quiz-active')) {
        quizNext.style.display = 'none';
    } else {
        quizNext.style.display = 'flex';
    }
}

const nextQuestion = () => {
    if (questionCounter === questions.length - 1) {
        return
    } else {
        questionCounter++;
        currentQuestion(questionCounter);
    }
}

const prevQuestion = () => {
    if (questionCounter === 0) {
        return
    } else {
        questionCounter--;
        currentQuestion(questionCounter);
    }
}

quizNext.addEventListener('click', nextQuestion);

quizPrev.addEventListener('click', prevQuestion);

quizSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (form.checkValidity()) {
        quizSend = true;
        currentQuestion();
    } else {
        quizAlert.style.display = 'block';
    }
})

quizReset.addEventListener('click', () => {
    quizSend = false;
    currentQuestion(0);
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
    loop: false,
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

