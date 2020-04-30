require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
//routes importes
const indexRouter = require('./routes/index');

//enviromental variables
const PORT = 5000 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// template engine setup
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.set(express.static('public'));

//db connection to mongoose
mongoose.connect(MONGO_URI,({useNewUrlParser:true,useUnifiedTopology:true}));
const db = mongoose.connection;
db.on("error",err=>console.log('having an error connecting to DB.'));
db.once("open",()=>console.log('connected to DB.'));

//using routes
app.use('/',indexRouter);



//server
app.listen(PORT,()=>console.log('Server up and running at : ', PORT));