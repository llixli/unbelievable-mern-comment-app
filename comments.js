'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
	author: String,
	text: String
});

module.expornts = mongoose.model('Comment', CommentsSchema);
