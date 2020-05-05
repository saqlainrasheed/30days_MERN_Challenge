const Users = require('../../models/user');


const updateUser = async (req,res)=>{
  const {email} = req.body;

  //checking for null and empty strings
  if(email ){
      //finding user and updating
        try {
          const user = await Users.findOneAndUpdate({_id:req.params.id},{
            email:email
          })
          res.json(user);
        } catch {
          res.status(400).json('Unable to add user.');
        } 
  }else{
    res.status(400).json('Please enter fields carefully.');
  }
}

module.exports = updateUser;

