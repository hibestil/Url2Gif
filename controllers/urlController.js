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

  function captureImages(title,renamedTitle,res,numOfImages){
      console.log(numOfImages);
      console.log(renamedTitle+numOfImages+'.jpeg');
      webshot(title,renamedTitle+numOfImages+'.jpeg', options, function(err) {
        if(err){
          console.log("ERROR");
          res.render('index',{error:"An error occured while connecting URL's server!"});
        }
        else {
          if(numOfImages==1) {
          	options.shotOffset.top = 0;
            d(title,renamedTitle,res)
            return true;
          }
          numOfImages = numOfImages-1;
          options.shotOffset.top = options.shotOffset.top +320;
          captureImages(title,renamedTitle,res,numOfImages)
        }
      });

  }
  function d(title,renamedTitle,res) {
    gif.createGif(renamedTitle); // Create gif from images
    console.log("async finished!");
    e(title,renamedTitle,res);
  };
  function e(title,renamedTitle,res) {
    setTimeout ( function() {
      res.render('index',{title: "Oluşturuldu!",image:renamedTitle+".gif"});
    }, 0);
  };


  module.exports.downloadImages = function(title,res){
    console.log("Loading Images");
    var renamedTitle = title.replace(/\./g,'-').replace(/\//g,'_');
    console.log(renamedTitle)
    captureImages(title,renamedTitle,res,3);
  }
  module.exports.isUrlValid = function(url) {
    if(url){
    if(!url.includes(' ')){ // Url can not contain empty character
      return true;
    }
    else return false;
  }
  else return false;
}
