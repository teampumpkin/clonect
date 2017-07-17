var express = require('express');
const REDIRECT_HOST = 'http://ricago.com/';

var app = express();


app.use(express.static('public'));

app.use(function(req, res, next){
  res.redirect(REDIRECT_HOST + req.url)
});

app.listen(3000, function(){
  console.log('Listening at port 3000');
})
