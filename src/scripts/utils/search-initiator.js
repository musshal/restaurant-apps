const SearchInitiator = {
  init({ search }) {
    search.addEventListener("keyup", (event) => {
      const input = search.value.toLowerCase();
      const restaurants = document.querySelectorAll(".content-item");

      Array.from(restaurants).forEach((restaurant) => {
        const restaurantLoc =
          restaurant.children[1].children[1].children[0].textContent;

        if (restaurantLoc.toLowerCase().indexOf(input) != -1) {
          restaurant.style.display = "block";
        } else {
          restaurant.style.display = "none";
        }
      });
    });
  },
};

export default SearchInitiator;
