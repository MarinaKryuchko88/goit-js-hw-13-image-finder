import './styles.css';
import {
  formRef,
  galleryRef,
  inputRef,
  buttonRef,
  labelBtn,
  spinnerRef,
} from './js/refs';
import debounce from 'lodash.debounce';
import apiService from './js/apiService'; // импортировали объект, в котором ф-ция fetchImages является его методом. Поэтому дальше чтобы обратиться к этой ф-ции пишем apiService.fetchImages;
import imagesMarkup from './js/image-markup';
import loadMoreBtn from './js/load-more-btn';

// (let queryImages = ''; // эта переменная для того, чтобы в ней хранился введенный запрос;
// // когда в инпуте хотя бы 1 раз произойдет запрос, тогда в этой переменной
// // уже будет записан этот запрос и мы можем передать его при нажатии на кнопку Показать еще.
// let page = 1; // эти переменные не должны висеть во внешнем коде (в логике), поэтому мы их переносим в объект apiService, в котором они будут его свойствами.)

inputRef.addEventListener(
  'input',
  debounce(event => {
    event.preventDefault();
    inputRef.textContent = inputRef.value;
    apiService.query = inputRef.textContent; // записываем значение в queryImages объекта apiService через set.
    apiService.resetPage();

    loadMoreBtn.show();
    loadMoreBtn.disable();

    apiService.fetchImages().then(data => {
      if (inputRef.textContent === ' ') {
        return;
      }
      imagesMarkup(data);

      loadMoreBtn.enable();
    });

    galleryRef.innerHTML = '';
    inputRef.value = ''; // inputRef.reset(); не срабатывает
  }, 600),
);

buttonRef.addEventListener('click', event => {
  loadMoreBtn.disable();

  apiService.fetchImages().then(data => {
    imagesMarkup(data);

    loadMoreBtn.enable();

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
