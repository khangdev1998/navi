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

$(".project .owl-carousel").owlCarousel({
  navText: [left, right],
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4200,
  smartSpeed: 900,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 3,
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

const numberValue = document.querySelector(".quantity__value");
const btnPlus = document.querySelector(".quantity__plus");
const btnMinus = document.querySelector(".quantity__minus");

if (btnPlus && btnMinus) {
  btnPlus.onclick = function () {
    let number = numberValue.value;
    number++;
    numberValue.value = number;
  };
  btnMinus.onclick = function () {
    let number = numberValue.value;
    if (number <= 1) return;
    number--;
    numberValue.value = number;
  };
}

const headerTop = document.querySelector(".header-top");
const headerBottom = document.querySelector(".header-bottom");
const tags = document.querySelector(".tags");
const headerBottomHeight = headerBottom && headerBottom.offsetHeight;
const headerTopHeight = headerTop && headerTop.offsetHeight;
const scrollHeight = headerTopHeight + headerBottomHeight;

if (tags) {
  window.addEventListener(
    "scroll",
    debounceFn(function () {
      const scrollY = window.pageYOffset;
      if (scrollY >= scrollHeight) {
        document.body.style.paddingTop = 56 + "px";
        Object.assign(tags.style, {
          position: "fixed",
          top: headerTopHeight + "px",
          left: "0",
          width: "100%",
          zIndex: "100",
          animation: "fade 0.25s forwards 1",
          background: "var(--light-color)",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          padding: "16px 0",
        });
        headerBottom.style.visibility = "hidden";
      } else {
        tags.removeAttribute("style");
        document.body.style.paddingTop = 0;
        headerBottom.style.visibility = "visible";
      }
    }, 60)
  );
}

const tabItem = document.querySelectorAll(".product-tab__list-item");
const tabContent = document.querySelectorAll(".product-list");

Array.from(tabItem).forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (item.classList.contains("product-tab__list-item--active")) return;

    Array.from(tabItem).forEach((item) =>
      item.classList.remove("product-tab__list-item--active")
    );
    event.target.classList.add("product-tab__list-item--active");

    const numberData = event.target.dataset.tab;
    Array.from(tabContent).forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-tab") === numberData) {
        item.classList.add("active");
      }
    });
  });
});

const subMenuItem = document.querySelectorAll(
  ".header-submenu__list > li span"
);
const submenuImage = document.querySelector(".header-submenu__image img");

Array.from(subMenuItem).forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    Array.from(subMenuItem).forEach((item) => item.removeAttribute("class"));

    if (item.parentElement.parentElement.parentElement.dataset.image) {
      submenuImage.setAttribute(
        "src",
        `./images/${item.parentElement.parentElement.parentElement.dataset.image}.jpeg`
      );
    } else {
      submenuImage.removeAttribute("src");
      submenuImage.removeAttribute("alt");
    }

    const subMenu =
      item.parentElement.parentElement.parentElement.querySelector("ul");
    const icon =
      item.parentElement.parentElement.parentElement.querySelector("ion-icon");
    const subMenuActive = document.querySelector("ul.active");
    const iconActive = document.querySelector("ion-icon.active");

    if (subMenuActive && iconActive) {
      subMenuActive.removeAttribute("class");
      iconActive.removeAttribute("class");
    }
    subMenu.classList.add("active");
    icon.classList.add("active");
  });
});
