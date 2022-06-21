import { User } from "../models";
import {
  getAllRestaurantsSchema,
  serializedCreatedRestaurant,
} from "../schemas";
import { Restaurants } from "../models";

class restaurantService {
  createRestaurant = async (req) => {
    const user = await User.findOne({
      _id: req.decoded._id,
    });

    const restaurant = await Restaurants.create({
      ...req.validated,
      user: user._id,
    });

    user["restaurants"].push(restaurant._id);
    console.log(user);

    user.save();

    return await serializedCreatedRestaurant.validate(restaurant, {
      stripUnknown: true,
    });
  };

  getAll = async () => {
    const restaurants = await Restaurants.find();

    return await getAllRestaurantsSchema.validate(restaurants, {
      stripUnknown: true,
    });
  };
}

export default new restaurantService();
