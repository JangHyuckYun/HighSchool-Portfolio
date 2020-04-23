alert("※ 익스플로러 외의 다른것은 가능합니다.");

//setting
const
one = function(v){ document.querySelector(v) }, 
cvs = document.querySelector("#myCvs");
cvs.width = 1200;
cvs.height = 600;

const
ctx = cvs.getContext("2d"),
cvsX = cvs.offsetWidth / 2,
cvsY = cvs.offsetHeight / 2,
color = ["red", "green", "blue","yellow", "purple", "orange", "red", "blue", "skyblue", "red"];
let ratio = [];

while( ratio.length != 10 ){
	ratio.push( Math.floor( (Math.random()*(100-1+1))+1));
}
let m = ratio.reduce( function(acc,v){  return acc+v; } )/100;
ratio =  ratio.map( function(v) {return v/m; } );

let
arr,
maxAngle = 0,
start = 1.5,
end = 1.5,
max = Math.max.apply(null, ratio);

 function draw(x, y, start, end, color) { // 원 그리는 함수
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo( x, y );
	ctx.arc( x, y, 210, (start * Math.PI), (end * Math.PI), false);
	ctx.lineTo(x, y);
	ctx.fill();
}

 function init() { // 처음 실행 함수
	// arr = arrPush();
	let arrAngle = 0;

	for (let i = 0, len = ratio.length; i < len; i++) {
		let res = 2 * ratio[i] / 100;
		end = end + res;
		arrAngle += (ratio[i] / 100 * 100) * (360 / 100);

		if(ratio[i] == max && len != 1) {
			maxAngle = arrAngle - ((max / 100 * 100) * (360 / 100) / 2);
			// 일부값 ÷ 전체값 × 100
			let testX = cvsX + (Math.cos((90 + maxAngle) * Math.PI / 180)) * -15;
			let testY = cvsY + (Math.sin((90 + maxAngle) * Math.PI / 180)) * -15;
			draw(testX, testY, start, end, color[i])
		}else {
			draw(cvsX, cvsY, start, end, color[i]);
		}

		start = end;
	}
}

window.onload = function() {init()};
