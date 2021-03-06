var express = require('express');
var app = express();
var path = require('path');

// THIS MAKES POST REQUESTS WORK
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// THIS MAKES POST REQUESTS WORK

app.use(express.static('client/build'));
app.use(require("./controllers/index"));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});