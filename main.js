// ПОКРАСКА ВСЕХ КАРТОЧЕК

const productCards = document.querySelectorAll ('.products__item');
const changeColorAllCardButton = document.querySelector ('#change-color-all-cards-button');
const greenColorHash = '#00FF00';
const bluerColorHash = '#0000FF'


changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
})

// ПОКРАСКА ПЕРВОЙ КАРТОЧКИ

const firstProductCard = document.querySelector ('.products__item');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener ('click', () => {
  firstProductCard.style.backgroundColor = bluerColorHash;
});


//  ОТКРЫТЬ ГУГЛИЩЕ

const openGoogleButton = document.querySelector('#open-google')

openGoogleButton.addEventListener ('click' , openGoogle)

function openGoogle() {
  const answer = confirm('Ты реально хочешь открыть эту ссылку ?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}


// ВЫВОД КОНСОЛЬ LOG И ALERT

const outputLogButton = document.querySelector ('#output-console-log');

outputLogButton.addEventListener('click', () => OutputConcsoleLog('ДЗ №4'))


function OutputConcsoleLog(message) {
  alert(message)
  console.log (message)
}


// ВЫВОД ЗАГОЛОВКА В КОНСОЛЬ

const outputLogHeadline = document.getElementsByTagName('h1')[0]

outputLogHeadline.addEventListener('mouseover', function () {
  console.log(outputLogHeadline.textContent)
})


// КНОПКА ДЛЯ СМЕНЫ ЦВЕТА С ОДНОГО НА ДРУГОЙ

const ChangeButtonColorItself = document.querySelector('#change-button-color-itself');

ChangeButtonColorItself.addEventListener('click', () => {
  ChangeButtonColorItself.classList.toggle('button-green-color');
});