var express = require('express');
const Book = require('../models/book');
const Author = require('../models/author');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  Book.find({}, (err, books) => {
    if (err) return next(err);
    res.render('bookList', { books });
  });
});

//new book

router.get('/new', (req, res, next) => {
  Author.find({}, (err, authors) => {
    if (err) return next(err);
    res.render('bookCreateForm', { authors });
  });
});

router.post('/new', (req, res, next) => {
  let data = req.body;
  console.log(data);
  Book.create(data, (err, book) => {
    if (err) return next(err);
    res.redirect('/books');
  });
});

//get details of book

router.get('/:id', (req, res, next) => {
  let bookId = req.params.id;
  Book.findById(bookId, (err, book) => {
    if (err) return next(err);
    let authorId = book.author;
    console.log('authorid', authorId);
    Author.findById(authorId, (err, author) => {
      if (err) return next(err);
      res.render('bookDetails', { book, author });
    });
  });
});

module.exports = router;