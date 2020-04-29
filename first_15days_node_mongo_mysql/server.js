const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
//routes
const indexRouter = require('./src/routes/index');



const PORT = 5000 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// template engine setup
app.set('view engine', 'ejs');
app.set('views',__dirname + '/src/views');
app.set(express.static('public'));

//db connection to mongoose
mongoose.connect(MONGO_URI,({useNewUrlParser:true,useUnifiedTopology:true}))
        .then(res => console.log('conneted to db.'))
        .catch(err => console.log('Having Error'));

//using routes
app.use('/',indexRouter);



//server
app.listen(PORT,()=>console.log('Server up and running at : ', PORT));