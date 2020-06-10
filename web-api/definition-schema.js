var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var definition = new Schema({
    authorName: String,
    dateCreated: Date,
    definition: String,
    quality: Number,
    likes: Number
});

module.exports = definition;