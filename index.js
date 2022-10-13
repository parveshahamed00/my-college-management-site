const express = require("express");
const bodyParser = require("body-parser"); // to handle post requests
const mongoose = require("mongoose");
const session = require("express-session"); // to create session and cookie for it
const mongoDBsession = require("connect-mongodb-session")(session); // to store session in our mongodb
const app = express();

require("dotenv").config(); // for environment variables
const port = process.env.PORT;
// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs
exports.isAuth=(req,res,next)=>{  // to protect pages before login
if(req.session.isAuth){
  next()
}else{
  res.redirect('/')
}
}
// mongoDB connection
const uri = process.env.mongoDB;
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Scuessfully Connected to database");
  } catch (error) {
    console.log(error);
  }
}
connect();
// storing session in mongodb
const store = new mongoDBsession({
  uri: process.env.mongoDB,
  collection: "session",
});
app.use(
  session({
    // travels in every request to the server
    secret: "parvesh", // like key for lock to sign the cookie
    resave: false, // telling our server not to create new session for every request
    saveUninitialized: false, // no need of saving the session if it is not modified
    store:store
  })
);
// routes

app.use("/", require("./routes/login"));
app.use("/", require("./routes/login-post"));
app.use("/",require("./routes/home-page"))
// app.use('/',require('./routes/admin-login-post')) // --> for saving admin details

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
