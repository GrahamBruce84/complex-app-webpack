var express = require('express');
var router = new express.Router();

router.use("/films", require("./filmsandreviews"));

router.get('/', function(req, res){
  res.json({data: "Welcome"});
});

router.get("/about", function(req, res){
  res.json({data: "I HAZ ALL THE FILMS"});
});

module.exports = router;