const express = require('express')
const {productModel} = require('../models/product.model')
const productRouter = express.Router()

productRouter.get('/', async(req, res)=> {
    try {
        const products = await productModel.find()
        res.send(products)
    } catch (error) {
        res.send({"error": error})
    }
})

productRouter.post('/addProduct', async(req, res)=> {
    try {
        const product = new productModel({
            ...req.body
        })
        await product.save()
        res.send({"message": `product has been added`})
    } catch (error) {
        console.log({"error": error});
    }
})

module.exports = {
    productRouter
}