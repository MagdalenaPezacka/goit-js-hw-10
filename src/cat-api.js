import axios from 'axios';

// const KEY =
//   'live_6g926rqVKnrXSE0Drtte1twlvfw3415pXypm2tr8aqQ1j76pyKlZjr9jxO7NVfuL';

// const URL = 'https://api.thecatapi.com/v1';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_6g926rqVKnrXSE0Drtte1twlvfw3415pXypm2tr8aqQ1j76pyKlZjr9jxO7NVfuL';

// const axios = require('axios');
// GET api.thecatapi.com/v1/breeds;
export function fetchBreeds() {
  axios
    .get('/breeds')
    .then(response => {
      if (response.ok) {
        console.log(response.data);
        return response.data;
      }
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function fetchCatByBreed(breedId) {
  axios
    .get('/images/search?breed_ids=' + breedId)
    .then(response => {
      if (response.ok) {
        console.log(response.data);
        return response.data;
      }
    })
    .catch(error => {
      console.log('error', error);
    });
}
// const URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr';

