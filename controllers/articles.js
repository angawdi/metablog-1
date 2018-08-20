var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('HELLO WORLD! - articles');
});

module.exports = router;
