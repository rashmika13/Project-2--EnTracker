var express = require("express");
var router = express.Router();
var showsCtrl = require("../controllers/shows");
const apiCtrl = require("../controllers/api/details");
const commentsCtrl = require("../controllers/comments");

// login page route
router.get("/", isLoggedIn, showsCtrl.show);

// add  and delete show routes
router.post("/addShow", isLoggedIn, showsCtrl.create);
router.delete("/:id", isLoggedIn, showsCtrl.delete);

// Api route
router.get("/:id", isLoggedIn, apiCtrl.detailsCall);
// create comments route
router.post("/:id", isLoggedIn, commentsCtrl.create);

// login function
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
