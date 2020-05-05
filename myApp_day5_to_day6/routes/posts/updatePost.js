const Posts = require('../../models/post');
const updateUser = async (req,res)=>{
  const {title, body} = req.body;
  //checking for null and empty strings
  if(title && body ){
    try {
      const post = await Posts.findOneAndUpdate({_id:req.params.id},{
        title:title,
        body:body
      })
      res.json(post);
    } catch {
      res.status(400).json('Unable to add user.');
    } 
  }else{
    res.status(400).json('Please enter fields carefully.');
  }
}

module.exports = updateUser;

