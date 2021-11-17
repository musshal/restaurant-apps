import FavoriteRestaurantIdb from "../data/favoriterestaurant-idb";
import {
  createAddedFavoriteButtonTemplate,
  createAddFavoriteButtonTemplate,
} from "../views/templates/template-creator";

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderAddedFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);

    return !!restaurant;
  },

  _renderAddFavorite() {
    this._favoriteButtonContainer.innerHTML = createAddFavoriteButtonTemplate();

    const favoriteButton = document.querySelector("#favoriteButton");

    favoriteButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderAddedFavorite() {
    this._favoriteButtonContainer.innerHTML =
      createAddedFavoriteButtonTemplate();

    const favoriteButton = document.querySelector("#favoriteButton");

    favoriteButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
