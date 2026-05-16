require('dotenv').config(); 

const pool = new Pool(
 process.env.PG_CONNECTION_STRING
   ? { connectionString: process.env.PG_CONNECTION_STRING }
   : {
     host: process.env.PG_HOST,
     port: process.env.PG_PORT,
     user: process.env.PG_USER,
     password: process.env.PG_PASS,
     database: process.env.PG_DB,
   }
);


module.exports = pool;