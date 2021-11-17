import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Detail Restoran</h1>
          <a href="/#/restaurant">Kembali</a>
        </div>
        <div id="restaurant"></div>
        <div id="favoriteButtonContainer"></div>
      </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.getRestaurantDetail(url.id);
    const { restaurant } = data;
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
