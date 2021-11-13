import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/app-bar.js";
import "./components/hero-element.js";
import "./components/search-bar.js";
import "./components/restaurant-list.js";
import "./components/foot-bar.js";

const menuOpen = document.querySelector("#menu_open");
const menuClose = document.querySelector("#menu_close");
const drawer = document.querySelector("#drawer");
const inputSearch = document.getElementById("searchElement");

menuOpen.addEventListener("click", function (event) {
  drawer.classList.add("open");
  event.stopPropagation();
});

menuClose.addEventListener("click", function (event) {
  drawer.classList.remove("open");
  event.stopPropagation();
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
