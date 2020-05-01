const express = require('express')
const router = express.Router(); 
//importing model
const Book = require('../models/book');
const Author = require('../models/author');

//all Books route
router.get('/',async (req,res)=>{
  res.send('all books')
});

//new Book getting
router.get('/new',async (req,res)=>{
  try {
    const authors = await Author.find();
    const book = new Book();
    res.render('books/new',{
      authors:authors,
      book:book,
    })
  } catch(e) {
    res.redirect('/books');
  }
})

//create book route
router.post('/', async (req,res) => {
  const book = new Book();
})
module.exports = router;