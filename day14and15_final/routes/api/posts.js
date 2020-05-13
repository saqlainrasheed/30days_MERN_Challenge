const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const passport = require("passport");
const validatePostInput = require("../../validation/post");

//get all posts
router.get('/',passport.authenticate("jwt",{session:false}),async(req,res)=>{
  await Post.findOne({ author:req.user.user_name })
    .then(posts => res.status(200).json(posts))
    .catch(err => {
      res.status(400).json({error:"Error fetching posts of logged in user."});
    });
})

//get post by id
router.get("/post/:id", async (req, res) => {
 await Post.findOne({ _id: req.params.id })
      .then(post => res.status(200).json(post))
      .catch(err => res.status(400).json({ id: "Error fetching post by id" }));
});

//get post by user
router.get("/author/:author",async (req, res) => {
  await Post.findOne({ author: req.params.author })
     .then(posts => res.status(200).json(posts))
     .catch(err =>
        res
           .status(400)
           .json({ author: "Error fetching posts of specific author" })
     );
});

//all pricvate routes -->
//create
router.post('/create',passport.authenticate('jwt',{session:false}),async(req,res)=>{
  const author = req.user.user_name;
  const post = req.body;
  const { errors, isValid } = validatePostInput(post); 
  if(!isValid) return res.status(400).json(errors);
  post.author = author;
  const newPost = await new Post(post);
  newPost.save()
      .then(doc => res.json(doc))
      .catch(err => console.log({ create: "Error creating new post" }));
})


//update route
router.patch('/update/:id',passport.authenticate('jwt',{session:false}),async(req,res)=>{
  const author = req.user.user_name;
  const { errors, isValid } = validatePostInput(req.body);
  const { title, body } = req.body;
  if (!isValid) {return res.status(400).json(errors);}
  //updating
  await Post.findOneAndUpdate(
    { author:author, _id: req.params.id },
    { $set: { title, body } },
    { new: true }
  ) 
  .then(doc => res.status(200).json(doc))
  .catch(err =>res.status(400).json({ update: "Error updating existing post" }));
})

//delete route
router.delete("/delete/:id",passport.authenticate("jwt", { session: false }),async(req, res) => {
  const author = req.user.user_name;
  await Post.findOneAndDelete({ author:author, _id: req.params.id })
    .then(doc => res.status(200).json(doc))
    .catch(err =>
      res.status(400).json({ delete: "Error deleting a post" })
    );
  }
);
module.exports = router;