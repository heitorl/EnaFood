import * as yup from "yup";

const createProductsSchema = yup.object().shape({
  products: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          name: yup.string().lowercase().required(),
          price: yup.number().positive().required(),
          quantityInStock: yup.number().positive().required(),
          available: yup.bool().default(true).optional(),
        })
        .required()
    )
    .required(),
});

const serializedCreatedProductsSchema = yup.array().of(
  yup.object().shape({
    _id: yup.string().required(),
    name: yup.string().lowercase().required(),
    price: yup.number().positive().required(),
    quantityInStock: yup.number().positive().required(),
    available: yup.bool(),
  })
);

export { createProductsSchema, serializedCreatedProductsSchema };
