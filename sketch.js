var headshot;
function preload() {
	headshot = loadImage('headshot.png');
}
function setup() {
	createCanvas(700, 400);
}

function draw() {
	noStroke();
	fill(54,54,70);
	rect(70,0,700,300);
	image(headshot,0,100);
}
