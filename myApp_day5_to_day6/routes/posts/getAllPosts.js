const Posts = require('../../models/post');
const getAllPosts = async (req,res) => {
  try {
    const allPosts = await Posts.find({});
    res.json(allPosts);
  } catch {
    res.status(400).json('Issue in finding pots.');
  }
}

module.exports = getAllPosts;