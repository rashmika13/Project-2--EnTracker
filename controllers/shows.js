const User = require("../models/user");

module.exports = {
  // addShow,
  create,
  show,
  delete: deleteShow,
};

// function addShow(req, res) {
//   if (req.method === "POST") {
//     req.user.shows.push(req.body);
//     req.user.save(function (err) {
//       res.render("shows/addShow", { user: req.user });
//     });
//   } else {
//     res.render("shows/addShow", { user: req.user });
//   }
// }

function show(req, res) {
  res.render("shows/addShow", { user: req.user });
}

function create(req, res, next) {
  User.findOne({ _id: req.user.id }, function (err, user) {
    user.shows.push(req.body);
    user.save(function (err) {
      res.redirect("/shows");
    });
  });
}

function deleteShow(req, res) {
  User.findById(req.user.id, function (err, user) {
    let index = user.shows.findIndex((show) => show._id == req.params.id);
    user.shows.splice(index, 1);
    user.save(function (err) {
      res.redirect("/shows");
    });
  });
}
