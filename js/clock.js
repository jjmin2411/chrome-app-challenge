const clock = document.querySelector(".header__time__value");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  const parsedHours = parseInt(hours);

  if (localStorage.getItem("username") === null) {
    if (parsedHours >= 8 && parsedHours < 17) {
      document.body.style.background =
        "linear-gradient(270deg,#002ca5, #4fcff2 )";
    } else if (
      (parsedHours >= 17 && parsedHours < 20) ||
      (parsedHours >= 5 && parsedHours < 8)
    ) {
      document.body.style.background =
        "linear-gradient(270deg, #bf0505, #f59032)";
    } else if (
      (parsedHours >= 20 && parsedHours <= 24) ||
      (parsedHours >= 0 && parsedHours < 5)
    ) {
      document.body.style.background =
        "linear-gradient(270deg, #131313, #2a2929)";
    }
  }
}

getClock();
setInterval(getClock, 1000);
