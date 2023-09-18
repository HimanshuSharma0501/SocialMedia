//isme api ke routes banenge jo controller me bnaye gaye function ka istemal karenge

//inke bina routes nahi bnaye jaa sakte
const express = require("express");
const router = express.Router();

//ye functions controller se laye hai
const {
  createPost,
  likeAndUnlikePost,
  deletePost,
  updateCaption,
  commentOnPost,
  deleteComment,
} = require("../controllers/Post");
const { isAuth } = require("../middlewares/auth.js");
const { getPostOfFollowing } = require("../controllers/Post");
//yaha par routes bnaye hai
router.route("/post/upload").post(isAuth, createPost);
router
  .route("/post/:id")
  .get(isAuth, likeAndUnlikePost)
  .put(isAuth, updateCaption)
  .delete(isAuth, deletePost);

router.route("/posts").get(isAuth, getPostOfFollowing);
router
  .route("/post/comment/:id")
  .put(isAuth, commentOnPost)
  .delete(isAuth, deleteComment);

module.exports = router;
