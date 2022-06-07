var express = require('express');
var router = express.Router();

const db = require('../utils/database');

// CREATE
router.post('/create',async (req,res) => {
    // console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.author;
    const price = req.body.price;

    try{
        const query = {
            text: `INSERT INTO book_51(id,name,author,price) VALUES ($1, $2, $3, $4)`,
            values:[id, name, author, price],
        };
        await db.query(query);
        res.redirect('/book_51');
    }catch(error){
        console.log(error);
    }
});

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