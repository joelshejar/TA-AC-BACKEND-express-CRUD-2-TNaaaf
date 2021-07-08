
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: { type: String, require: true },
  author: { type: Schema.Types.ObjectId, require: true, ref: 'Author' },
  summary: String,
  pages: { type: Number },
  publication: String,
  cover_image: String,
  category: String,
});

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;