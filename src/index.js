import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import './css/common.css';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


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
