require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


//mongo uri
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(connection => console.log('Mongo DB connected.'))
  .catch(err => console.log('Error connecting to DB.'));

//middlewares
app.use(express.urlencoded({ extended: false }));

//port and server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server up and running on port:', PORT));