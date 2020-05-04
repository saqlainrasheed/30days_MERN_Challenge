const Post = require('../../models/post');
module.exports = async (req,res) => {
  try {
    const post = await Post.findOne({_id:req.params.id});
    res.json(post);
  } catch {
    res.status(400).json('Issue in geting post.');
  }
}