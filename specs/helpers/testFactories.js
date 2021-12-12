import FavoriteRestaurantIdb from "../../src/scripts/data/favoriterestaurant-idb";
import FavoriteButtonPresenter from "../../src/scripts/utils/favorite-button-presenter";

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector("#favoriteButtonContainer"),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
