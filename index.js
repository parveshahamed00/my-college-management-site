const express = require("express");
const  mongoose = require("mongoose");
const app = express();
require("dotenv").config(); // for environment variables
app.use(express.static("public"));
app.set("view engine", "ejs"); // seting the engine for ejs
const port = process.env.PORT;
// app.get("/", (req, res) => res.send("Hello Parvesh"));
app.use("/", require("./routes/hello"));
app.use("/", require("./routes/welcome"));
// app.get('/', (req, res) => {
//   res.sendFile(__dirname+'/index.html')
// })
// requiring-databse models
const student =require('./models/test')
const uri = process.env.mongoDB;
  async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Scuessfully Connected to database")
    } catch(error){
        console.log(error);
    }
  }
  connect()
student.student.save()
// //   schema - structure for our database
// const studentschema= new mongoose.Schema({
//     name:String,
//     age:Number
// })
// // model -collections
// const student_data = mongoose.model("student", studentschema);
// // document
// const student=new student_data({
//     name:"parvesh",
//     age:8
// })
// student.save()
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
