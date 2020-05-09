const express = require('express');
const app = express();
const multer = require('multer');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const PATH = './public';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg')
  }
})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
      }
  }
});

app.use(express.urlencoded({extended :true}));
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('layout','layouts');
app.use(expressLayouts);
app.set(express.static('public'));


app.get('/',(req,res)=>{
  res.render('upload')
})

app.post('/', upload.single('file'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
  
})

app.listen(5000, () => console.log('running on port'));