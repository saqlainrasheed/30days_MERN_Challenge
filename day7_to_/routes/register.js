const router = require('express').Router();
const Users = require('../models/User');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register',[check('username').notEmpty(),
          check('email').isEmail(),
          check('password1').isLength({ min: 5 }),
          check('password2').isLength({ min: 5 })] ,
          async (req,res) => {

            const { username , email, password1, password2 } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
            }
            //checking input field for notEmpty
            if(!email || !username || !password1 || !password2) res.render('register',{message : 'Please fill all the fields'});
            if(password1 !== password2) res.render('register',{message:'Please enter matching password.'})
            //express validation
            check('username').notEmpty();
            check('email').isEmail();
            check('password1').isLength({ min: 5 })
            check('password2').isLength({ min: 5 })
            //
            //finding existing user
            const user = await Users.findOne({name : username});
            //rendering register if user already exits
            if(user) res.render('register',{message : 'Username Already exists.'});
            
            else{
              //genrating hash password
              bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(password1, salt,async function(err, hash) {
                    // Store hash in your password DB.
                    const newUser = await new Users({
                      name:username,
                      email:email,
                      password: hash
                    });
                    newUser.save();
                });
              });
            }

});

module.exports = router;
