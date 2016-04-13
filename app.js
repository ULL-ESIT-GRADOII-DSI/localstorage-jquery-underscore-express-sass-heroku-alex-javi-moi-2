var express = require('express');
var path = require('path');
var csv = require("./csv.js");
var util = require('util');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '


// Serve static files
app.use(express.static('public')); 
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080)); 

/* body parser */
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function(req, res){
  res.render('index', { title: "Comma Separated Value Analyzer", error:""});
});

app.post('/table' , function(req, res, next){
  var original = req.body.original;
  if(!original){
    res.render('index', {title: "comma separated value analizer", error: "Introduzca una entrada correcta"});
  }
  else{
    var data= csv.calculate(original);
    res.render('table', {items:data, title:"comma separated value analizer", error:""});
  }
});


//
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});




