import User from "../models/UserModel.js";

// verify the user
export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Please login to your account" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

// admin only 
export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.role !== "admin")
    return res.status(404).json({ message: "Access denied" });
  next();
};
