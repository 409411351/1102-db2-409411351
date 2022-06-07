var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* GET home page. */
router.get('/',async (req, res) => {
    try{
        const results = await db.query(`SELECT * FROM book_51`);
        console.log('results',JSON.stringify(results.rows)); 

        res.render('book_51/index', { 
            id: '409411351', 
            name: '吳信篁' ,
            data:results.rows,
        });

    }catch(error){
        console.log('err',error);
    }
    
});

module.exports = router;