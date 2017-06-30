var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var url2jpeg = require('../controllers/urlController');

var async = require("async");
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Url2Gif - The newest link sharing culture!' });
});
// Return error while page not found
router.get('/*', function(req, res, next) {
  res.render('error',{message:"404 - Not Found"});
});

router.post('/', function(req, res){
  var url = req.body.url;
  if(url2jpeg.isUrlValid(url)){ // If url is valid, generate GIF
    url2jpeg.create3jpeg(url,res);
  }
  else{ // Else give "url is empty" error
    res.render('index',{error: "Please enter valid URL adress !"});
  }

  // Bittikten sonra resmi sil !!!!!!


});

module.exports = router;
