import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/app-bar.js";
import "./components/hero-element.js";
import "./components/search-bar.js";
import "./components/foot-bar.js";
import App from "./views/app";

const app = new App({
  open: document.querySelector("#menu_open"),
  drawer: document.querySelector("#drawer"),
  close: document.querySelector("#menu_close"),
  search: document.querySelector("#search"),
  content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
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
