import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ userId: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const updateUser = async (req, res) => {
  const { userId } = req.user;
  const obj = { ...req.body };

  delete obj.password;
  delete obj.role;
  delete obj.userId;

  try {
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
    }

    Object.assign(user, obj);
    await user.save();

    const updatedUser = user.toJSON();

    res
      .status(StatusCodes.OK)
      .json({ msg: "User updated successfully", user: updatedUser });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Failed to update user", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const removedUser = await User.findOneAndDelete({ userId: req.user.userId });
  if (!removedUser) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
  }
  res.status(StatusCodes.OK).json({ msg: "User deleted successfully" });
};
