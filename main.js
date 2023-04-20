noseX=0;
noseY=0;

function preload() {
    clownnose = loadImage('https://i.postimg.cc/RVtMnKxH/clown-nose.png');
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(clownnose, noseX, noseY, 30, 30);
}


function Snapshot() {
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -9;
        noseY = results[0].pose.nose.y -8;
        console.log("nose x = " + noseX);   
        console.log("nose y = " + noseY);
    }
}