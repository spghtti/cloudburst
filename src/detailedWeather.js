/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */

function capitalize(word) {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getSummary(response) {
  const summary = document.getElementById('summary');
  summary.innerHTML = `${capitalize(
    response.weather[0].description
  )}. The high is ${Math.round(
    response.main.temp_max
  )}° and the low is ${Math.round(response.main.temp_min)}°.`;
}

export { getSummary };
