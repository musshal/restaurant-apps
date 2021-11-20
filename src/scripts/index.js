import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './views/components/app-bar';
import './views/components/hero-element';
import './views/components/search-bar';
import './views/components/loader-restaurants';
import './views/components/foot-bar';
import '@fortawesome/fontawesome-free/js/all';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  open: document.querySelector('#menu_open'),
  drawer: document.querySelector('#drawer'),
  close: document.querySelector('#menu_close'),
  search: document.querySelector('#search'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const search = document.getElementById("search");

// search.addEventListener("keyup", function (event) {
//   const input = search.value.toLowerCase();
//   const restaurants = document.querySelectorAll(".content-item");

//   Array.from(restaurants).forEach((restaurant) => {
//     const restaurantLoc =
//       restaurant.children[1].children[1].children[0].textContent;

//     if (restaurantLoc.toLowerCase().indexOf(input) != -1) {
//       restaurant.style.display = "block";
//     } else {
//       restaurant.style.display = "none";
//     }
//   });
// });
