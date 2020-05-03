const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const postSchema = new Schema({
  title:{
    type:String,
    required:true,
    maxlength:200,
  },
  body:{
    type:String,
    required:true,
    minlength:10,
  },
  dateOfCreation:{
    type:Date,
    default:Date.now,
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  }
})

module.exports = mongoose.model('Post',postSchema);