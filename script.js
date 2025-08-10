/*********************************\
    Some JavaScript code to show/hide containers
\*********************************/

const subscriptionBox = document.querySelector(".subscription");
const successBox = document.querySelector(".success");

const formBtn = document.querySelector(".form__btn");
const successBtn = document.querySelector(".success__btn ");

const formEmail = document.querySelector(".form__input");
const userEmail = document.querySelector(".success__email");

formBtn.addEventListener("click", function (e) {
  // Remove default behavior to submit form when pressed
  e.preventDefault();
  subscriptionBox.classList.remove("subscription__open");
  subscriptionBox.classList.add("subscription__close");

  userEmail.textContent = formEmail.value;
  successBox.classList.add("success__open");
  successBox.classList.remove("success__close");
});

successBox.addEventListener("click", function (e) {
  // Remove default behavior to submit form when pressed
  e.preventDefault();
  subscriptionBox.classList.add("subscription__open");
  subscriptionBox.classList.remove("subscription__close");

  successBox.classList.remove("success__open");
  successBox.classList.add("success__close");
});
