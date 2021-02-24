import {
  formRef,
  galleryRef,
  inputRef,
  buttonRef,
  labelBtn,
  spinnerRef,
} from './refs';

const loadMoreBtn = {
  enable() {
    buttonRef.disabled = false;
    labelBtn.textContent = 'Показать еще';
    spinnerRef.classList.add('is-hidden');
  },
  disable() {
    buttonRef.disabled = true;
    labelBtn.textContent = 'Загружаем ...';
    spinnerRef.classList.remove('is-hidden');
  },
  show() {
    buttonRef.classList.remove('is-hidden');
  },
};

export default loadMoreBtn;
