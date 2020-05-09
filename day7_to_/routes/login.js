const express = require('express');
const router = express.Router();
const Users = require('../models/User');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',[check('username').notEmpty(),check('password').isLength({ min: 5 })] ,
  async (req,res) => {

    const { username , password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    //checking input field for notEmpty
    if(!username || !password ) res.render('register',{message : 'Please fill all the fields'});
    //express validation
    check('username').notEmpty();
    check('password').isLength({ min: 5 })
    
    const user = await Users.findOne({
      name : username,
    });
    //rendering register if user already exits
    if(!user) res.render('register',{message : 'Check username or password'});
    else{
      bcrypt.compare(password,user.password).then(async function(result) {
        //finding existing user
        res.redirect('index');
      });
    };
  });

module.exports = router;
