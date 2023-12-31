import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';

const selectBtn = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// selectBtn.classList.add('is-hidden');
loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
// catInfo.classList.add('is-hidden');

let arrayBreedsId = [{'placeholder': true, 'text': ''}];

const breedSelect = () => {
// loader.classList.replace('loader', 'is-hidden');
  // selectBtn.classList.remove('is-hidden');
  fetchBreeds()
    .then(data => {
      data.forEach(element => {
        arrayBreedsId.push({ text: element.name, value: element.id });
      });
      new SlimSelect({
        select: '#single',
        data: arrayBreedsId
      });
    })
    .catch(onFetchError)
    // .finally(() => loader.classList.add('is-hidden'));
};

document.addEventListener('DOMContentLoaded', breedSelect);


function onSelectBreed(event) {
 
  selectBtn.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');

  const breedId = event.currentTarget.value;

    if (breedId !== '') {
       loader.classList.replace('is-hidden', 'loader');
        fetchCatByBreed(breedId)
        .then(data => {
          loader.classList.replace('loader', 'is-hidden');
          // select.classList.remove('is-hidden');
          const { url, breeds } = data[0];

          catInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
          catInfo.classList.remove('is-hidden');
        })
        .catch(onFetchError)
        .finally(() => loader.classList.replace('loader', 'is-hidden'));
    }
  }


selectBtn.addEventListener('change', onSelectBreed);

function onFetchError(error) {
  // selectBtn.classList.add('is-hidden');
  // loader.classList.add('is-hidden');

  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', {
    position: 'center-center',
    timeout: 3000,
    width: '400px',
    fontSize: '24px',

  });
  selectBtn.classList.remove('is-hidden')
}


//
//konspekt
// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

//function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// const breedSelect = breeds => {
//   fetchBreeds();
//   const markup = breeds
//     .map(breed => {
//       return `<option value="${breed.id}">${breed.name}</option>`;
//     })
//     .join('');
//   selectBtn.insertAdjacentHTML('beforeend', markup);
//   new SlimSelect({
//     select: '#single',
//   })
//     .catch(onFetchError)
//     .finally(() => loader.classList.remove('is-hidden'));
// };