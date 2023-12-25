difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500,500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        console.log("lw" + leftWristX);
        rightWristX = results[0].pose.rightWrist.x;
        console.log("rw" + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}
function draw()
{
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    text('Vishnu', 50, 300);

}