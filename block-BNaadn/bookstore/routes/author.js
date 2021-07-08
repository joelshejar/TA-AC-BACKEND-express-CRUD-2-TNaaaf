
var express = require('express');
const Book = require('../models/book');
const Author = require('../models/author');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   A.find({}, (err, books) => {
//     if (err) return next(err);
//     res.render('bookList', { books });
//   });
// });

//new book

router.get('/new', (req, res, next) => {
  res.render('authorCreateForm');
});

router.post('/new', (req, res, next) => {
  let data = req.body;
  Author.create(data, (err, book) => {
    if (err) return next(err);
    res.redirect('/books');
  });
});

module.exports = router;
