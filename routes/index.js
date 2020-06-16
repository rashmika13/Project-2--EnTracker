var express = require("express");
var router = express.Router();
const passport = require("passport");

// GET home page
router.get("/", function (req, res) {
  res.render("index", { user: req.user });
});

// Google login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback to home page
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/shows",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
