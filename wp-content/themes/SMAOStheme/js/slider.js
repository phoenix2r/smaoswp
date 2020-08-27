let sliderImages = document.querySelectorAll('.slide'),
    slideContainer = document.querySelector('#hero-slider'),
    slideOneImage = document.querySelectorAll('.hero-img'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    slideInterval;

let auto = false;
if(sliderImages.length > 1) {
  auto = true;
} else {
  auto = false;
  arrowLeft.style.display = "none";
  arrowRight.style.display = "none";
}
const intervalTime = 5000;

// function to adjust the height of the container dynamically
function resizeElementHeight(element) {
  var flexHeight = slideOneImage[0].offsetHeight;
  var increaseHeightLarge = flexHeight * 0.2;
  var increaseHeightSmall = flexHeight * 0.3;
  var increaseHeightMobile = flexHeight * 0.4;

  if (window.innerWidth < 500) {
    slideContainer.style.height = ((flexHeight + increaseHeightMobile) + "px");
  } else if (window.innerWidth < 900) {
    slideContainer.style.height = ((flexHeight + increaseHeightSmall) + "px");
  } else {
    slideContainer.style.height = ((flexHeight + increaseHeightLarge) + "px");
  }
}

resizeElementHeight();
window.addEventListener('resize', resizeElementHeight);

function startSlide() {
  // reset();
  
  let currentSlide = sliderImages[0];
  currentSlide.classList.add('current');
}

// Show prev
function slideLeft() {
  // reset();
  let current = document.querySelector('.current');
  current.classList.remove('current');
  //Add current to next sibling
  if(current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    sliderImages[sliderImages.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'))
  // sliderImages[current - 1].style.display = 'block';
  // current--;
}

// left arrow click
arrowLeft.addEventListener('click', () => {
  slideLeft();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(slideRight, intervalTime);
  }
  console.log("left arrow clicked");
})

// Show next
function slideRight() {
  // reset();
  let current = document.querySelector('.current');
  current.classList.remove('current');
  //Add current to next sibling
  if(current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    sliderImages[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'))
  // sliderImages[current + 1].style.display = 'block';
  // current++;
}

// right arrow click
arrowRight.addEventListener('click', () => {
  slideRight();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(slideRight, intervalTime);
  }
  console.log("right arrow clicked");
})

function moreThanOne() {
  
}

// Auto slide
if (auto) {
  slideInterval = setInterval(slideRight, intervalTime);
}

startSlide();

