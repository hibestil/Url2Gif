
var GIFEncoder = require('gifencoder');
var Canvas = require('canvas');
var fs = require('fs');

var encoder = new GIFEncoder(320, 240);


// use node-canvas
var canvas = new Canvas(320, 240);
var ctx = canvas.getContext('2d');
var img = new Canvas.Image;
var Image = Canvas.Image;



module.exports.createGif = function(urlAdress){
  try {
    console.log("IN gif controller  :"+urlAdress+".gif");
    // stream the results as they are available into myanimated.gif
    encoder.createReadStream().pipe(fs.createWriteStream('public/images/'+urlAdress+'.gif'));

    encoder.start();
    encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
    encoder.setDelay(500);  // frame delay in ms
    encoder.setQuality(10); // image quality. 10 is default.

    /*
    // red rectangle
    ctx.fillStyle = '#fff';
    ctx.font = '18px Impact';
    ctx.fillText(urlAdress, 10, 100);

    encoder.addFrame(ctx);
    */
    img = new Image();
    img.src = fs.readFileSync(urlAdress+'.jpeg');

    ctx.fillStyle = '#000';
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = '18px Impact';
    ctx.fillText("Url2Gif", 0, 0);
    encoder.addFrame(ctx);

    img = new Image();
    img.src = fs.readFileSync(urlAdress+'2.jpeg');
    ctx.fillStyle = '#000';
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = '18px Impact';
    ctx.fillText("Url2Gif", 0, 0);
    encoder.addFrame(ctx);

    img = new Image();
    img.src = fs.readFileSync(urlAdress+'3.jpeg');
    ctx.fillStyle = '#000';
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.font = '18px Impact';
    ctx.fillText("Url2Gif", 0, 0);
    encoder.addFrame(ctx);



  } catch (e) {
      console.log("Error while runing try/catch block!");
  } finally {
    encoder.finish();

    console.log("Finish block executed");
  }
}
