import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ userId: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  //   const updatedUser = await User.findOneAndUpdate(req.user.userId, req.body);
  const updatedUser = await User.findOneAndUpdate(req.user.userId, obj);

  res.status(StatusCodes.OK).json({ msg: "user updated" });
};

export const deleteUser = async (req, res) => {
  const removedUser = await User.findOneAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "user deleted", user: removedUser });
};
