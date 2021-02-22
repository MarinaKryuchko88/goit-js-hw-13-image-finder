import { inputEl, countriesListEl } from './refs';

inputEl.textContent = inputEl.value;
const countryName = inputEl.textContent;

function fetchCountries(countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

  // поставив return, возвращаем из этой функции promise с data.articles, тогда в месте ее вызова можем сделать then;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

export default fetchCountries;
