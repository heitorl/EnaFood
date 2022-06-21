import * as yup from "yup";
const getAllProductSchema = yup.array().of(
  yup.object().shape({
    _id: yup.string(),
    name: yup.string(),
    price: yup.number().positive().required(),
    available: yup.bool(),
    restaurant: yup.object().shape({
      _id: yup.string(),
    }),
  })
);

export default getAllProductSchema;
