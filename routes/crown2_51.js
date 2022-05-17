var express = require('express');
var router = express.Router();

const Category_51 = require('../models/Category_51');
const shop_51 = require('../models/shop_51');

const crown2Controller_51 = require('../controllers/crown2Controller_51');

//CREATE
// router.post('/product_51',)

//READ
router.get('/',crown2Controller_51.getCategories);

router.get('/shop_51/:category',crown2Controller_51.getProductsByCategory);


module.exports = router;

//UPDATE

//DELETE