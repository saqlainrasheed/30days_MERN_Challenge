const router = require('express').Router();
const createNewUser = require('./createNewUser');
const getAllUsers = require('./getAllUsers');
const updateUser = require('./updateUser');
const getSingleUser = require('./getSingleUser');
const deleteUser = require('./deleteUser');

// create user
router.post('/new',createNewUser);
//Read all users
router.get('/',getAllUsers);
//update the user email
// their are some issues here to solve will them later
router.put('/:id/update',updateUser);
// Delete user
router.delete('/:id/delete',deleteUser);
//get a single user
router.get('/:id',getSingleUser);


module.exports = router;