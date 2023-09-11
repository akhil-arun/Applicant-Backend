require('dotenv').config();
const {Pool} = require('pg')


const pool = new Pool({
    host: "localhost",
    user: "akhilarunachalam",
    port: 5432,
    password: process.env.PASSWORD,
    database: "akhilarunachalam"
})


module.exports = pool

