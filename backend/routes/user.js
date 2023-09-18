//isme api ke routes banenge jo controller me bnaye gaye function ka istemal karenge

//inke bina routes nahi bnaye jaa sakte
const express = require("express");
const router = express.Router();

//ye functions controller se laye hai
const {
  register,
  login,
  followUser,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getMyPosts,
  getUserPosts,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");
const { getPostOfFollowing } = require("../controllers/Post");
//yaha par routes bnaye
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/follow/:id").get(isAuth, followUser);
router.route("/update/password").get(isAuth, updatePassword);
router.route("/update/profile").get(isAuth, updateProfile);

//
router.route("/delete/me").delete(isAuth, deleteMyProfile);
router.route("/me").get(isAuth, myProfile);

router.route("/my/posts").get(isAuth, getMyPosts);

router.route("/userposts/:id").get(isAuth, getUserPosts);

router.route("/user/:id").get(isAuth, getUserProfile);

router.route("/users").get(isAuth, getAllUsers);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
