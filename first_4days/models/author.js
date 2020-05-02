const mongoose = require('mongoose');

const authorSchema = new  mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:100
  }
})

module.exports = mongoose.model('Author',authorSchema);