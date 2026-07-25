//let weather = {
//paris: {
//temp: 19.7,
//humidity: 80,
//},
//tokyo: {
//temp: 17.3,
// humidity: 50,
//},
//lisbon: {
//temp: 30.2,
//humidity: 20,
//},
//"san francisco": {
//temp: 20.9,
//humidity: 100,
// },
//oslo: {
//temp: -5,
//humidity: 20,
//}
//};

//let cities = prompt("Enter a City");
//let temp = Math.round(weather.temp);

//alert(  `It is currently ${temp} in ${cities[0].temp} with a of ${cities[0].humidity}`);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  currentCity.innerHTML = `🗺️ ${city.value}`;
}

let currentCity = document.querySelector("#current-city");
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);

let weatherDescription = document.querySelector("p");
let temperature = document.querySelector(".current-weather");

function formatDate() {
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let dayNumber = now.getDate();

  return `${day}, ${month} ${dayNumber}`;
}
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = formatDate();

function formatTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  return `${hours}:${minutes}`;
}
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = formatTime();
