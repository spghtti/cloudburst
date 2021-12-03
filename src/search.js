/* eslint-disable import/prefer-default-export */
import { getCurrentWeather } from './fetchCurrentWeather';

function setLocation() {
  getCurrentWeather(document.getElementById('searchbar').value);
  document.getElementById('searchbar').value = '';
}

export { setLocation };
