const logOut = document.querySelector(".header__logOut");

function logOutFn() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logOut.classList.add(HIDDEN_CLASSNAME);
  marginDiv.classList.remove(HIDDEN_CLASSNAME);
  todoContainer.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
}

logOut.addEventListener("click", logOutFn);
