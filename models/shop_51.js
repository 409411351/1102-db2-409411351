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
}

//testing
const test = async () =>{
    let results = await shop_51.fetchProductsByCategory(1);
    console.log('test results', JSON.stringify(results));
}

test();

module.exports = shop_51;