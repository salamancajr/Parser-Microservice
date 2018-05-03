// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
 
 
 
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
//var reg =/(^[0-9.]+(?=,))/


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
 // var reg =/(^[0-9.]+(?=,))/
  //var a = req.rawHeaders[3].replace(reg, "$1")
  
  var ipAddress = req.rawHeaders[3].split(",") 
  ipAddress =ipAddress[0]
    res.send({ipAddress, software:req.rawHeaders[15], language:req.rawHeaders[23]})
    });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
