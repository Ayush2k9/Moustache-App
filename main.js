noseX = 0;
noseY = 0;
function preload() {
   moustache = loadImage("https://i.postimg.cc/YCsYW87p/Moustache-PNG-Clipart.png");
}
function setup() {
   canvas = createCanvas(300,300) ;
   canvas.center() ;
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function take_snapshot() {
    save("lel.png") ;
}
function modelLoaded() {
 console.log('modelLoaded');
}
function gotPoses(results) {
 if (results.length>0) {
     console.log(results);
     noseX = results[0].pose.nose.x - 15;
     noseY = results[0].pose.nose.y + 5;
     console.log("noseX = "+ results[0].pose.nose.x);
     console.log("noseY = "+ results[0].pose.nose.y);
 }
}
function draw() {
 image(video, 0, 0, 300, 300);
 image(moustache, noseX, noseY, 30, 15);
}
