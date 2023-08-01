var express = require('express');
const BookModel = require('../models/BookModel');
var router = express.Router();

/* GET home page. */
router.get('/', async(req, res,) => {
  //lay du lieu tu collection "Book" va luu vao array "books"
  var books = await BookModel.find();
  //console.log(books);
  //res.send(books)


  res.render('book_list',{books: books});
});

module.exports = router;
