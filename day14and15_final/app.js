require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRoute = require('./routes/api/users');
const postsRoute = require('./routes/api/posts');
const passport = require("passport");

//mongo uri
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(connection => console.log('Mongo DB connected.'))
  .catch(err => console.log('Error connecting to DB.'));

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
require('./middleware/passport')(passport);


//routes
app.use('/api/users/',usersRoute);
app.use('/api/posts/',postsRoute);

//port and server
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server up and running on port:', PORT));