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
            header_bg.style.height = document.querySelector('.header').offsetHeight + 'px'
        }
        autoPaddingHeader();
    }


})