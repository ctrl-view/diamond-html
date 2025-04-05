document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.slider-button-item');
    const prevBtn = document.querySelector('.slider-arrow-item.prev');
    const nextBtn = document.querySelector('.slider-arrow-item.next');
    
    let currentSlide = 0;

    // Показываем первый слайд
    showSlide(currentSlide);

    // Функция показа слайда
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('slider-arrow-item-active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('slider-arrow-item-active');
        
        // Обновляем состояние стрелок
        // prevBtn.disabled = currentSlide === 0;
        // nextBtn.disabled = currentSlide === slides.length - 1;
    }

    // Обработчики для точек
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Обработчики для стрелок
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    });
