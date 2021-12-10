import FavoriteButtonInitiator from "../src/scripts/utils/favorite-button-initiator";

describe("Favoriting a Restaurant", () => {
  it("should show the favorite button when the restaurant has not been favorited before", async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
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
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
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
});
