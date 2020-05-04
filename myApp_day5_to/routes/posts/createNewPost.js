
const Posts = require('../../models/post');
const Users = require('../../models/user');

module.exports = async (req,res)=>{
  const {title , body, author } = req.body;

  // checking for null and empty strings
  if(title && body ){
    //creating new user
    const post = new Posts({
      title :title,
      body:body,
      dateOfCreation:new Date(),
    });
    //saving new post Asyncrnously
    try {
      const newPost = await post.save();
      res.json(newPost);
    } catch(err) {
      res.status(400).json("unable to add post...");
    }
  }else{
    res.status(400).json('Please enter fields carefully.');
  }
}

