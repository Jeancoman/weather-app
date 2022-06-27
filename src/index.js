import { getWeather } from "./apiFunctions";
import {
  displayCountry,
  displayError,
  displayLocation,
  displayTemperature,
  displayWeather,
  removeWeatherData,
} from "./domFunctions";

const form = document.querySelector("form");
const input = document.querySelector("#search");
const container = document.querySelector("#container");

window.onload = () => {
  getWeather("Valle de la Pascua").then((value) => {
    const temperature = value.main.temp;
    const string = String(temperature).slice(0, 2);
    const sliced = Number(string);
    displayLocation(value.name);
    displayCountry(value.sys.country);
    displayTemperature(sliced);
    displayWeather(value.weather[0].description, value.weather[0].main);
  });
};

form.onsubmit = (e) => {
  e.preventDefault();
  if (container.childElementCount === 1) {
    const errorText = document.querySelector("h2");
    errorText.remove();
  }
  getWeather(input.value).then((value) => {
    const temperature = value.main.temp;
    const string = String(temperature).slice(0, 2);
    const sliced = Number(string);
    if (container.childElementCount === 4) {
      const location = document.querySelector(".location");
      const country = document.querySelector(".country");
      const temp = document.querySelector(".temperature");
      const weather = document.querySelector(".weather");
      weather.remove();
      location.textContent = value.name;
      country.textContent = value.sys.country;
      temp.textContent = `${sliced}°C`;
      displayWeather(value.weather[0].description, value.weather[0].main);
    } else {
      displayLocation(value.name);
      displayCountry(value.sys.country);
      displayTemperature(sliced);
      displayWeather(value.weather[0].description, value.weather[0].main);
    }
  }).catch(() => {
    if (container.childElementCount === 4) {
      removeWeatherData();
    }
    displayError();
  });
  form.reset();
};
