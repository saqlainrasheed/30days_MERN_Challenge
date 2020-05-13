const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
  title:{
    type:String,
    require:true,
    minlength:10
  },
  body:{
    type:String,
    required:true,
    minlength:10
  },
  author:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

module.exports = mongoose.model('posts',post);