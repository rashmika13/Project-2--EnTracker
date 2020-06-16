const request = require("request");
const token = process.env.API_KEY;

// requests details of a particular show from the tmdb API
function detailsCall(req, res) {
  let title;
  let show;
  let data = req.user.shows;

  data.forEach((obj) => {
    if (obj._id == req.params.id) {
      title = obj.title;
      show = obj;
    }
  });
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${token}&language=en-US&page=1&query=${title}&include_adult=false`;

  request(url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      let results = JSON.parse(body);
      res.render("shows/details", {
        results: results.results[0],
        user: req.user,
        show: show,
      });
    }
  });
}

module.exports = {
  detailsCall,
};
