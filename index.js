const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {connection} = require('./db')
const {productRouter} = require('./routes/product.route')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/', productRouter)

app.listen(process.env.PORT, async()=> {
    try {
        await connection
        console.log(`connected to the db`);
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})


