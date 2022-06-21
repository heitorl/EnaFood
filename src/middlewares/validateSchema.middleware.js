const validateSchema = (shape) => async (req, res, next) => {
  try {
    const validated = await shape.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    req.validated = validated;

    return next();
  } catch (error) {
    return res.status(400).json({ message: error.errors });
  }
};

export default validateSchema;
