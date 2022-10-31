const express = require("express");
const bodyParser = require("body-parser"); // to handle post requests
const mongoose = require("mongoose");
const session = require("express-session"); // to create session and cookie for it
const fileUplaod = require("express-fileupload");

const mongoDBsession = require("connect-mongodb-session")(session); // to store session in our mongodb
const app = express();

require("dotenv").config(); // for environment variables
const port = process.env.PORT;
// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs

// to protect pages before login
exports.isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect("/");
  }
};

// mongoDB connection
const uri = process.env.DATABASE_URL;
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
    store: store,
  })
);

app.use(
  fileUplaod({
    useTempFiles: true,
  })
);

// routes
app.use("/", require("./routes/login"));
app.use("/", require("./routes/login-post"));
app.use("/", require("./routes/home-page"));
app.use("/", require("./routes/logout"));
app.use("/", require("./routes/add-student"));
app.use("/", require("./routes/add-student-post"));
app.use("/", require("./routes/delete-student"));
app.use("/", require("./routes/delete-student-post"));
app.use("/", require("./routes/alter-student"));
app.use("/", require("./routes/alter-student-post"));
app.use("/", require("./routes/attendance"));
app.use("/", require("./routes/attendance-post"));
app.use("/", require("./routes/time-table"));
app.use("/", require("./routes/time-table-post"));
app.use("/", require("./routes/hall-ticket"));
app.use("/", require("./routes/hall-ticket-post"));
app.use("/", require("./routes/result"));
app.use("/", require("./routes/result-post"));
app.use("/", require("./routes/result-mark-post"));






// app.use('/',require('./routes/admin-login-post')) // --> for saving admin details

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
