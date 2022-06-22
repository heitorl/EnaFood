import * as yup from "yup";

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().lowercase().required(),
  password: yup.string().required(),
  isOwner: yup.boolean().default(false).optional(),
});

const serializedCreateUserSchema = yup.object().shape({
  _id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  isOwner: yup.boolean().required(),
});

export { createUserSchema, serializedCreateUserSchema };
