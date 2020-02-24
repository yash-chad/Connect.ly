const mongoose = require('mongoose');

const { Schema } = mongoose;

const PostSchema = new Schema({
  authorId: {
    type: String,
    required: true
  },
  avatarColor: {
    type: Number,
    required: true
  },
  comments: {
    type: [
      {
        commenterId: String,
        text: String,
        timestamp: Number
      }
    ],
    required: true
  },
  likers: {
    type: [String],
    required: true
  },
  likesCount: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    trim: true,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  isBook : {
    type : Boolean,
    default : false
  },
  isInternShip : {
    type : Boolean,
    default : false
  }
});

module.exports = mongoose.model('Post', PostSchema);
