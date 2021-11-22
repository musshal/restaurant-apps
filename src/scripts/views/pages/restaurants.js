import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Daftar Restoran</h1>
          <search-bar></search-bar>
        </div>
        <loader-restaurants></loader-restaurants>
        <div id="restaurants" class="restaurants"></div>
        <div id="warning" class="warning"></div>
      </section>`;
  },

  async afterRender() {
    const search = document.querySelector('#search');
    const loading = document.querySelector('loader-restaurants');
    const restaurantsContainer = document.querySelector('#restaurants');
    const warning = document.querySelector('#warning');

    /* Pencarian tanpa API */
    search.addEventListener('keyup', () => {
      const input = search.value.toLowerCase();
      const allRestaurants = document.querySelectorAll('.content-item');

      allRestaurants.forEach((restaurant) => {
        const restaurantLoc = restaurant.children[1].children[1].children[0].textContent;

        if (restaurantLoc.toLowerCase().indexOf(input) !== -1) {
          restaurant.style.display = 'block';
        } else {
          restaurant.style.display = 'none';
        }
      });
    });

    try {
      const data = await RestaurantSource.getRestaurants();
      const { restaurants } = data;

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });

      loading.style.display = 'none';
    } catch (err) {
      loading.style.display = 'none';
      warning.innerHTML = `${err.message}`;
    }

    /* Pencarian menggunakan API */
    // const searchBar = document.querySelector("search-bar");

    // const onInputSearchKeyup = async () => {
    //   try {
    //     if (searchBar.value) {
    //       const data = await RestaurantSource.searchRestaurant(searchBar.value);
    //       const { restaurants } = data;

    //       console.log(restaurants);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //     loading.style.display = "none";
    //     warning.innerHTML = `${err.message}`;
    //   }
    // };

    // searchBar.keyupEvent = onInputSearchKeyup;
  },
};

export default Restaurants;
