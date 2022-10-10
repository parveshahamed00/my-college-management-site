const express = require("express");
const app = express();
require("dotenv").config(); // for environment variables
app.use(express.static("public"));
app.set('view engine','ejs') // seting the engine for ejs
const port = process.env.PORT ;
// app.get("/", (req, res) => res.send("Hello Parvesh"));
app.use('/',require('./routes/hello'))
app.use('/',require('./routes/welcome'))
// app.get('/', (req, res) => {
//   res.sendFile(__dirname+'/index.html')
// })
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
