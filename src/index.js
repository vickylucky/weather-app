//*let weather = {
// paris: {
//  temp: 19.7,
//   humidity: 80,
// },
// tokyo: {
//   temp: 17.3,
//   humidity: 50,
//},
// lisbon: {
//  temp: 30.2,
//  humidity: 20,
// },
// "san francisco": {
//temp: 20.9,
//humidity: 100,
//temp: -5,
// },
//temp: -5,
// oslo: {
//temp: -5,
//humidity: 20,
//},
//};

//weather.paris.temp = Math.round(weather.paris.temp);
//weather.tokyo.temp = Math.round(weather.tokyo.temp);
//weather.lisbon.temp = Math.round(weather.lisbon.temp);
//weather["san francisco"].temp = Math.round(weather["san francisco"].temp);
//weather.oslo.temp = Math.round(weather.oslo.temp);

//let city = prompt("Enter a city?");
//city = city.toLowerCase();
//if (weather[city] !== undefined) {
//let temperature = weather[city].temp;
//let humidity = weather[city].humidity;
//let celsiusTemperature = Math.round(temperature);
//let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//alert(
//`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//);
//} else {
//alert(
//`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
// );
//}

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
