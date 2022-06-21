import * as yup from "yup";

const getAllRestaurantsSchema = yup.array().of(
  yup.object().shape({
    _id: yup.string(),
    name: yup.string(),
    user: yup.object().shape({
      _id: yup.string(),
      email: yup.string(),
    }),
  })
);

export default getAllRestaurantsSchema;
