var express = require('express');
var router = express.Router();

const Category_51 = require('../models/Category_51');
const shop_51 = require('../models/shop_51');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    let results = await Category_51.fetchAll();
    console.log('results', JSON.stringify(results));
    res.render('crown2_51/index', 
    { 
      data: results,
      id: '409411351', 
      title: 'Crown2_51_DB' 
    });
  }catch(err){
    console.log(err)
  }
});

router.get('/shop_51/:category', async function(req,res){
  console.log('category', req.params.category);
  

  try{
    const cid = await Category_51.fetchCatIdByName(req.params.category);
    console.log('cid',cid);
    let results = await shop_51.fetchProductsByCategory(cid);
    console.log('results',JSON.stringify(results));
  }catch(err){
    console.log(err);
  }
})

module.exports = router;
