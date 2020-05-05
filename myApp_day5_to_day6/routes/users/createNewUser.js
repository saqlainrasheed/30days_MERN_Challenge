const bcrypt = require('bcrypt');
const Users = require('../../models/user');
const createNewUser = (req,res)=>{
  const {username , email , password} = req.body;

  // checking for null and empty strings
  if(username && password && email){
    
    bcrypt.hash(password, 10).then( async function(hash) {
      //creating new user
      const user = new Users({
        username:username,
        email:email,
        date: new Date(),
        password:hash,
      });
      //saving new user Asyncrnously
      try {
        const newUser = await user.save();
        res.json(newUser);
      } catch(err) {
        res.status(400).json('Unable to add user.');
      }
    });
      
  }else{
    res.status(400).json('Please enter fields carefully.');
  }
}

module.exports = createNewUser;