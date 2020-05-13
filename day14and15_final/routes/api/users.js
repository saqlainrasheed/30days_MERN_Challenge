const express =  require('express');
const router = express.Router();
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');
const secret =  process.env.SECRET;
const validateSignupInputs = require('../../validation/signup');
const validateLoginInputs = require('../../validation/login');
const Users = require('../../models/User');


//signup route
router.post('/signup',async (req,res)=>{
  const { errors , isValid } = validateSignupInputs(req.body);
  const { user_name,email,password } = req.body;

  //validating input fields
  if(!isValid) return res.status(400).json(errors);
  //finding existing user
  await Users.findOne({$or:[{user_name},{password}]})
    .then(user => {
      //if user exixts
      if(user) {
        if(user.email === email) return res.status(400).json({email:"Email already exists."});
        else return res.status(400).json({user_name:"Username already exists."});
      }else{
        const newUser = new Users({
          user_name:user_name,
          email:email,
          password:password,
        })

        // hashing password
        bcrypt.genSalt(10,(err,salt)=>{
          bcrypt.hash(newUser.password,salt,async (err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            await newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log({error:'Error creating new user.'}));
          });
        });
      };
    });
});

//login route
router.post('/login',async (req,res)=>{
  const { errors , isValid } = validateLoginInputs(req.body);
  const {email,password} = req.body;
  if(!isValid) res.status(400).json(errors);

  await Users.findOne({email}).then(user=>{
    if(!user) return res.status(400).json({email:'Email not found.'}); 
  })

  bcrypt.compare(password,user.password).then(isMatch => {
    if(isMatch){
      const payload = {
        id:user.id,
        user_name:user.user_name
      };
      //jwt implimentation.
      jwt.sign(payload,secret,{expiresIn:3600},(err,token)=>{
        if(err) throw err;
        return res.json({
          success:true,
          token:"Bearer" + token
        });
      });
    }
    else{return res.status(400).json({password:'Password incorret'});}
  })
})




module.exports = router;
