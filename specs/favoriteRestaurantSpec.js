import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator";
import FavoriteRestaurantIdb from "../src/scripts/data/favoriterestaurant-idb";

describe("Favoriting a Restaurant", () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it("should show the favorite button when the restaurant has not been favorited before", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unfavorite button when the restaurant has not been favorited before", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to favorite the restaurant", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {
        id: 1,
      },
    });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already favorited", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {
        id: 1,
      },
    });

    // tambahkan restaurant dengan id 1 ke daftar restaurant yang difavoritkan
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // simulasikan pengguna menekan tombol favorite restaurant
    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));
    // tidak ada restaurant yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        "#favoriteButtonContainer"
      ),
      restaurant: {},
    });

    document.querySelector("#favoriteButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
