import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"

// @desc Auth user & get token
// @route POST /api/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user")
})

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user")
})

// @desc Logout user / clear cookie
// @route POST /api/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user")
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user user")
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user user")
})

// @desc Get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users")
})

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get user by id")
})

// @desc Delete users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users")
})

// @desc Update users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user")
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUserByID,
  getUsers,
  updateUserProfile,
  deleteUser,
  updateUser,
}
