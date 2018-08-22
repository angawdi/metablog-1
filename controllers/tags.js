var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
  db.tag.findAll().then(function(tags){
    res.render('tags/index', { tags: tags });
  }).catch(function(err){
    console.log(err);
    res.render('error');
  });
});

router.get('/:id', function(req, res){
  db.tag.findOne({
    where: { id: req.params.id },
    include: [db.article]
  }).then(function(tag){
    res.render('tags/show', { tag: tag });
  }).catch(function(err){
    console.log(err);
    res.render('error');
  });
});

router.delete('/:id', function(req, res){
  res.send('DELETE!');
});

module.exports = router;
