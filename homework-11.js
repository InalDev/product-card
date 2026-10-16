// Открыть модальное окно

const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const body = document.body

openModalButton.addEventListener('click', () => {
  modal.classList.add("show");
  body.classList.add("modal-open");
});

closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("show");
  body.classList.remove("modal-open");
}


// Преобразование данных пользователя в объект и вывод в консоль

const emailForm = document.querySelector('#email-form');

console.log(emailForm);

emailForm.addEventListener('submit', function(event) {
  event.preventDefault();
 const form = event.target;
 const formData = new FormData(form);
 const data = Object.fromEntries(formData.entries());
 console.log(data);
})

const registrationForm = document.querySelector('#registration-form');
const passwordInput = document.querySelector('.password-input');
const confirmPasswordInput = document.querySelector('.confirm-password-input');

let user = null;

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // if (registrationForm.checkValidity()) {
  //   alert("Форма заполнена неверно. Пожалуйста, заполните пропущенные поля и попробуйте снова.");
  //   return;
  // }
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Пароли не совпадают. Пожалуйста, введите одинаковые пароли.");
    return;
  }

  const formData = new FormData(registrationForm);
  const userData = Object.fromEntries(formData.entries());
  user = userData;
  console.log(user);

  modal.classList.remove("show");
  body.classList.remove("modal-open");

  registrationForm.reset();
});