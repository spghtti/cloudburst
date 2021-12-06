/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */

function capitalize(word) {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getTime(unix) {
  const date = new Date(unix * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  const finalTime = `${hours}:${minutes.substr(-2)}`;

  return finalTime;
}

function getSummary(response) {
  const summary = document.getElementById('summary');
  summary.innerHTML = `${capitalize(
    response.weather[0].description
  )}. The high is ${Math.round(
    response.main.temp_max
  )}° and the low is ${Math.round(response.main.temp_min)}°.`;
}

function getDetailedMetrics(response) {
  const feelsLike = document.getElementById('feels-like');
  const rainChance = document.getElementById('rain-chance');
  const sunriseTime = document.getElementById('sunrise-time');
  const sunsetTime = document.getElementById('sunset-time');
  const wind = document.getElementById('wind');
  const humidity = document.getElementById('humidity');
  const pressure = document.getElementById('pressure');
  const visibility = document.getElementById('visibility');

  feelsLike.innerHTML = `${Math.round(response.main.feels_like)}°`;
  if (response.rain !== undefined) {
    rainChance.innerHTML = `${response.rain['1h'] * 100}%`;
  } else {
    rainChance.innerHTML = '0%';
  }
  sunriseTime.innerHTML = getTime(response.sys.sunrise + response.timezone);
  sunsetTime.innerHTML = getTime(response.sys.sunset + response.timezone);
  wind.innerHTML = `${Math.round(response.wind.speed)} mph`;
  humidity.innerHTML = `${response.main.humidity}%`;
  pressure.innerHTML = `${response.main.pressure} hPa`;
  if (parseInt(response.visibility, 10) === 10000) {
    visibility.innerHTML = '6+ mi';
  } else {
    visibility.innerHTML = `${Math.round(
      response.visibility * 0.0006213712
    )} mi`;
  }
}

export { getSummary, getDetailedMetrics, getTime };
