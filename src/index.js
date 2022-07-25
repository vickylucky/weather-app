let now = new Date();

let h1 = document.querySelector("h1");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

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
h1.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp-1").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
}

function search(event) {
  event.preventDefault();
  let apiKey = "742836e67df46810db3221e90416cefd";
  let city = document.querySelector("#input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(axios);
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//////week-5//////

function showPosition(position) {
  alert(position.coords.latitude + position.coords.longitude);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

/////////////////////////////////////////////////////////////////

function showWeather(response) {
  let html = document.querySelector("temp-1");
  let temperature = Math.round(response.data.main.temp);
  document.querySelector(
    "temp-1"
  ).innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "742836e67df46810db3221e90416cefd";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}
navigator.geolocation.getCurrentPosition(retrievePosition);
