var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var postSchema = new mongoose.Schema({
  title:   String,
  content: String,
  createdAt: {type: Date, default: Date.now}
});

var Post = mongoose.model('User', userSchema);

module.exports = Post;
