import * as yup from "yup";

const createRestaurantSchema = yup.object().shape({
  name: yup.string().required(),
});

const serializedCreatedRestaurant = yup.object().shape({
  _id: yup.string().required(),
  name: yup.string().required(),
  user: yup.object().shape({
    _id: yup.string().required(),
  }),
});

export { createRestaurantSchema, serializedCreatedRestaurant };
