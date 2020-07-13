let possibleDropdowns = document.querySelectorAll('#menu-nav-main li')

for (i=0; i < possibleDropdowns.length; i++) {
  let current = possibleDropdowns[i];
  current.addEventListener('click', ()=> {
    console.log(current.id);
    let dropdown = current.querySelector('ul.sub-menu');
    if(dropdown) {
      dropdown.style.display = 'block';
      dropdown.classList.add('on-display');
    } else {
      console.log('No dropdown menu');
    }
  });
}

document.addEventListener('click', e => {
  let checkClick = e.target;
  let dropdown = document.querySelector('.on-display');
  if(checkClick != dropdown && checkClick.parentElement != dropdown.parentElement) {
    dropdown.style.display = "none";
    dropdown.classList.remove('on-display');
  }
});


