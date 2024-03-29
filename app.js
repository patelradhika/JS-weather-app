// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


// Retrieve weather data from openweathermap
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);

  return weatherPromise.then((resp) => {
      return resp.json();
    })
}


// Retrieve city input and get the weather data
searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city)
  .then((data) => {
    showWeatherData(data);
  })
  .catch((error) => {
    console.log(error);
  })
}


// Show the weather data in HTML
showWeatherData = (weatherData) => {
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
}

