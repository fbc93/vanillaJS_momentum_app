//name.js
const nameForm = document.querySelector("#name-form");
const nameFormInput = document.querySelector("#name-form input");
const nameFormButton = document.querySelector("#name-form button");

const greetingContainer = document.querySelector("#greeting-container");
const greetingMent = document.querySelector(".greeting-ment");
const backButton = document.querySelector(".back-button");

const HIDDEN_CLASSNAME = "hidden";
const NAME_KEY = "name";

//nameForm submit function
function onNameFormSubmit(event) {
  event.preventDefault();

  //nameFormInputValue
  const nameFormInputValue = nameFormInput.value;

  //show todoList and backButton && hide nameForm
  nameForm.classList.add(HIDDEN_CLASSNAME);
  greetingContainer.classList.remove(HIDDEN_CLASSNAME);

  //input입력값(=이름)을 로컬스토리지로 저장
  localStorage.setItem(NAME_KEY, nameFormInputValue);
  greetingMent.innerText = `만나서 반가워요 ${nameFormInputValue}님, 오늘 하루 계획을 세워보세요 🥰`;

}

//nameForm submit event
nameForm.addEventListener("submit", onNameFormSubmit);


//저장된 로컬스토리지 name값이 있을때, 없을때 화면
const savedName = localStorage.getItem(NAME_KEY);

if (savedName === null) {
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  greetingContainer.classList.add(HIDDEN_CLASSNAME);
} else {
  nameForm.classList.add(HIDDEN_CLASSNAME);
  greetingContainer.classList.remove(HIDDEN_CLASSNAME);
  greetingMent.innerText = `${savedName}님, 오늘도 할일은 다 하셨나요? 🧐`;
}
