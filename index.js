const express = require('express');
const connectDatabase = require('./database/database.js')
const dotenv = require('dotenv');

const app = express();

app.use(express.json())

dotenv.config()

connectDatabase()

const PORT = process.env.PORT;

app.get('/test', (req, res) => {

    res.send('Hello World!')

})

app.use('/api/user', require('./routes/userRoutes.js'))

app.listen(PORT, ()=>{
    console.log(`Server is Running on port ${PORT}!`)
})