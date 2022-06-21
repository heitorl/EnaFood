class ErrorHandler {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.error = message;
  }
}

const errorHandler = (err, res) => {
  if (err instanceof ErrorHandler) {
    return res.status(err.statusCode).json({ error: err.error });
  }

  return res.status(500).json({ message: "Internal server error." });
};

export { ErrorHandler, errorHandler };
