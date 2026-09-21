import { productCards } from './productsData.js';

console.log(productCards);

const PATH = /images/
const productsTemplate = document.getElementById('product-template');
const productsList = document.getElementById('products');

const productsReduce = productCards.reduce((acc, product) => {
  acc.push({[product.name]: product.description});
  return acc;
}, []);
console.log(productsReduce);

function chooseProductCard() {
  const choice = prompt("Сколько карточек отобразить? От 1 до 5");
  if (choice >=1 && choice <=5) {
  return Number(choice);
} else { 
  return 0
  }
}


function renderCards(productCards) {
productCards.forEach(product => {
  const productClone = productsTemplate.content.cloneNode(true);
  productClone.querySelector('.card__image').src = PATH + product.image;
  productClone.querySelector('.card__category').textContent = product.category;
  productClone.querySelector('.card__name').textContent = product.name;
  productClone.querySelector('.card__description').textContent = product.description;
  productClone.querySelector('.card__price span').textContent = product.price + product.currency;

  product.compoundList.forEach(compoundItem => {
    const li = document.createElement('li');
    li.textContent = compoundItem;
    productClone.querySelector('.compound__list').appendChild(li);
  });
  productsList.appendChild(productClone);
});
}

renderCards(productCards.slice(0, chooseProductCard()))