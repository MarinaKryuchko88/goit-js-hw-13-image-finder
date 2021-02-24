export default {
  queryImages: '', // возможно напутано с queryImages и searchQuery. Если что - проверить где что должно быть!
  page: 1,
  fetchImages(queryImages) {
    const apiKey = '20385200-70fdb9b9014043ae855fde35b';
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=${this.page}&per_page=12&q=${this.queryImages}&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.page += 1;
        return data.hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.queryImages;
  },
  set query(value) {
    this.queryImages = value;
  },
};
