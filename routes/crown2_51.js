var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_51/index', { id: '409411351', title: 'Crown2_51' });
});

module.exports = router;
