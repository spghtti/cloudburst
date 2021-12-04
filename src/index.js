import { getCurrentWeather } from './fetchCurrentWeather';
import { setLocation } from './search';

getCurrentWeather('Reykjavík');

const search = document.getElementById('search');
function handleSearch(event) {
  event.preventDefault();
}
search.addEventListener('submit', handleSearch);

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', setLocation);
