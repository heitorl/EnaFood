import { restaurantsService } from "../services";

class RestaurantController {
  createRestaurant = async (req, res) => {
    const restaurant = await restaurantsService.createRestaurant(req);

    return res.status(201).json({ restaurant });
  };

  getAll = async (req, res) => {
    const restaurants = await restaurantsService.getAll(req);

    return res.status(200).json({ restaurants });
  };
}

export default new RestaurantController();
