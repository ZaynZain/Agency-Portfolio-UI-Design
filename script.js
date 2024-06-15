document.querySelector('.logo').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

    document.addEventListener('DOMContentLoaded', function() {
        var swiper = new Swiper('.sliderSwiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 40
                }
            }
        });
    });
