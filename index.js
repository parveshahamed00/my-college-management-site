const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config(); // for environment variables
app.use(bodyParser.urlencoded({extended:true})) // to handle post requests
app.use(express.static("public"));
app.set("view engine", "ejs"); // seting the engine for ejs
const port = process.env.PORT;
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
// routes
app.use("/", require("./routes/login"));
app.use("/", require("./routes/login-post"));

app.use("/", require("./routes/welcome"));

// requiring-databse models
const student = require("./models/test");
// student.student_data.find({name:"parvesh"},(err,docs)=>{
//   if(!err){
//     console.log(docs);
//   }
// })

// student.student.save();

// app.get('/', (req, res) => {
//   res.sendFile(__dirname+"/login.html")
// })
// app.post('/', function (req, res) {
//   res.send('POST request to the my-page')
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
