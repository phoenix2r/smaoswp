let slideContainer = document.querySelector('#hero-slider');


// function to adjust the height of the container dynamically
function resizeElementHeight(element) {
  var height = 0;
  var body = window.document.body;
  if (window.innerHeight) {
      height = window.innerHeight;
  } else if (body.parentElement.clientHeight) {
      height = body.parentElement.clientHeight;
  } else if (body && body.clientHeight) {
      height = body.clientHeight;
  }
  element.style.height = ((height - element.offsetTop) + "px");
}

resizeElementHeight(slideContainer);