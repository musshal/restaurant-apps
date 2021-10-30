import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "./components/app-bar.js";
import "./components/hero-element.js";
import "./components/search-bar.js";
import "./components/restaurant-list.js";
import "./components/foot-bar.js";

const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");
const main = document.querySelector("body");
const inputSearch = document.getElementById("searchElement");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

main.addEventListener("click", function (event) {
  drawer.classList.remove("open");
});

inputSearch.addEventListener("keyup", function (event) {
  const search = inputSearch.value.toLowerCase();
  const restaurants = document.querySelectorAll(".content-item");

  Array.from(restaurants).forEach((restaurant) => {
    const restaurantLoc =
      restaurant.children[1].children[1].children[0].textContent;

    if (restaurantLoc.toLowerCase().indexOf(search) != -1) {
      restaurant.style.display = "block";
    } else {
      restaurant.style.display = "none";
    }
  });
});
