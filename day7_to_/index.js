const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URI;


mongoose.connect(mongo_uri,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(res => console.log('MongoDB connected.'))
        .catch(err => console.log('error connecting to DB.'))


app.use(express.urlencoded({extended :true}));

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout','layouts');
app.use(expressLayouts);
app.set(express.static('public'));
 
app.get('/', (req, res) => {
  res.render('index.ejs');
});
 
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log('Server running on port', PORT));