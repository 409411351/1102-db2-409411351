var express = require('express');
var router = express.Router();

const db = require('../utils/database');

/* READ */
router.get('/',async (req, res) => {
    try{
        const results = await db.query(`SELECT * FROM book_51`);
        console.log('results',JSON.stringify(results.rows)); 

        res.render('book_51', { 
            id: '409411351', 
            name: '吳信篁' ,
            data:results.rows,
        });

    }catch(error){
        res.render('book_51', { 
            id: '409411351', 
            name: '吳信篁' ,
            data: '',
        });
        console.log('err',error);
    }
});

router.get('/create',(req,res) => {
    res.render('book_51/add_51',
    {
        id:'409411351',
        name:'吳信篁',
    });
});

module.exports = router;