const router = require('express').Router();
const Users = require('../models/User');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register',(req,res) => {
  const { username , email, password1, password2 } = req.body;
  
  if(!email || !username || !password1 || !password2){
    res.render('register',{message : 'Please fill all the fields'},);
  }
});

module.exports = router;
