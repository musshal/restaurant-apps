const assert = require("assert");

Feature("Favoriting Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorited restaurants", ({ I }) => {
  I.seeElement(".warning");
  I.see(
    "Kamu belum menambahkan restoran favoritmu, skuy tambahkan restoran favoritmu sekarang!",
    ".warning"
  );
});

Scenario("favoriting one restaurant", async ({ I }) => {
  I.see(
    "Kamu belum menambahkan restoran favoritmu, skuy tambahkan restoran favoritmu sekarang!",
    ".warning"
  );

  I.amOnPage("/");

  I.seeElement(".content-item__info button");

  const firstRestaurant = locate(".content-item__info button").first();
  const firstRestaurantDetail = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".content-item");
  const favoritedRestaurantDetail = await I.grabTextFrom(
    ".content-item__info button"
  );

  assert.strictEqual(firstRestaurantDetail, favoritedRestaurantDetail);
});

Scenario("unfavoriting one restaurant", async ({ I }) => {
  I.see(
    "Kamu belum menambahkan restoran favoritmu, skuy tambahkan restoran favoritmu sekarang!",
    ".warning"
  );

  I.amOnPage("/");

  I.seeElement(".content-item__info button");
  const firstRestaurant = locate(".content-item__info button").first();
  const firstRestaurantDetail = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".content-item");
  const favoritedRestaurantDetail = await I.grabTextFrom(
    ".content-item__info button"
  );

  assert.strictEqual(firstRestaurantDetail, favoritedRestaurantDetail);

  I.click(favoritedRestaurantDetail);

  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".content-item");
  I.dontSeeElement(".content-item__info button");
});
