// app ID e6ea60ae42c4f7ea5dbffec273b1f3a0
import units from './unit';

function fillHours(currentUnixTime) {
  const headlines = document.getElementsByClassName('hourly-headline');
  let newTime = currentUnixTime;

  for (let i = 0; i < 12; i++) {
    newTime += 60 * 60;
    const date = new Date(newTime * 1000);
    const hours = date.getHours();
    headlines[i].innerHTML = `${hours}:00`;
  }
}

function setHourlyWeather(response) {
  const icons = document.getElementsByClassName('hourly-weather-icon');
  const temperatures = document.getElementsByClassName('hourly-temperature');
  for (let i = 0; i < 12; i++) {
    icons[
      i
    ].src = `http://openweathermap.org/img/wn/${response.hourly[i].weather[0].icon}@2x.png`;
    temperatures[i].innerHTML = `${Math.round(response.hourly[i].temp)}°`;
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
      setHourlyWeather(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getForecast };
