import { getCurrentWeather } from './fetchCurrentWeather';
import { setLocation } from './search';

getCurrentWeather('New York');

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', setLocation);
