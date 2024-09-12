const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



gsap.from(".overly h1, span", {
    y:300,
    opacity:0,
    duration:1.5,
    stagger:0.4,
})
gsap.from("nav", {
    opacity:0,
    duration:2,
    y:-100,
    stagger:0.3,
})

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }