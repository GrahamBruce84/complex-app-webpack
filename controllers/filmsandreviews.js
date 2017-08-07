var Films = require('../client/src/models/films')();
var express = require('express');
var filmRouter = new express.Router();
var path = require('path');


filmRouter.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/../index.html'))
});

filmRouter.get('/:id', function(req, res){
  var index = req.params.id;
  res.json({data: Films[index]});
});

filmRouter.post('/', function(req, res){
  Films.push(req.body.film);
  res.json({data: Films});
});

filmRouter.put('/:id', function(req, res){
  Films[req.params.id] = req.body.film;
  res.json(Films);
});

filmRouter.delete('/:id', function(req, res){
  Films.splice(req.params.id, 1);
  res.json({data: Films});
});

module.exports = filmRouter;