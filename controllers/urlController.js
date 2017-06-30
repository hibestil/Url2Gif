var webshot = require('webshot');
var gif = require('../controllers/gifController');
var options = {
    screenSize: {
      width: 320
    , height: 480
    }
    , shotSize: {
      width: 320
    , height: 320
    }
    , shotOffset: { left: 0
    , right: 0
    , top: 0
    , bottom: 0 }
    ,defaultWhiteBackground: true
    , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
      + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};
var optionsTwo = {
    screenSize: {
      width: 320
    , height: 480
    }
    , shotSize: {
      width: 320
    , height: 320
    }
    , shotOffset: { left: 0
    , right: 0
    , top: 320
    , bottom: 0 }
    ,defaultWhiteBackground: true
    , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
      + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};
var optionsThree= {
  screenSize: {
    width: 320
  , height: 480
  }
  , shotSize: {
    width: 320
  , height: 320
  }
  , shotOffset: { left: 0
  , right: 0
  , top: 640
  , bottom: 0 }
  ,defaultWhiteBackground: true
  , userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

function a(title,renamedTitle,res) {
  setTimeout ( function() {
    console.log("1");
    console.log(renamedTitle+'.jpeg');
    webshot(title,renamedTitle+'.jpeg', options, function(err) {
      if(err){
        console.log("ERROR");
        res.render('index',{error:"An error occured while connecting URL's server!"});
      }
      else b(title,renamedTitle,res);
    });

  }, 0);
};
function b(title,renamedTitle,res) {
  setTimeout ( function() {
    console.log("2");
    webshot(title,renamedTitle+'2.jpeg', optionsTwo, function(err) {
      if(err){
        console.log("ERROR");
        res.render('index',{error:"An error occured while connecting URL's server!"});
      }
      else c(title,renamedTitle,res);
    });

  }, 0);
};

function c(title,renamedTitle,res) {
  setTimeout ( function() {
    console.log("3");
    webshot(title,renamedTitle+'3.jpeg', optionsThree, function(err) {
      if(err){
        console.log("ERROR");
        res.render('index',{error:"An error occured while connecting URL's server!"});
      }
      else {
        d(title,renamedTitle,res)

        }
    });

  }, 0);
};



function d(title,renamedTitle,res) {
  setTimeout ( function() {
    gif.createGif(renamedTitle); // Create gif from images
    console.log("async finished!");
    e(title,renamedTitle,res);
  }, 0);
};
function e(title,renamedTitle,res) {
  setTimeout ( function() {
    res.render('index',{title: "Oluşturuldu!",image:renamedTitle+".gif"});
  }, 0);
};

module.exports.isUrlValid = function(url) {
  if(url){
    if(!url.includes(' ')){ // Url can not contain empty character
        return true;
    }
    else return false;
  }
  else return false;
}

module.exports.create3jpeg = function(title,res){
  console.log("Loading Images");
  var renamedTitle = title.replace(/\./g,'-').replace(/\//g,'_').replace(/\:/g,'1');
  a(title,renamedTitle,res);
}
