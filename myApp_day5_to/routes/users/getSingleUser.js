const Users = require('../../models/user');
module.exports = async (req,res) => {
  try {
    const user = await Users.findOne({_id:req.params.id});
    res.json(user);
  } catch {
    res.status(400).json('Issue in finding user.');
  }
}