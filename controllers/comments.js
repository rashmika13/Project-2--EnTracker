const User = require("../models/user");

module.exports = {
  create,
};
// creates comments for individual show
function create(req, res) {
  const show = req.user.shows.id(req.params.id);
  show.comments.push(req.body);
  console.log(show);
  req.user.save(function (err, user) {
    res.redirect(`/shows/${show._id}`);
  });
}
