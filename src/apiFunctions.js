async function getWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2732b39a4fb1b772ac698bef0f661186`,
    { mode: "cors" },
  );
  const weatherData = await response.json();
  return weatherData;
}

export { getWeather };
