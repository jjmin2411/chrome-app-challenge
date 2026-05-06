const API_KEY = "72bd7e81087b9f5059c572aac906e58b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const place = document.querySelector(".header__weathers__place");
      place.innerText = city;
      const temperature = document.querySelector(
        ".header__weathers__temprature",
      );
      temperature.innerText = `${temp}°C`;
      const condition = document.querySelector(".header__weathers__condition");
      condition.innerText = weather;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
