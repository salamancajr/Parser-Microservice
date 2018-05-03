// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
 
const bodyParser = require("body-parser")
 
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json())
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  
    res.send({ipAddress:req.rawHeaders, user:req.rawHeaders, language:req.rawHeaders[15]})
    });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
