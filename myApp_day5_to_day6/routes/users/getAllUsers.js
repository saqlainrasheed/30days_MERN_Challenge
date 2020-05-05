const Users = require('../../models/user');
const getAllUsers = async (req,res) => {
  try {
    const allUsers = await Users.find({});
    res.json(allUsers);
  } catch {
    res.status(400).json('Issue in finding users.');
  }
}

module.exports = getAllUsers;