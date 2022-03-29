const { Pool } = require('pg');
const { connectionString } = require('pg/lib/defaults');

const isProduction = process.env.NODE_ENV === 'production';

let pool;

if(isProduction){
    pool = new Pool(
        {
            connectionString:process.env.DATABASE_URL,
            ssl:{ rejectUnauthorized: false }
        }
    )
}
else{
    pool = new Pool(
        {
            user:'postgres',
            host:'localhost',
            port:'5432',
            database:'crown_51',
            password:'0000'
        }
    )
}

module.exports = pool;

/*
postgres://sqvrdzfinrrlfj:ca544980eabbbe395305c3f845c4548d2160af7af00cb360ca9f7d588728dff6@ec2-44-192-245-97.compute-1.amazonaws.com:5432/d4047nahn5meu4
user: sqvrdzfinrrlfj
host: ec2-44-192-245-97.compute-1.amazonaws.com
port: 5432
database: d4047nahn5meu4
password: ca544980eabbbe395305c3f845c4548d2160af7af00cb360ca9f7d588728dff6
*/