const left = `<img class="services-icon" src="./images/prev.png" alt="this-is-icon">`;
const right = `<img class="services-icon" src="./images/next.png" alt="this-is-icon">`;

$(".services .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  smartSpeed: 500,
  margin: 30,
  nav: true,
  navText: [left, right],
  dots: true,
  mouseDrag: false,
  autoplayHoverPause: true,
  autoplayTimeout: 4500,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

$(".partner .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2800,
  smartSpeed: 900,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 2,
      margin: 20,
    },
    300: {
      items: 3,
      margin: 20,
    },
    600: {
      items: 4,
      margin: 60,
    },
    1024: {
      items: 5,
      margin: 60,
    },
    1200: {
      margin: 110,
      items: 6,
    },
  },
});

$(".slider .owl-carousel").owlCarousel({
  navText: [left, right],
  loop: true,
  margin: 12,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4200,
  smartSpeed: 900,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

const upTop = document.getElementById("up-top");

function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// Tối ưu hoá delay scroll giúp tài nguyên không quá tải

window.addEventListener(
  "scroll",
  debounceFn(function () {
    const scrollY = window.pageYOffset;

    if (scrollY > 400) {
      upTop.classList.add("active");
    } else {
      upTop.removeAttribute("class");
    }
    upTop.onclick = function () {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }, 100)
);

const iconMenu = document.querySelector(".header-icons__bars");
const iconClose = document.querySelector(".header-menu__close");
const headerMenu = document.querySelector(".header-menu");
const overlay = document.querySelector(".overlay");
const iconSearch = document.querySelector(".header-icons__search");
const searchMobile = document.querySelector(".search-mobile");

iconMenu.onclick = function () {
  headerMenu.classList.add("active");
  overlay.classList.add("show");
};
iconClose.onclick = function () {
  headerMenu.classList.remove("active");
  overlay.classList.remove("show");
};
iconSearch.onclick = function () {
  searchMobile.classList.add("show");
  searchMobile.onclick = function (event) {
    event.target.classList.remove("show");
  };
};
