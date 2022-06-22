const isOwner = async (req, res, next) => {
  if (!req.decoded.isOwner) {
    return res.status(401).json({ message: "Permission denied" });
  }

  return next();
};

export default isOwner;
