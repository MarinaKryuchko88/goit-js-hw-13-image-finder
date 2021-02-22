import { inputEl, countriesListEl } from './js/refs';
import { countriesMarkup, oneCountryMarkup } from './js/articles-markup';
import debounce from 'lodash.debounce';
import error from './js/notifications';
// import fetchCountries from './js/fetch-countries';
import './js/notifications';

inputEl.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    // console.log(event.target.value); // одно и то же // console.log(inputEl.value);

    inputEl.textContent = inputEl.value;
    const countryName = inputEl.textContent;

    if (countryName === ' ') {
      return;
    }

    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length === 1) {
          oneCountryMarkup(data);
          inputEl.value = '';
        }
        if (data.length >= 2 && data.length <= 10) {
          countriesMarkup(data); // потому что data у нас - это уже массив объектов.
        }
        if (data.length > 10) {
          error({
            text: 'Too many matches found. Please enter a more specific query!',
          });
        }
      })
      .catch(error => console.log(error));

    countriesListEl.innerHTML = '';
  }, 600),
);

// fetchCountries(countryName).then(data => {
//   console.log(data);
//   if (data.length === 1) {
//     oneCountryMarkup(data);
//   }
//   if (data.length >= 2 && data.length <= 10) {
//     countriesMarkup(data); // потому что data у нас - это уже массив объектов.
//   }
//   if (data.length > 10) {
//     error({
//       text: 'Too many matches found. Please enter a more specific query!',
//     });
//   }
// inputEl.value = '';

// console.log(data.length);
// countriesListEl.innerHTML = '';
// });
