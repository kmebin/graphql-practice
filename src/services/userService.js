const User = require("../models/User");

/**
 * @유저_생성
 */
const createUser = async (args) => {
  try {
    const user = new User(args.input);

    await user.save();

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @유저_수정
 */
const updateUser = async (userId, args) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, args.input, { new: true });

    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @전체_유저_조회
 */
const getUsers = async () => {
  try {
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @특정_유저_조회
 */
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @유저_삭제
 */
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { createUser, updateUser, getUsers, getUserById, deleteUser };
