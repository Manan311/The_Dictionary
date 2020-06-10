var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Definition = require('./definition-schema');

var termEnglish = new Schema({
wordEnglish: String,
wordNonEnglish: String,
wordExpanded: String,
languageCode: String,
image: String,
imageType: String,
audio: String,
audioType: String,
linkAuthoritative: String,
linkWikipedia: String,
linkYouTube: String,
authorName: String,
dateCreated: Date,
dateRevised: Date,
fieldOfStudy: String,
helpYes: Number,
helpNo: Number,
definitions: [Definition]
});

module.exports = termEnglish;