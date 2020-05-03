const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const expressLayout = require('express-ejs-layouts');
const MONGO_URI = process.env.MONGO_URI;
const index = require('./routes/index');



//template engine setting up
app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.set('layout','layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));


//mongoose connection
mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;
db.once('open',() => console.log('connect to DB'))
db.on('error',err => console.log('Error connecting to DB'))




app.use('/',index);

//port and server listening
const PORT = 5000 || process.env.PORT
app.listen(PORT,()=>{console.log('server running on port : ', PORT)});