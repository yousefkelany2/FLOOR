
var swiper = new Swiper('.service', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});
var swiper = new Swiper('.process', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});


//Start header
document.querySelector(".SEAECH").onclick = function(){
  document.querySelector(".nav-search").classList.toggle("open")
}
$(".ABOUT").click(function(){
  $(".About").slideToggle(500)
})
$(".PAGES").click(function(){
  $(".Pages").slideToggle(500)
})
$(".SERVICE").click(function(){
  $(".Service").slideToggle(500)
})
$(".PROJECT").click(function(){
  $(".Project").slideToggle(500)
})
$(".BLOG").click(function(){
  $(".Blog").slideToggle(500)
})
$(".SHOP").click(function(){
  $(".Shop").slideToggle(500)
})
// Start Project
$(".FLOOINGINSTALL").click(function(){
  $(".tile").fadeToggle(500);
  $(".paving").fadeToggle(500);
  $(".FLOOINGINSTALL") .css("background-color", "#0077be")
  $(".PAVINGSERVICE") .css("background-color", "black")
  $(".TILEINSTALL") .css("background-color", "black")
  $(".All") .css("background-color", "black")
  
})
$(".PAVINGSERVICE").click(function(){
  $(".tile").fadeToggle(500);
  $(".flooing").fadeToggle(500);
  $(".PAVINGSERVICE") .css("background-color", "#0077be")
  $(".FLOOINGINSTALL") .css("background-color", "black")
  $(".TILEINSTALL") .css("background-color", "black")
  $(".All") .css("background-color", "black")
})
$(".TILEINSTALL").click(function(){
  $(".flooing").fadeToggle(500);
  $(".paving").fadeToggle(500);
  $(".TILEINSTALL") .css("background-color", "#0077be")
  $(".PAVINGSERVICE") .css("background-color", "black")
  $(".FLOOINGINSTALL") .css("background-color", "black")
  $(".All") .css("background-color", "black")
})
$(".All").click(function(){
  $(".probox").show(500);
  $(".All") .css("background-color", "#0077be")
  $(".PAVINGSERVICE") .css("background-color", "black")
  $(".TILEINSTALL") .css("background-color", "black")
  $(".FLOOINGINSTALL") .css("background-color", "black")
})
// end Project

// start Testimonial
var swiper = new Swiper('.TESTIMONIAL', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'slide',
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    }
  }
});
// End Testimonial

window.onscroll = function(){
  if(window.scrollY > 600){
    document.querySelector(".up").style.display = "block"
  }
  else{
    document.querySelector(".up").style.display = "none"
  }
}
document.querySelector(".up").onclick = function(){
  window.scroll({
    top :0 ,
    behavior :"smooth"
  })
}