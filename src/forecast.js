// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0
import units from './unit';
import { getTime } from './detailedWeather';

function fillHours(currentUnixTime) {
  let newTime = currentUnixTime;

  for (let i = 1; i <= 12; i++) {
    newTime += 60 * 60;
    const date = new Date(newTime * 1000);
    const hours = date.getHours();
    console.log(hours);
  }
}

function getForecast(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=${units.unit}&appid=e6ea60ae42c4f7ea5dbffec273b1f3a0`,
    { mode: 'cors' }
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      fillHours(response.current.dt + response.timezone_offset);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getForecast };
