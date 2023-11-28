// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('appointment_form');
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputMessage = document.getElementById('inputMessage');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        let formElements = [
            {
                element: inputName,
                properties: {
                    value: inputName.value,
                    successLabel: `Hello, ${inputName.value}!`,
                    errorLabel: 'Your name should consist of 2 or more characters',
                    condition: inputName.value.trim().length > 2,
                },
            },
            {
                element: inputEmail,
                properties: {
                    value: inputEmail.value,
                    successLabel: `Your email ${inputEmail.value} was registered`,
                    errorLabel: 'Please enter your email',
                    condition: !!inputEmail.value,
                },
            },
            {
                element: inputMessage,
                properties: {
                    value: inputMessage.value,
                    successLabel: 'We received your message',
                    errorLabel: 'Your message should contain at least 3 words',
                    condition: inputMessage.value.trim().split(' ').length > 2,
                },
            },
        ];

        const resetClass = (element) => {
            let classes = [...element.classList];

            for (let className of classes) {
                if (className !== 'form__grid-content') {
                    element.classList.remove(className);
                }
            }
        };

        const handleSuccess = (element, label = '') => {
            element.querySelector('.formResult').textContent = label;
            element.classList.add('success');
        };

        const handleError = (element, label = '') => {
            element.querySelector('.formResult').textContent = label;
            element.classList.add('error');
        };

        const validateElement = (item) => {
            const { element, properties } = item;
            let elementWrapper = element.parentElement;
            resetClass(elementWrapper);
            if (properties.condition) {
                handleSuccess(elementWrapper, properties.successLabel);
            } else {
                handleError(elementWrapper, properties.errorLabel);
            }
        };

        formElements.forEach((item) => validateElement(item));
    }

    const initMySlider = () => {
        const width = 330;
        const slidesPerView = 3;
        let position = 0;
        const slidesList = document.querySelector('.my-carousel__list');
        const slides = document.querySelectorAll('.my-carousel__item');
        const nextButton = document.querySelector('.my-carousel .arrow--next');
        const prevButton = document.querySelector('.my-carousel .arrow--prev');

        nextButton.addEventListener('click', nextClicked);
        prevButton.addEventListener('click', prevClicked);

        function nextClicked() {
            position -= width * slidesPerView;
            position = Math.max(position, -width * (slides.length - slidesPerView));
            slidesList.style.marginLeft = position + 'px';
        }

        function prevClicked() {
            position += width * slidesPerView;
            position = Math.min(position, 0);
            slidesList.style.marginLeft = position + 'px';
        }
    }

    initMySlider();

    var mySwiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
        //Local Storage
        // Обработчик события смены слайда
        on: {
            slideChange: function () {
                localStorage.setItem('currentSlide', mySwiper.activeIndex);
            }
        }               
    });

    let savedSlide = localStorage.getItem('currentSlide');

    if (savedSlide) {
        mySwiper.slideTo(savedSlide);
    }

    // Обработчик события изменения размера окна
    window.addEventListener("resize", function () {
        mySwiper.update(); // Обновление слайдера
    });


    //Cookies
    const setCookie = (name, value, daysToExpire) => {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        const expirationDate = date.toUTCString();
        document.cookie = `${name}=${value}; expires=${expirationDate}`
      }
      
      const getCookie = (name) => {
        const cookies = document.cookie.split(';') 
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim() 
          if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1) 
          }
        }
        return null 
      }
      
      const checkCookie = () => {
        let user = getCookie("userData");
        if (user !== null && user !== "") {
            alert("Welcome again " + user.split(' ')[0]);
        } else {
            user = prompt("Please enter your username and password separated by a space:", "");
            if (user !== "" && user !== null) {
                setCookie("userData", user, 365);
            }
        }
    }

      checkCookie();  
    

    //Session Storage
    const setSessionStorage = () => {
        let currentDate = new Date();
        let dateString = currentDate.toUTCString();

        sessionStorage.setItem('accessDate', dateString);

        let storedTime = sessionStorage.getItem('accessDate');
        console.log("The time when user accessed our site: " + storedTime);
    }

    setSessionStorage();
});
