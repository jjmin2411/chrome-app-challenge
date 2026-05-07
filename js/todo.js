const toDoForm = document.querySelector(".main__todoForm");
const toDoInput = document.querySelector(".main__todoForm__input");
const toDoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");
const TODOS_KEY = "todos";

let toDos = [];
let completedToDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function saveCompletedToDos() {
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(completedToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function completeToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.classList.add("completed");
  completedList.appendChild(li);
  const completeButton = event.target;
  completeButton.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  console.log(
    "There is a bug where completed `<li>` elements disappear when the page is reloaded.However, the `<li>` elements in the todoList don't disappear even after reloading the page.If Nico is reading this, I would appreciate it if you could leave a suggestion for revision or any comments.",
  );
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  const completeButton = document.createElement("button");
  completeButton.innerText = "✅";
  completeButton.addEventListener("click", completeToDo);
  const buttons = document.createElement("div");
  buttons.appendChild(deleteButton);
  buttons.appendChild(completeButton);
  li.appendChild(span);
  li.appendChild(buttons);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
