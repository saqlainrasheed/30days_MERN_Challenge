const router = require('express').Router();
const Users = require('../../models/user');

// create user
router.post('/new',async (req,res)=>{
  const {username , email , password} = req.body;

  // checking for null and empty strings
  if(username && password && email){
      //creating new user
      const user = new Users({
        username:username,
        email:email,
        date: new Date(),
        password:password,
      });
      //saving new user Asyncrnously
      try {
        const newUser = await user.save();
        res.json(newUser);
      } catch(err) {
        res.status(400).json('Unable to add user.');
      }
  }else{
    res.status(400).json('Please enter fields carefully.');
  }

});


//Read all users
router.get('/',async (req,res) => {
  try {
    const allUsers = await Users.find({});
    res.json(allUsers);
  } catch {
    res.status(400).json('Issue in finding users.');
  }
});

//update the user
router.put('/:id/update',async (req,res)=>{
  const {username,email,password} = req.body;

  //checking for null and empty strings
  if(username  && password  && email ){
      //finding user and updating
      try {
        const user =await Users.findOneAndUpdate({_id:req.params.id},{
          username:username,
          email:email,
          password:password,
        })
        res.json(user);
      } catch {
        res.status(400).json('Unable to add user.');
      }
  }else{
    res.status(400).json('Please enter fields carefully.');
  }
});


// Delete user
router.delete('/:id',async (req,res) => {
  try {
    const user = await Users.findOneAndDelete({_id:req.params.id});
    res.json(user);
  } catch {
    res.status(400).json('Issue in deleting users.');
  }
});

//get a single user
router.get('/:id',async (req,res) => {
  try {
    const user = await Users.findOne({_id:req.params.id});
    res.json(user);
  } catch {
    res.status(400).json('Issue in deleting users.');
  }
});



module.exports = router;