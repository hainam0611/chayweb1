const mongoose = require('mongoose')
var BookSchema = mongoose.Schema({
    //note: khai bao ten cua cac field (colum) o day cung kieu du lieu
    title: String,
    author: String,
    date: Date,
    price: Number,
    quantity: Number,
    image: String,
    video: String
})

//note: Khai bao ten cua collection (table) o day. VD: "Book"
var BookModel = mongoose.model("sach", BookSchema, "Book")

module.exports = BookModel