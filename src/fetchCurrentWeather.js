/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import units from './unit';
import { getSummary, getDetailedMetrics } from './detailedWeather';
import { updateHero } from './updateHero';
import { getForecast } from './forecast';

// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0

function getCurrentWeather(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=${units.unit}`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.main !== undefined) {
        updateHero(response);
        getSummary(response);
        getDetailedMetrics(response);
        getForecast(response.coord.lat, response.coord.lon);
        localStorage.setItem('location', location);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getCurrentWeather };
