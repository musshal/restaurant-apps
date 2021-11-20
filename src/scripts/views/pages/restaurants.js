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
    const loading = document.querySelector('loader-restaurants');
    const restaurantsContainer = document.querySelector('#restaurants');
    const warning = document.querySelector('#warning');

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
  },
};

export default Restaurants;
