const API_KEY = `33671323-2cce06c3be5a372be22004315`;
const BASE_URL = `https://pixabay.com/api/`;

export function fetchImages(searchQuery, page) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  ).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.statusText}`);
    }

    return response.json();
  });
}
