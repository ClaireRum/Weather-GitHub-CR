function CurrentDate() {
  let now = new Date();
  let date = now.getDate();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let CurrentDate = document.querySelector("#newDate");
  CurrentDate.innerHTML = `${day}, ${hours}:${minutes}`;
}
CurrentDate();

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#tempDescription").innerHTML =
    response.data.weather[0].main;
  document.querySelector(".currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#temp-max").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#temp-min").innerHTML = Math.round(
    response.data.main.temp_min
  );
}

function changeCityName(event) {
  event.preventDefault();
  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let unit = "metric";
  let city = document.querySelector("#search-input").value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

  axios.get(apiURL).then(displayWeather);
}

let changeCity = document.querySelector("button");
changeCity.addEventListener("click", changeCityName);

function changeToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector(".currentTemp");
  temperature.innerHTML = "19";
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToCelsius);

function changeToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector(".currentTemp");
  temp.innerHTML = "66";
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changeToFahrenheit);

function searchLocation(position) {
  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiURL);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocation = document.querySelector("#currentLocation");
currentLocation.addEventListener("click", getCurrentLocation);
