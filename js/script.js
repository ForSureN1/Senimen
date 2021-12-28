$('.slider__items').slick({
    autoplay: true,
    arrows: false,
    Infinity: true,
    dots: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
})
document.addEventListener('DOMContentLoaded', () => {

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

})