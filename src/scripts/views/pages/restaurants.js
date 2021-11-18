import RestaurantSource from '../../data/restaurant-source';
import {
  createLoaderRestaurantsTemplate,
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Daftar Restoran</h1>
          <search-bar></search-bar>
        </div>
        <div id="loading"></div>
        <div id="restaurants" class="restaurants"></div>
        <div id="warning" class="warning"></div>
      </section>`;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const restaurantsContainer = document.querySelector('#restaurants');
    const warning = document.querySelector('#warning');

    loading.innerHTML = createLoaderRestaurantsTemplate();

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
