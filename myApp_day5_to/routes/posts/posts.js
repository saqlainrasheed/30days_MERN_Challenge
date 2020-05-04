const router = require('express').Router();
const craeteNewPost = require('./createNewPost');
const getAllPosts = require('./getAllPosts');
const getSinglePost = require('./getSinglePost');
const deletePost = require('./deletePost');
const updatePost = require('./updatePost');

//Create post
router.post('/new',craeteNewPost);

//read post
router.get('/:id',getSinglePost);

//read all posts
router.get('/',getAllPosts);

//delete Post
router.delete('/:id/delete',deletePost);

//update posts
router.put('/:id/update',updatePost);

module.exports = router;