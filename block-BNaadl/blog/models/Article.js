var mongoose = require('mongoose')
var Schema = mongoose.Schema
var articleSchema = new Schema({
    title: String,
    description: String,
    tags: String,
    author: String,
    likes: Number
})

module.exports = mongoose.model('Aticle', articleSchema)