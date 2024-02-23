/* Swiper
**************************************************************/
var swiper = Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
    let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper(".facilities__slider", {
              spaceBetween: 30,
              loop: true,
              speed: 1000,
              pagination: {
                el: '.swiper-pagination',
              },
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                },
               breakpoints: {
                320: {
                  slidesPerView: 1,
                },
              },
            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});

  const homeRoomsSwiper = new Swiper(".homerooms__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
    },
  });

  const menuSwiper = new Swiper(".menu__sliderMenu", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: "#backArrow",
      prevEl: "#forwardArrow",
    },
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      1000: {
          slidesPerView: 2,
      },
    },
  });

  
  const menuPicsSwiper = new Swiper(".menu__sliderPics", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1000:{
        slidesPerView: 3,
      }
    },
  });

  const counterSwiper = new Swiper(".counter__slide", {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000:{
        slidesPerView: 2,
      }
    },
  });
  

  /*const featuresSwiper = new Swiper(".facilities-swiper", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
          slidesPerView: 6,
      },
    },
  });*/