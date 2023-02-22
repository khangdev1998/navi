const left = `<img class="services-icon" src="./images/prev.png" alt="this-is-icon">`;
const right = `<img class="services-icon" src="./images/next.png" alt="this-is-icon">`

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    smartSpeed: 500,
    margin:30,
    nav:true,
    navText: [left, right],
    dots: true,
    mouseDrag: false,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

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
          behavior: "smooth"
        });
      };
    }, 100)
  );
  