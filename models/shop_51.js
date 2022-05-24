const db =require('../utils/database');

const shop_51 = class shop_51{

    constructor( id, name, cat_id, price, remote_id, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_id = remote_id;
        this.local_url = local_url;
    }

    //CREATE
    static async create(body){
        const {id,name,cat_id,price,remote_url,local_url} = body;
        const queryStr = {
            text: `INSERT INTO shop_51(id,name,cat_id,price,remote_url,local_url) VALUES ($1,$2,$3,$4,$5,$6)`,
            values: [id,name,cat_id,price,remote_url,local_url],
        }
        return db.query(queryStr);
    }


    //READ



    //get all products
    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from shop_51`);
            return results.rows;
        }
        catch(err){
            console.log('error',err);
        }
    }

    static async fetchProductsByCategory(id){
        const query = {
            text: `SELECT * from shop_51 where cat_id = $1`,
            values: [id]
        }
        try{
            let results = await db.query(query);
            return results.rows;
        }catch(err){
            console.log(err);
        }
    }


    //UPDATE
    static async update(body){
        const {id,name,cat_id,price,remote_url,local_url} = body;
        const queryStr = {
            text: `UPDATE shop_51 SET name = $1 , cat_id = $2, price = $3, 
            remote_url = $4, local_url = $5  WHERE id = $6`,
            values: [name,cat_id,price,remote_url,local_url,id],
        }
        return db.query(queryStr);
    }

    //DELETE

    static async deleteById(id){
        const query = {
            text:`DELETE FROM shop_51 WHERE id = $1`,
            values:[id],
        };
        return db.query(query);
    }
};

//testing
// const test = async () =>{
//     let results = await shop_51.fetchProductsByCategory(1);
//     console.log('test results', JSON.stringify(results));
// }

// test();

module.exports = shop_51;