var express = require('express');
var router = express.Router();

const db = require('../utils/database');

// CREATE
router.post('/create',async (req,res) => {
    // console.log('body',req.body);
    const id = req.body.id;
    const name = req.body.name;
    const cat_id = req.body.cat_id;
    const price = req.body.price;
    const remote_url = req.body.remote_url;
    const local_url = req.body.local_url;

    try{
        const query = {
            text: `INSERT INTO shop_51(id,name,cat_id,price,remote_url,local_url) VALUES ($1, $2, $3, $4, $5, $6)`,
            values:[id, name, cat_id, price, remote_url, local_url],
        };
        await db.query(query);
        res.redirect('/shop_51');
    }catch(error){
        console.log(error);
    }
});

/* READ */
router.get('/',async (req, res) => {
    try{
        const results = await db.query(`SELECT * FROM shop_51 ORDER BY id ASC`);
        // console.log('results',JSON.stringify(results.rows)); 

        res.render('shop_51', { 
            id: '409411351', 
            name: '吳信篁' ,
            data:results.rows,
        });
    }catch(error){
        res.render('shop_51', { 
            id: '409411351', 
            name: '吳信篁' ,
            data: '',
        });
        console.log('err',error);
    }
});

router.get('/create',(req,res) => {
    res.render('shop_51/add_51',
    {
        id:'409411351',
        name:'吳信篁',
    });
});

router.get('/edit/:id',async (req,res) =>{
    const id = req.params.id;
    console.log('id',id);
    try{
        const query = {
            text:`SELECT * FROM shop_51 WHERE id = $1`,
            values:[id]
        };
        const results = await db.query(query);
        data = results.rows;
        res.render('shop_51/edit_51', { 
            id: data[0].id,
            name: data[0].name,
            cat_id: data[0].cat_id,
            price: data[0].price,
            remote_url: data[0].remote_url,
            local_url: data[0].local_url,
        });
    }catch(error){
        console.log('err',error);
    }
});

//DELETE

router.get('/delete/:id',async (req,res) => {
    try{
        console.log('delete id',req.params.id);
        const query = {
            text:`DELETE FROM shop_51 WHERE id = $1`,
            values:[req.params.id]
        };
        const results = await db.query(query);
        res.redirect('/shop_51');
    }catch(err){
        console.log(err);
    }
});

//UPDATE

router.post('/update',async (req,res) => {
    try{
        const query = {
            text:`UPDATE shop_51 SET name = $1, cat_id = $2, price = $3,remote_url = $4, local_url = $5  WHERE id = $6`,
            values:[req.body.name, req.body.cat_id, req.body.price, req.body.remote_url, req.body.local_url, req.body.id]
        };
        await db.query(query);
        res.redirect('/shop_51');
    }catch(err){
        console.log(err);
    }
});


module.exports = router;