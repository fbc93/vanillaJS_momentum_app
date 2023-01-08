//weather.js
const API_KEY = "4ddb5888c1f56f0cda20d4ae1ba03841";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(url).then(response => response.json()).then(data => {
    const city = data.name;
    const weather = data.weather[0].description;
    const temp = data.main['temp'];
    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

    const weatherIcon = document.querySelector("#weather-container .icon-image");
    const currentTemp = document.querySelector("#weather-container .temperature");
    const currentCity = document.querySelector("#weather-container .location");
    const currentWeather = document.querySelector("#weather-container .detail");


    currentCity.innerText = city;
    currentWeather.innerText = weather;
    currentTemp.innerHTML = `${temp}<span> °C</span>`;

    weatherIcon.style.backgroundImage = `url(${iconUrl})`;

  });
}

function onGeoError() {
  alert("날씨정보를 가져올 수 없어요");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);