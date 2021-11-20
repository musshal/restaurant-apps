import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

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

  static async postRestaurantReview() {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded' || 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(),
    });
    const responseJson = await response.json();

    return responseJson;
  }
}

export default RestaurantSource;
