function displayLocation(location) {
  const container = document.querySelector("#container");
  const div = document.createElement("div");
  div.textContent = location;
  div.className = "location";
  container.appendChild(div);
}

function displayCountry(country) {
  const container = document.querySelector("#container");
  const div = document.createElement("div");
  div.textContent = country;
  div.className = "country";
  container.appendChild(div);
}

function displayTemperature(temperature) {
  const container = document.querySelector("#container");
  const div = document.createElement("div");
  div.textContent = `${temperature}°C`;
  div.className = "temperature";
  container.appendChild(div);
}

function displayWeather(weather, mainWeather) {
  const container = document.querySelector("#container");
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.className = "weather";
  if (weather === "clear sky") {
    img.setAttribute("src", "./img/weather-sunny.svg");
  } else if (weather === "few clouds") {
    img.setAttribute("src", "./img/weather-partly-cloudy.svg");
  } else if (weather === "scattered clouds") {
    img.setAttribute("src", "./img/weather-cloudy.svg");
  } else if (weather === "broken clouds") {
    img.setAttribute("src", "./img/weather-cloudy.svg");
  } else if (weather === "shower rain") {
    img.setAttribute("src", "./img/weather-rainy.svg");
  } else if (weather === "rain") {
    img.setAttribute("src", "./img/weather-pouring.svg");
  } else if (weather === "thunderstorm") {
    img.setAttribute("src", "./img/weather-lightning.svg");
  } else if (weather === "snow") {
    img.setAttribute("src", "./img/weather-snowy-heavy.svg");
  } else if (weather === "mist") {
    img.setAttribute("src", "./img/weather-fog.svg");
  } else if (mainWeather === "Clouds") {
    img.setAttribute("src", "./img/weather-cloudy.svg");
  } else if (mainWeather === "Drizzle" || mainWeather === "Rain") {
    img.setAttribute("src", "./img/weather-pouring.svg");
  } else if (mainWeather === "Snow") {
    img.setAttribute("src", "./img/weather-snowy-heavy.svg");
  } else if (mainWeather === "Thunderstorm") {
    img.setAttribute("src", "./img/weather-lightning.svg");
  } else {
    img.setAttribute("src", "./img/weather-tornado.svg");
  }
  div.appendChild(img);
  container.appendChild(div);
}

function displayError() {
  const container = document.querySelector("#container");
  const errorText = document.createElement("h2");
  errorText.textContent = "No such location found!";
  container.appendChild(errorText);
}

function removeWeatherData() {
  const location = document.querySelector(".location");
  const country = document.querySelector(".country");
  const temp = document.querySelector(".temperature");
  const weather = document.querySelector(".weather");
  location.remove();
  country.remove();
  temp.remove();
  weather.remove();
}

export {
  displayLocation, displayCountry, displayTemperature, displayWeather, displayError,
  removeWeatherData,
};
