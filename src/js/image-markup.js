import { formRef, galleryRef, inputRef, buttonRef } from './refs';
import galleryTemplate from '../templates/gallery.hbs';

function imagesMarkup(anyData) {
  const markup = galleryTemplate(anyData);
  galleryRef.insertAdjacentHTML('beforeend', markup);
  // inputRef.value = '';
}

export default imagesMarkup;
