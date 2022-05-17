const Category_51 = require('../models/Category_51');
const shop_51 = require('../models/shop_51');

//CREATE
exports.createProducts = async(req,res) =>{
    console.log('body',req.body);
    res.json({msg:'create -- body data received'});
};

//READ
exports.getCategories = async(req,res)=>{
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
};

exports.getProductsByCategory = async(req,res)=>{
    console.log('category', req.params.category);
  
  try{
    const cid = await Category_51.fetchCatIdByName(req.params.category);
    console.log('cid',cid);
    let results = await shop_51.fetchProductsByCategory(cid);
    console.log('results',JSON.stringify(results));

    res.render('crown2_51/products_51', 
    { 
      data: results,
      title: req.params.category,
      id: '409411351', 
      name: '吳信篁' 
    });
  }catch(err){
    console.log(err);
  }
};