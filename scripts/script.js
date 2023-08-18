var links = document.querySelectorAll('.nav-links');
var soc = document.querySelectorAll('.header .social i');
var fsoc = document.querySelectorAll('.footer-socials .social i');
var look = document.querySelectorAll('.image-wrapper');
var imgLook = document.querySelectorAll('.image-wrapper img');
var light = document.getElementById('lightbox');
var close = document.querySelector('.close');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const toggle = document.querySelector('.toggle-button');
const topC = document.querySelector('.top-center');
var desc = document.querySelectorAll('.image-wrapper .products-desc');
let dex, there;


//mobile hamburger menu

toggle.addEventListener('click', function() {

  topC.classList.toggle('active');

  toggle.classList.toggle('active');

});


// look book gallery

imgLook.forEach((look, i, a) => {
  look.addEventListener('click', function() {
    document.body.style.overflow = 'hidden';
    dex = i;
    //dex = index of the image displayed on lightbox

    //there = cloned node image Description
    there = desc[i].cloneNode(true);

    light.querySelector('.light-holder').appendChild(there);
    light.classList.add('active');
    light.children[1].querySelector('img').src = look.src;


  })

})
prev.addEventListener('click', function() {

  if (dex <= 0) {
    return;
  } else if (dex > 0) {

    light.querySelector('.light-holder').removeChild(there);

    light.children[1].querySelector('img').src = imgLook[dex - 1].src;
    dex = dex - 1;

    // console.log(dex);
  }
  if (dex >= 0) {
    there = desc[dex].cloneNode(true);
    light.querySelector('.light-holder').appendChild(there);

  }

})
next.addEventListener('click', function() {
  if (dex + 1 > imgLook.length - 1) {
    return;

  } else if (dex <= imgLook.length) {
    light.querySelector('.light-holder').removeChild(there);


    light.children[1].querySelector('img').src = imgLook[dex + 1].src;
    dex = dex + 1;


  }
  if (dex <= imgLook.length) {
    there = desc[dex].cloneNode(true)
    light.querySelector('.light-holder').appendChild(there);
  }
})

//close button

close.addEventListener('click', function() {
  light.classList.remove('active');
  dex = 0;
  document.body.style.overflow = 'auto';
  light.querySelector('.light-holder').removeChild(there);
})



//navbar links hoverstate animation

links.forEach((link) => {
  link.addEventListener('mouseover', function() {
    links.forEach((a) => {
      a.classList.add('fade');
    })
    link.classList.add('active');
    link.classList.remove('fade');

  })
  link.addEventListener('mouseleave', function() {
    links.forEach((a) => {
      a.classList.remove('fade');

    })
    link.classList.remove('active');
    link.classList.remove('fade');
  })

})


//social hoverstate animtaion

soc.forEach((s) => {
  s.addEventListener('mouseover', function() {
    soc.forEach((a) => {
      a.classList.add('active');
    })
    s.classList.remove('active');
  })
  s.addEventListener('mouseleave', function() {
    soc.forEach((a) => {
      a.classList.remove('active');
    })
    s.classList.remove('active');
  })
})
fsoc.forEach((s) => {
  s.addEventListener('mouseover', function() {
    fsoc.forEach((a) => {
      a.classList.add('active');
    })
    s.classList.remove('active');
  })
  s.addEventListener('mouseleave', function() {
    fsoc.forEach((a) => {
      a.classList.remove('active');
    })
    s.classList.remove('active');
  })
})

//swiper init
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  slidesPerGroup: 2,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
       300: {
         slidesPerView: 2,
         spaceBetween: 20,
       },
       768: {
         slidesPerView: 3,
         spaceBetween: 20,
       },
       1024: {
         slidesPerView: 4,
         spaceBetween: 5,
       }},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
