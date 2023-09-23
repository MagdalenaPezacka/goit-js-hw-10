import axios from 'axios';

// const KEY =
//   'live_lpcEIuRV1o0kxi03DTtdluT1YxQr8PKJO2uXyOvAiSx6k84lp4slwEveDCMrENxS';

// const URL = 'https://api.thecatapi.com/v1';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  "live_lpcEIuRV1o0kxi03DTtdluT1YxQr8PKJO2uXyOvAiSx6k84lp4slwEveDCMrENxS";

// const axios = require('axios');
// GET api.thecatapi.com/v1/breeds;


export function fetchBreeds() {
  // console.log(response);
  return axios
    .get('/breeds')
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get('/images/search?breed_ids='+ breedId)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log('error', error);
    });
}

// axios.get('https://api.thecatapi.com/v1/breeds')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// fetch('/api/content/all')
//     .then(function (response) {
//         // response jest instancją interfejsu Response
//         if (response.status !== 200) {
//             return Promise.reject('Zapytanie się nie powiodło');
//         }
 
//         // zwracamy obiekt typu Promise zwracający dane w postaci JSON
//         return response.json();
//     }
//   )
//    .then(this._doSomethingWithJson)
//    .catch(this._catchError);


// const URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_C9iEtPg54awJpTo4QX7RoGFsgMBvEc90dWA73rvw3AuZJatT06iGrkqCDbqdNZmr';

