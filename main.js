var marioX

function preload() {
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

    video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game();
	background("#D3D3D3");
	if(noseX<300){
		marioX = mario.x - 1;
	}

	if(noseX>300){
		marioX = mario.x + 1;
	}

	if(noseY<150){
		marioY = mario.y - 1;
	}
	image(img, marioX, marioY, 40, 70);
}

function modelLoaded(){
	console.log('Model Loaded');
}

function gotPoses(results){
    if(results.length > 0){
		// console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function starGame(){
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game is Loading..."
}



