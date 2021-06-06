const input = document.querySelector(".input");
const cityl = document.getElementById("cityl");
const time = document.getElementById("time");
const day = document.getElementById("day");
const degrees = document.getElementById("degrees");
const logo = document.getElementById("logo");
const weather = document.getElementById("weather");
const btn = document.querySelector(".btn");
const API_URL =
  "http://api.weatherstack.com/current?access_key=e72b79f7eba2ed3e434834d067e89b67&query=";

btn.addEventListener("click", () => {
  const location = input.value;
  input.focus();
  getWeather(location);
});

async function getWeather(loca) {
  //fetching from the api
  const res = await fetch(API_URL + loca);
  const data = await res.json();
  console.log(data);
  // distructuring the json file
  const { location, current, request } = data;
  cityl.textContent = location.name;
  time.textContent = current.observation_time;
  day.textContent = request.query;
  degrees.textContent = current.temperature;
  const p = current.weather_descriptions;
  console.log(p[0]);
  /// here logo is acting like weather so remember
  logo.textContent = p[0];
}
