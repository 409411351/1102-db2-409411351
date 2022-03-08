var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_51/index', { id: '409411351', name: '吳信篁' });
});

module.exports = router;
