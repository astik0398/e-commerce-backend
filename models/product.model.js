const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    image: String,
    description: String,
    rating: Number
})

const productModel = mongoose.model('product', productSchema)

module.exports = {
    productModel
}