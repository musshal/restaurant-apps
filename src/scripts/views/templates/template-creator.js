import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
  <div class="content-item" id="${restaurant.id}" tabIndex="0">
    <img src="${CONFIG.BASE_IMAGE_SM_URL}/${restaurant.pictureId}" alt="">
    <div class="content-item__info">
      <h1>${restaurant.name}</h1>
      <div class="loc__rate">
        <h2 id="loc" class="loc">📍 ${restaurant.city}</h2>
        <h3><span class="star">&#9733;</span> ${restaurant.rating}</h3>
      </div>
      <p>${restaurant.description}</p>
      <button onclick="window.location.href='/#/restaurant/${restaurant.id}'">Lihat Selengkapnya</button>
    </div>
  </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__container">
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_MD_URL}/${
  restaurant.pictureId
}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <div class="restaurant__header">
        <h1 class="restaurant__name">${restaurant.name}</h1>
        <h5>${restaurant.categories
          .map((category) => `<span>${category.name}</span>`)
          .join(" ")}</h5>
      </div>
      <div class=loc__rate>
        <h2 id="loc" class="loc">📍${restaurant.city}</h2>
        <h3><span class="star">&#9733;</span> ${restaurant.rating}</h3>
      </div>
      <h4>Deskripsi</h4>
      <p>${restaurant.description}</p>
      <a href="###" class="favorite">Tambahkan ke Favorite</a>
    </div>
  </div>
  <div class="restaurant__menu">
    <h1>Menu</h1>
    <div class="restaurant__menu-container">
      <div class="restaurant__menu-container-makanan">
        <h2>Makanan</h2>
        <ul>${restaurant.menus.foods
          .map((food) => `<li>${food.name}</li>`)
          .join("")}</ul>
      </div>
      <div class="restaurant__menu-container-minuman">
        <h2>Minuman</h2>
        <ul>${restaurant.menus.drinks
          .map((drink) => `<li>${drink.name}</li>`)
          .join("")}</ul>
      </div>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h1>Reviews</h1>
      <div class="customer__review-container">
      ${restaurant.customerReviews
        .map(
          (customerReview) => `
            <div class="customer__review-subcontainer">
              <div class="customer__review-header">
                <h3>${customerReview.name}</h3>
                <p>${customerReview.date}</p>
              </div>
              <p class="review__content">${customerReview.review}</p>
            </div>`
        )
        .join("")}
      </div>
  </div>`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
