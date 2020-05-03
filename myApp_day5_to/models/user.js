const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const userSchema = new Schema({
  user_name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50,
  },
  email:{
    type:String,
    required:true,
    minlength:7,
    maxlength:100,
  },
  password:{
    type:String,
    required:true,
    minlength:6,
    maxlength:100,
  },
  date:{
    type:Date,
    default:Date.now,
    required:true,
  }
})

module.exports = mongoose.model('User',userSchema);