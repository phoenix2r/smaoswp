function addWoocommerceClass() {
  let addToCartBtn = document.querySelectorAll('[class*="add_to_cart_button"]');
  addToCartBtn.forEach((el) => {
    el.classList.add('btn-secondary');
  });
}

function addWoocommerceClassTwo() {
  let btnToModify = document.getElementsByTagName('button');
  btnToModify.forEach((el) => {
    el.classList.add('btn-secondary');
  });
}

addWoocommerceClass();
addWoocommerceClassTwo();