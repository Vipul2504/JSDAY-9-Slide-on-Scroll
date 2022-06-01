function debounce(func, wait = 20, immediate = true){
    var timeout;
    return function() {
        var context = this , args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate ) func.apply(context, args);
        }
        var callnow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callnow) func.apply(context, args);
    }
}

const sliderImage = document.querySelectorAll('.slide-in');

function checkSlide() {
    sliderImage.forEach(sliderImage => {
        const Slideint = (window.scrollY + window.innerHeight);
        sliderImage.height / 2;

        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfDown = Slideint > sliderImage.offsetTop;
        const isNotScrollPassed = window.scrollY < imageBottom;
        if(isHalfDown && isNotScrollPassed) {
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');

        }

    })
}

window.addEventListener('scroll', debounce(checkSlide))