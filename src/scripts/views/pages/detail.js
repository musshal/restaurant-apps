import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import FavoriteButtonPresenter from "../../utils/favorite-button-presenter";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Detail Restoran</h1>
          <a href="/#/restaurant">Kembali</a>
        </div>
        <div id="loading" class="loading"></div>
        <div id="restaurant" class="restaurant"></div>
        <div id="warning" class="warning">
        <div id="favoriteButtonContainer"></div>
      </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector("#loading");
    const restaurantContainer = document.querySelector("#restaurant");
    const warning = document.querySelector("#warning");

    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);
      const { restaurant } = data;

      restaurantContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);

      this._postRestaurantReview(url);

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector(
          "#favoriteButtonContainer"
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

      loading.style.display = "none";
    } catch (err) {
      loading.style.display = "none";
      warning.innerHTML = `${err.message}`;
    }
  },

  _postRestaurantReview(url) {
    const reviewButton = document.querySelector("#reviewButton");
    const inputName = document.querySelector("#name");
    const inputReview = document.querySelector("#review");

    reviewButton.addEventListener("click", async () => {
      if (inputName.value !== "" && inputReview.value !== "") {
        const consumerReview = {
          id: url.id,
          name: inputName.value,
          review: inputReview.value,
        };

        await RestaurantSource.postRestaurantReview(consumerReview);

        alert("Review berhasil terkirim");
      } else {
        alert("Kolom tidak boleh kosong");
      }
    });
  },
};

export default Detail;
