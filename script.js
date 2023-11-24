let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let isMenuOpen = false;

navBarToggle.addEventListener("click", function () {
    console.log("Hamburger menu clicked");
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        mainNav.classList.add("active");
    } else {
        mainNav.classList.remove("active");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
        mainNav.classList.remove("active");
    }
});


$(document).ready(function() {
    $(input).on('click', function(){
      $(input).removeClass('border-color');
    });
  });



  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    loadPopularMovies();
    loadNewMovies();

    document.getElementById('searchBox').addEventListener('input', function() {
     
    });
});





$ (function(){

var slider = $('.slider'),
list = slider.find('ul.slider_liste'),
length = list.find('li').lenght,
width  =slider.outerWidth(),
totalWidth = width * length,
index = 0;
list.find('li').width(width).end().width()
alert( lengt );


})