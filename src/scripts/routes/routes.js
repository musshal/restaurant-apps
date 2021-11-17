import Restaurants from '../views/pages/restaurants';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurants, // default page
  '/restaurant': Restaurants,
  '/favorite': Favorite,
  '/restaurant/:id': Detail,
};

export default routes;
