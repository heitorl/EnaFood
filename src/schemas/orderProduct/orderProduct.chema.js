import * as yup from "yup";

const createOrderProductSchema = yup.object().shape({
  quantity: yup.number().positive().integer().required(),
});

const serializedOrderProductSchema = yup.object().shape({
  _id: yup.string().required(),
  totalPrice: yup.number().required(),
  quantity: yup.number().required(),
  price: yup.number().required(),
  user: yup.object().shape({
    _id: yup.string().required(),
    name: yup.string().required(),
    isOwner: yup.boolean().required(),
  }),
  orderProducts: yup.object().shape({
    _id: yup.string().required(),
  }),
});

export { createOrderProductSchema, serializedOrderProductSchema };
