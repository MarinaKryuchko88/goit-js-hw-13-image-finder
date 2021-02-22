import { inputEl, countriesListEl, countryName } from './refs';
import countriesTpl from '../templates/countries.hbs';
import countryInformation from '../templates/countryInformation.hbs';

function countriesMarkup(name) {
  const markup = countriesTpl(name);
  countriesListEl.insertAdjacentHTML('beforeend', markup);
}
function oneCountryMarkup(name) {
  const markup = countryInformation(name);
  countriesListEl.insertAdjacentHTML('beforeend', markup);
}

export { countriesMarkup, oneCountryMarkup };
