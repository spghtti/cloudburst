/* eslint-disable import/prefer-default-export */
function updateHero(response) {
  const currentLocation = document.getElementById('current-location');
  const currentTemperature = document.getElementById('current-temperature');
  const currentHigh = document.getElementById('current-high');
  const currentLow = document.getElementById('current-low');
  const currentIcon = document.getElementById('current-weather-icon');

  currentLocation.innerHTML = response.name;
  currentTemperature.innerHTML = `${Math.round(response.main.temp)}°`;
  currentHigh.innerHTML = `${Math.round(response.main.temp_max)}°`;
  currentLow.innerHTML = ` ${Math.round(response.main.temp_min)}°`;
  currentIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
}

export { updateHero };
