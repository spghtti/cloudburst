import { getCurrentWeather } from './fetchCurrentWeather';
import { setLocation } from './search';
import units from './unit';
import { changeUnit } from './changeUnit';
import { storageAvailable } from './localStorage';

const myLocation = localStorage.getItem('location');

if (storageAvailable('localStorage') && localStorage.getItem('location')) {
  getCurrentWeather(myLocation);
} else {
  getCurrentWeather('Reykjavík');
}

const search = document.getElementById('search');
function handleSearch(event) {
  event.preventDefault();
}
search.addEventListener('submit', handleSearch);

const currentUnit = document.getElementById('current-unit');
const unitDiv = document.getElementById('temperature-unit-switch');
currentUnit.innerHTML = `${units.unit}.`;
unitDiv.addEventListener('click', changeUnit);

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', setLocation);
