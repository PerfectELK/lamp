
var canvas = document.getElementById("canvas"),
	ctx    = canvas.getContext('2d'),
	height = canvas.height = window.innerHeight,
	width  = canvas.width  = window.innerWidth,
	opts = [],
	counter = 0;
	
	

function options(scale,color){
	this.scale = scale;
	this.width = this.scale * 100;
	this.height = this.scale * 100;
	this.widthGrad = this.scale * 100;
	this.color = color;
}

function addOpts(){
	var optss = new options(5,"#000");
	opts.push(optss);
}

addOpts();
console.log(opts);


var img = new Image();
img.src = 'lamp.png';

var gradients = [];

function addGradient(color1, color2){
	var gradient = ctx.createLinearGradient(0, 0, opts[0].widthGrad, opts[0].widthGrad);
	gradient.addColorStop(0, color1);
	gradient.addColorStop(1, color2);

	gradients.push(gradient);
}
addGradient("#F11D0DFF", "#1CFE00FF");
addGradient("#D72730FF", "#38C649FF");
addGradient("#0018FE", "#FFFFFFFF");
addGradient("#352ED0", "#718D7CFF");
addGradient("#00FEF5", "#F10DDAFF");
addGradient("#38C0C6", "#BD41AEFF");
addGradient("#12EC14", "#F10DDAFF");
addGradient("#12EC14", "#55A");
addGradient("#42BC69", "#669");
addGradient("#55A", "#F10");
addGradient("#21E", "#C43");
addGradient("#FAFC02FF","#FF00E5FF");
addGradient("#AFB34BFF","#B549A5FF");
addGradient("#FF00F9FF","#FF8800FF");

console.log(gradients);

function animateGradient(){
	counter = counter + 1;
	if (counter > 13){
		counter = 0;
	}
	return(gradients[counter]);
}
var linkAnimateGradient = animateGradient();
function goLight(){


		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx.beginPath();
		ctx.drawImage(img, 10, 10,opts[0].width,opts[0].height);

		ctx.beginPath();
		ctx.fillStyle = opts.color;
		ctx.moveTo(opts[0].scale * 32.3,opts[0].scale *37);
		ctx.lineTo(opts[0].scale * 71.6,opts[0].scale *37);
		ctx.lineTo(opts[0].scale * 76.8,opts[0].scale *25);
		ctx.globalAlpha = 0.5;
		ctx.bezierCurveTo(opts[0].scale * 76.8, opts[0].scale *25, opts[0].scale * 85.6, opts[0].scale * 9, opts[0].scale * 50, opts[0].scale * 10);
		ctx.bezierCurveTo(opts[0].scale * 50, opts[0].scale * 10, opts[0].scale * 23, opts[0].scale * 8.5, opts[0].scale * 26.8, opts[0].scale * 23.4);
		ctx.fillStyle = animateGradient();
		ctx.strokeStyle = ctx.fillStyle;
		ctx.shadowColor = "#808080FF";
		ctx.shadowBlur = 20;
		ctx.shadowOffsetX = -10;
		ctx.shadowOffsetY = -5;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		console.log(counter);

setTimeout(goLight, 1000/4);
}
goLight();

window.onresize = function(){
		canvas.width  = window.innerWidth;
		canvas.height = window.innerHeight;
		ctx.beginPath();
		ctx.drawImage(img, 10, 10,opts[0].width,opts[0].height);

		ctx.beginPath();
		ctx.fillStyle = opts.color;
		ctx.moveTo(opts[0].scale * 32.5,opts[0].scale *37);
		ctx.lineTo(opts[0].scale * 71.6,opts[0].scale *37);
		ctx.lineTo(opts[0].scale * 76.8,opts[0].scale *25);
		ctx.bezierCurveTo(opts[0].scale * 76.8, opts[0].scale *25, opts[0].scale * 85.6, opts[0].scale * 9, opts[0].scale * 50, opts[0].scale * 10);
		ctx.bezierCurveTo(opts[0].scale * 50, opts[0].scale * 10, opts[0].scale * 23, opts[0].scale * 8, opts[0].scale * 27, opts[0].scale * 23.9);
		ctx.fillStyle = gradients[0];
		ctx.strokeStyle = gradients[0];
		ctx.shadowColor = "#808080FF";
		ctx.shadowBlur = 20;
		ctx.shadowOffsetX = -10;
		ctx.shadowOffsetY = -5;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
	}





