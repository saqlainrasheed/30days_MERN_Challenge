const router = require('express').Router();
const createNewUser = require('./createNewUser');
const getAllUsers = require('./getAllUsers');
const updateUser = require('./updateUser');
const getSingleUser = require('./getSingleUser');

// create user
router.post('/new',createNewUser);
//Read all users
router.get('/',getAllUsers);
//update the user email and password
router.put('/:id/update',updateUser);
// Delete user
router.delete('/:id',);
//get a single user
router.get('/:id/delete',getSingleUser);


module.exports = router;