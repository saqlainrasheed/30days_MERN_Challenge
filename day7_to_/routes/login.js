const express = require('express');
const router = express.Router();

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
    //finding existing user
    const user = await Users.findOne({
      name : username,
      password:password
    });
    //rendering register if user already exits
    if(!user) res.render('register',{message : 'Check username or password'});
    
    else{
      bcrypt.compare(password, hash).then(function(result) {
        // result == true
      });
            const newUser = await new Users({
              name:username,
              email:email,
              password: hash
            });
            newUser.save();
      };
  });

module.exports = router;
