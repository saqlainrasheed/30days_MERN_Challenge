const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI;


//mongo connection
mongoose.connect(mongo_uri,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(res => console.log('MongoDB connected.'))
        .catch(err => console.log('error connecting to DB.'))

//middlewares
app.use(express.urlencoded({extended :true}));
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout','layouts');
app.use(expressLayouts);
app.set(express.static('public'));
 
//rutes
app.get('/', (req, res) => {
  res.render('index.ejs');
});
 
app.use('/',require('./routes/register'));
app.use('/',require('./routes/login'));
app.use('/',require('./routes/logout'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log('Server running on port', PORT));