/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */

import { getSummary, getDetailedMetrics } from './detailedWeather';
import { updateHero } from './updateHero';

// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0

function getCurrentWeather(location) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=e6ea60ae42c4f7ea5dbffec273b1f3a0&units=imperial`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.main !== undefined) {
        updateHero(response);
        getSummary(response);
        getDetailedMetrics(response);
        console.log(response);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getCurrentWeather };
