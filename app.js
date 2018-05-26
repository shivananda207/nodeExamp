express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var http= require('http').Server(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
app.get('/ap', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'../public/index.html')); 
});

var server = http.listen(8080, function () {
   //var host = server.address().address
   var host = '0.0.0.0'; 
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

