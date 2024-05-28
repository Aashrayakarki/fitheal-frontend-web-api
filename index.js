const express = require('express');
const connectDatabase = require('./database/database.js')
const dotenv = require('dotenv');



const app = express();

const PORT = 5000;

dotenv.config()

connectDatabase()

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}!`)
});