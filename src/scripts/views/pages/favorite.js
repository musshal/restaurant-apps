import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Restoran Favorit</h1>
          <search-bar></search-bar>
        </div>
        <div id="restaurants" class="restaurants"></div>
        <div id="warning" class="warning" tabIndex="0"></div>
      </section>`;
  },

  async afterRender() {
    const search = document.querySelector('#search');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
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

    if (restaurants.length === 0) {
      warning.innerHTML = `
        Kamu belum menambahkan restoran favoritmu, skuy tambahkan restoran favoritmu sekarang!`;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
