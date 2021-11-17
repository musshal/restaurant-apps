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
      </section>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
