let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let authorSchema = new Schema({
  name: { type: String, require: true },

  email: String,

  country: String,
});

let Author = mongoose.model('Author', authorSchema);

module.exports = Author;