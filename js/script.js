$('.slider__items').slick({
    autoplay: true,
    arrows: false,
    Infinity: true,
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})

$('.news__slider').slick({
    autoplay: true,
    arrows: true,
    fade: true,
    Infinity: true,
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M10 1L1 9.5L10 18"stroke = "white"stroke - linecap = "round"stroke - linejoin = "round" / ></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L10 9.5L1 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
})

$('.reviews__slider-photo').slick({
    autoplay: true,
    arrows: true,
    dots: false,
    Infinity: true,
    speed: 1500,
    autoplaySpeed: 3000,
    asNavFor: ".reviews__slider-info",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><img src="img/svg/paggleft.svg"></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"><img src="img/svg/paggright.svg"></button>',
})

$('.reviews__slider-info').slick({
    autoplay: false,
    arrows: false,
    dots: false,
    asNavFor: ".reviews__slider-photo",
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
})

document.addEventListener('DOMContentLoaded', () => {

    let hamb = document.querySelector('.hamb')
    let hambbtn = document.getElementById('nav-icon3')
    let headerMenu = document.querySelector('.menu')

    hamb.addEventListener('click', function() {
        hambbtn.classList.toggle('open')
        hamb.classList.toggle('active')
        if (hamb.classList.contains('active')) {
            $('.menu').slideDown();
        }
        if (!hamb.classList.contains('active')) {
            $('.menu').slideUp();
        }
    });

    $('.js-slide').on("click", function(e) {
        const target = e.target
        if (target.classList.contains('active')) {
            $(target.nextElementSibling).slideUp();
            target.classList.remove('active')
        } else {
            $(target.nextElementSibling).slideDown();
            target.classList.add('active')
        }
    });

    //search header
    let search_btn = document.querySelector('.search__sbm')
    let search_txt = document.querySelector('.search__txt')
    let language_block = document.querySelector('.header__lang')
    if (search_btn) {
        search_btn.addEventListener('click', userShowInput)
    }

    function userShowInput(e) {
        e.target.classList.toggle('active')
        search_txt.classList.toggle('active')
        language_block.classList.toggle('hidden')
        if (search_txt.value === "") {
            e.preventDefault();
        }
    }

    //padding for header_bg
    let header_bg = document.querySelector('.header__bg')
    window.addEventListener('resize', autoPaddingHeader)
    if (header_bg) {
        function autoPaddingHeader() {
            header_bg.style.paddingTop = document.querySelector('.header').offsetHeight + 'px'
        }
        autoPaddingHeader();
    }


    //Add Class Header Before Scrolling

    window.addEventListener('scroll', addClassHeader)

    let header = document.querySelector('.header')

    function addClassHeader() {
        if (window.pageYOffset > header.offsetHeight / 2) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    addClassHeader();

    //Tabs internet
    let listinner = document.querySelector('.internet__tabs')

    if (listinner) {
        productTabs();
        productItemTabs();
    }

    function productTabs() {
        let btn = document.querySelectorAll('.internet__tab');
        let block = document.querySelectorAll('.internet__content-item')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }

    function productItemTabs() {
        let list = document.querySelector('.internet__tabs')
        let items = document.querySelectorAll('.internet__tab')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('internet__tab')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }

    //UP footer
    let up = document.querySelector('.up')
    if (up) {
        up.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })
    }

    let formAppSbm = document.querySelector('.js-application-submit')
    let formApp = document.querySelector('.js-form-application')
    let validateSelect = document.querySelector('.js-select-application')
    if (formAppSbm) {
        formAppSbm.addEventListener('click', validate)
        formApp.addEventListener('input', checkValidate)
    }
    if (validateSelect) {
        validateSelect.addEventListener('input', () => {
            if (validateSelect.classList.contains('err')) {
                validateSelect.classList.remove('err')
            }
        })
    }

    function checkValidate(e) {
        let errField = e.target.parentNode.querySelector('.reqField')
        if (errField) {
            errField.classList.remove('active')
        }
    }

    function validate(e) {
        // get all the inputs that have the validate class in it
        // this requires the input to have a class name valled validate
        let validateElements = document.querySelectorAll('.js-required');


        // Get all the inputs 
        // This code is required because the output from 'document.getElementsByClassName' is not fit to the current needs
        // console.log("validateElements",validateElements); // Uncomment this line if you want to see what i mean
        let inputs = Array.prototype.filter.call(validateElements, function(element) {
            return element.nodeName === 'INPUT';
        });

        // Loop through the inputs to be validated

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            if (input.value.length == 0) {
                // generic placeholder
                // error class 
                input.classList.add("err");
                // focus on the input [ optional ]
                input.focus();
                // break the loop [ optional ]
                // e.target.nextElementSibling.classList.add('active')
                // console.log(input.nextElementSibling)
                input.nextElementSibling.classList.add('active')
                    // console.log(input.parentNode)
                e.preventDefault();
                break;
            }
        }
        if (validateSelect) {
            if (validateSelect.value == "disabled") {
                validateSelect.classList.add("err");
                // console.log(validateSelect.value)
                e.preventDefault();
            }
        }
    }


    //Tabs lessons

    //Tabs internet
    let lesson = document.querySelector('.lesson__training-list')

    if (lesson) {
        lessonTabs();
        lessonItemTabs();
    }

    function lessonTabs() {
        let btn = document.querySelectorAll('.training-list__item');
        let block = document.querySelectorAll('.lesson__box')
        btn.forEach((key, index, array) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                })
            })
        })
    }

    function lessonItemTabs() {
        let list = document.querySelector('.lesson__training-list')
        let items = document.querySelectorAll('.training-list__item')
        list.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('training-list__item')) {
                // console.log(target)
                items.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        })
    }



})