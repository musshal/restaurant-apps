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
        <div id="restaurants" class="restaurants"></div>
      </section>`;
  },

  async afterRender() {
    const data = await RestaurantSource.getRestaurants();
    const { restaurants } = data;
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
