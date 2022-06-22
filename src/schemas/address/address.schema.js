import * as yup from "yup";

const createAddressSchema = yup.object().shape({
  street: yup.string().required(),
  houseNumber: yup.number().required(),
  city: yup.string().required(),
});

const serializedCreateAddressSchema = yup.object().shape({
  _id: yup.string().required(),
  street: yup.string().required(),
  houseNumber: yup.number().required(),
  city: yup.string().required(),
  user: yup.object().shape({
    _id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    isOwner: yup.boolean().required(),
  }),
});

export { createAddressSchema, serializedCreateAddressSchema };
