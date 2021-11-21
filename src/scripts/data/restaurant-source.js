import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();

    return responseJson;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
    const responseJson = await response.json();

    return responseJson;
  }

  static async postRestaurantReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();

    return responseJson;
  }
}

export default RestaurantSource;
