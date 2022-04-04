var express = require('express');
var router = express.Router();

const shop_51 = require('../../../models/shop_51')

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await shop_51.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_51/shop_51/hats', 
    { 
      data: results,
    });
  }catch(err){
    console.log(err)
  }
});

module.exports = router;
