document.addEventListener("DOMContentLoaded", function () {

	// mediaQuery
    const mediaQuery = window.matchMedia("(max-width: 48em)").matches;
    
// 1. Mainslider
var categorySlider = new Swiper('.main__swiper-container', {

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },

      navigation: {
    	prevEl: '.main__swiper-button-prev',
    	nextEl: '.main__swiper-button-next',
  	},

  	breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   // slidesPerView: 1,
    //   //spaceBetween: 40
    // },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 73,
    },
  },


}); // end Mainslider


// Links

$('.main__bottom--item--default').addClass('active')

$('.main__bottom--item').click(function(){
  $('.main__bottom--item').removeClass('active')
  $(this).addClass('active');
  
});



// nav
    let nav = document.querySelector('.nav')
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function () {
        this.classList.toggle('active')
        nav.classList.toggle('active')
        toggleScroll('body', false)
    });

// no scroll body
    function toggleScroll(el, bullet) {
        let element = document.querySelector(el)
        if (bullet) {
            element.style.overflow = 'hidden'
            return;
        }
        if (element.style.overflow == 'hidden') {
            element.style.overflow = 'visible'
        } else {
            element.style.overflow = 'hidden'
        }
    };













    
})