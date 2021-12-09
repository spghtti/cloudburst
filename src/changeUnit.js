/* eslint-disable import/prefer-default-export */
import units from './unit';
import { getCurrentWeather } from './fetchCurrentWeather';

function changeUnit() {
  const location = document.getElementById('current-location').innerHTML;
  if (units.unit === 'imperial') {
    units.unit = 'metric';
  } else {
    units.unit = 'imperial';
  }
  getCurrentWeather(location);
  const currentUnit = document.getElementById('current-unit');
  currentUnit.innerHTML = `${units.unit}.`;
}

export { changeUnit };
