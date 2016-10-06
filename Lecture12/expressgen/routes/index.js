var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      { title: 'Express',
  subtitle: 'Learning to Express ourselves'});
});

module.exports = router;