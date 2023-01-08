//todo.js
const todoListForm = document.querySelector(".todo-list-form");
const todoListFormInput = document.querySelector(".todo-list-form input");
const todoListFormButton = document.querySelector(".todo-list-form button");

const todoListContainer = document.querySelector(".todo-list-container");
const todoList = document.querySelector(".todo-list");
const emptyList = document.querySelector(".empty");
let todosArr = [];
const TODOS_KEY = "todos";

//saveTodo function
function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
}

//paintTodo
function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);

  //button click and delete todo
  button.addEventListener("click", deleteTodos);

  button.innerText = "❌";
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.idx;

  todoList.appendChild(li);

  emptyList.classList.add(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

//todolistForm submit function
function onTodoListFormSubmit(event) {
  event.preventDefault();
  const newTodo = todoListFormInput.value;
  todoListFormInput.value = "";

  const newTodoObj = {
    idx: Date.now(),
    text: newTodo
  }
  //새로운 값을 배열에 넣은후, 
  todosArr.push(newTodoObj);
  //로컬스토리지에 저장
  saveTodo();
  paintTodo(newTodoObj);
}

//savedTodos
const savedTodos = localStorage.getItem(TODOS_KEY);

//delete todo function
function deleteTodos(event) {
  const targetedLi = event.target.parentElement;

  //로컬스토리지의 idx와 타겟li의 id값이 같지않은것만 다시 배열로 모으기
  todosArr = todosArr.filter((todo) => todo.idx !== parseInt(targetedLi.id));
  //새로 만들어진 배열을 다시 로컬 스토리지로 저장
  saveTodo();

  //화면에서 li 지우기
  targetedLi.remove();

  const todoListcount = document.querySelector(".todo-list li");

  if (todoListcount === null) {
    todoList.classList.add(HIDDEN_CLASSNAME);
    emptyList.classList.remove(HIDDEN_CLASSNAME);
  }
}


//backButton click function
function handlebackButtonClick() {
  //show nameForm
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  //hide backButton
  greetingContainer.classList.add(HIDDEN_CLASSNAME);
  //remove localStorage name
  localStorage.removeItem(NAME_KEY);
  localStorage.removeItem(TODOS_KEY);

  location.reload();
}

//todolistForm submit event
todoListForm.addEventListener("submit", onTodoListFormSubmit);

//backButton click event
backButton.addEventListener("click", handlebackButtonClick);

//저장된 로컬스토리지 todos값이 있을때, 없을때 화면
if (savedTodos !== null) {
  todoList.classList.remove(HIDDEN_CLASSNAME);
  emptyList.classList.add(HIDDEN_CLASSNAME);

  const parsedTodos = JSON.parse(savedTodos);
  todosArr = parsedTodos;
  parsedTodos.forEach(paintTodo)

} else if (savedTodos === null) {
  todoList.classList.add(HIDDEN_CLASSNAME);
  emptyList.classList.remove(HIDDEN_CLASSNAME);
}




