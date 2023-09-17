import axios from 'axios';

const KEY =
  'live_QIbGAxms9ohf21jBpwKrD59jfoOi2LMcUtATrwjB0LDTuntcDcZx62HY43Y2dawE';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = KEY;

// GET api.thecatapi.com/v1/breeds;
export function fetchBreeds() {
  fetch(axios('/breeds/search?x-api-key=${KEY}'))
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}

export function fetchCatByBreed(breedId) {
  fetch(axios('/images/search?x-api-key=${KEY}&breed_ids=${breedId}'))
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
}
// const URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr';
