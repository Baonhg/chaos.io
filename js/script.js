document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
  
    burgerMenu.addEventListener('click', function () {
      navbar.classList.toggle('active');
      burgerMenu.classList.toggle('active');
    });
  });

const homeElement = document.querySelector('.home');
let images = ['../img/bannerWeb.jpg', '../img/background_1.jpg', '../img/background_2.jpg'];
let currentImageIndex = 0;

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  homeElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}, 2000);



document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".sidescroll");
  function checkPosition() {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let position = item.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
});

$(document).ready(function () {
  $("#popular").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    
    responsive: {
      360: {
        items: 1,
      },
      600: {
        items: 2,
      },
      991: {
        items: 1,
      },
    },
  });
});

$(document).ready(function () {
  $("#bestSeller").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    
    responsive: {
      360: {
        items: 1,
      },
      799: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $("#shop").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    responsive: {
      360: {
        items: 1,
      },
      799: {
        items: 2,
      },
      1280: {
        items: 4,
      },
    },
  });
});


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container .box').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});