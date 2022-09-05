// navbar back-ground --- on scrolling
let navbar = document.querySelector(".navbar");
let navbarCenter = document.querySelector(".nav");
let header = document.querySelector("header");

window.onscroll = function () {
    // navbar back-ground --- on scrolling
    if (window.scrollY >= 1) {
        // navbar.style.cssText = "background-color: #101f2ed7 !important;"
        navbar.style.cssText = "top: 0px !important; ";
        header.style.cssText = "display: none !important";
        navbarCenter.style.cssText = "top: 0px !important";
    } else {
        // navbar.style.cssText = "background-color: #18243071 !important;"
        navbar.style.cssText = "top: 300px !important;"
        navbar.style.cssText = "@media (min-width: 768px) and (max-width: 989px){top: 180px !important}";
        header.style.cssText = "display: block !important";
        navbarCenter.style.cssText = "top: 110px !important"
    }
}
// ***************

// ***** very Important Code for me -- swiper owl carousel in section- team*****

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });










// ****** end ***** //