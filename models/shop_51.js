const db =require('../utils/database');

const shop_51 = class shop_51{

    constructor( id, name, price, local_url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.local_url = local_url;
    }

    //get all categories

    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from shop_51`);
            //console.log('results', results.rows);
            return results.rows;
        }
        catch(err){
            console.log('error',err);
        }
    }
}

//testing
const test = async () =>{
    let results = await shop_51.fetchAll();
    console.log('test results', JSON.stringify(results));
}

test();

module.exports = shop_51;