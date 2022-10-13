exports.login = (req, res) => {
  res.sendFile(__dirname + "/login.html");
  // console.log(req.session.id);
  
};
