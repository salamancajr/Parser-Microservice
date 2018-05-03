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

//15, 23 or 17, 25
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  var reg =/(^[0-9.]+(?=,))/
  var reg2 =/(?<=\().+?(?=\))/
  var a = req.rawHeaders[3].match(reg)
  var b = req.rawHeaders[15].match(reg2)||req.rawHeaders[17].match(reg2)
 // var ipAddress = req.rawHeaders[3].split(",")[0]
  var language=req.rawHeaders[23].split(",")[0]
  if(language=="gzip"){
  language=req.rawHeaders[25].split(",")[0]
  }
  
    res.send({ipAddress:a[0], software:b[0], language})
    });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
