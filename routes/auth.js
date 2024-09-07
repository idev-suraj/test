const router = require("express").Router();
const {
  registerUser,
  tokenManage,
  logout,
  googleoauth,
} = require("../controllers/auth");
const { loginUser,loginUserCap } = require("../controllers/auth");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/login-cap").post(loginUserCap);

router.route("/token").post(tokenManage);

router.route("/logout").post(isAuthenticated, logout);

router.route("/google/oauth").get(googleoauth);

module.exports = router;
