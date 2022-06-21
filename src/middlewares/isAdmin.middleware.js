const isAdmin = async (req, res, next) => {
  if (!req.decoded.isAdmin) {
    return res.status(401).json({ message: "Permission denied" });
  }

  return next();
};

export default isAdmin;
