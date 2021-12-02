// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0

function capitalize(word) {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getCurrentWeather(location) {
  const currentLocation = document.getElementById('current-location');
  const currentTemperature = document.getElementById('current-temperature');
  const currentHigh = document.getElementById('current-high');
  const currentLow = document.getElementById('current-low');
  const currentIcon = document.getElementById('current-weather-icon');
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=imperial`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      currentLocation.innerHTML = response.name;
      currentTemperature.innerHTML = `${Math.round(response.main.temp)}°`;
      currentHigh.innerHTML = `${Math.round(response.main.temp_max)}°`;
      currentLow.innerHTML = ` ${Math.round(response.main.temp_min)}°`;
      currentIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDetails(location) {
  const summary = document.getElementById('summary');
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=imperial`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      summary.innerHTML = `${capitalize(
        response.weather[0].description
      )}. The high is ${Math.round(
        response.main.temp_max
      )}° and the low is ${Math.round(response.main.temp_min)}°.`;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getCurrentWeather, getDetails };
