// navbar background & color
document.addEventListener('DOMContentLoaded', function() {
    const navEl = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.navbar-toggler');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 60) {
        navEl.classList.add('navbar-scrolled');
      } else {
        navEl.classList.remove('navbar-scrolled');
      }
    });
  
    toggleButton.addEventListener('click', function() {
      if (window.innerWidth < 992) { 
        navEl.classList.toggle('navbar-clicked');
      }
    });
  });



//Latest projects carousel
$('.first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

//counter
const counters = document.querySelectorAll('.value');
const speed = 200;
let max = 0;

counters.forEach(counter => {
  const value = +counter.getAttribute('upto');
  if (value > max) {
    max = value;
  }
});

const duration = (max / speed) * 1000; 

counters.forEach(counter => {
  function updateCounter(startTime) {
    const value = +counter.getAttribute('upto');
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;

    const currentProgress = Math.min(timeElapsed / duration, 1); 
    const currentCount = Math.ceil(currentProgress * value);

    counter.innerText = currentCount;

    if (currentProgress < 1) {
      requestAnimationFrame(() => updateCounter(startTime));
    }
  }

  updateCounter(Date.now()); 
});


//logo
$('.second').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsiveClass:true,
    autoplay:true,
    responsive:{
      0:{
          items:2
      },
      576:{
          items:3
      },
      992:{
          items:5
      }
  }
})
