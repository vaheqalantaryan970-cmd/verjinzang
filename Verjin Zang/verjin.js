let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Ֆունկցիա՝ կոճակներով թերթելու համար
function changeSlide(direction) {
    updateSlider(currentSlide + direction);
}

// Ֆունկցիա՝ կետիկին սեղմելիս համապատասխան նկարին անցնելու համար
function currentDot(index) {
    updateSlider(index);
}

// Հիմնական ֆունկցիան, որը կատարում է փոփոխությունը
function updateSlider(index) {
    // Հեռացնում ենք ակտիվ դասերը ընթացիկ նկարից և կետիկից
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    // Ստուգում ենք սահմանները (եթե 5-ից անցնի կամ 0-ից հետ գնա)
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    // Ավելացնում ենք ակտիվ դասը նոր նկարին և կետիկին
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}