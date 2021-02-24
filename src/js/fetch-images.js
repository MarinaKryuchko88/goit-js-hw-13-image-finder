function fetchImages(searchQuery, page = 1) {
  const apiKey = '20385200-70fdb9b9014043ae855fde35b';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${searchQuery}&key=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.hits)
    .catch(error => console.log(error));
}

export default fetchImages;
