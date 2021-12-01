// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0

function getCurrentWeather(location) {
  const currentLocation = document.getElementById('current-location');
  const currentTemperature = document.getElementById('current-temperature');
  const currentHigh = document.getElementById('current-high');
  const currentLow = document.getElementById('current-low');
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=imperial`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      currentLocation.innerHTML = response.name;
      currentTemperature.innerHTML = `${Math.round(response.main.temp)}°`;
      currentHigh.innerHTML = `${Math.round(response.main.temp_max)}°`;
      currentLow.innerHTML = `${Math.round(response.main.temp_min)}°`;
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getCurrentWeather };
