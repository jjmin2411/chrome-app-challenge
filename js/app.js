const loginForm = document.querySelector(".main__loginForm");
const loginInput = document.getElementById("login-input");
const todoContainer = document.querySelector(".main__todo");
const greeting = document.querySelector("#greeting");
const marginDiv = document.querySelector(".margin-div");
const clockJs = document.querySelector(".clock-js");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginFn(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value.trim();
  localStorage.setItem(USERNAME_KEY, userName);
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(userName);
}

loginForm.addEventListener("submit", loginFn);

function paintGreetings(usename) {
  greeting.innerText = `Hello, ${usename}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.classList.remove(HIDDEN_CLASSNAME);
  marginDiv.classList.add(HIDDEN_CLASSNAME);
  clockJs.style.backgroundColor = "transparent";

  if (typeof changeBackgroundImage === "function") {
    changeBackgroundImage();
  }
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
clockJs.classList.remove(HIDDEN_CLASSNAME);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  todoContainer.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginFn);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
}
