const
one = v => document.querySelector(v),
all = v => Array.from(document.querySelectorAll(v));

drag = tg => {
	if(tg.innerHTML == "드래그"){
		tg.innerHTML = "완료";
		let div = document.createElement("div");
		div.classList.add("box");
		one("body").prepend(div);
	}
	else if(tg.innerHTML == "완료") {

		ctx.beginPath();
		ctx.clearRect(0,0,600,600);
		ctx.drawImage(img, beforeX, beforeY);
		div = false;
		tg.innerHTML = "드래그";
	}
}

download = (link, cvs, fileName) => {
	link.href = one(cvs).toDataURL();
	link.download = fileName;
}

draw = (x,y, color) => {
	ctx.lineWidth = 2;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.moveTo(beforeX, beforeY);
	ctx.lineTo(x,y);
	ctx.stroke();

	beforeX = x;
	beforeY = y;
}

init = _ => {
	let img = new Image();
	img.src = "img/iu.jpg";
	ctx.beginPath();
	ctx.drawImage(img, 50, 50, 200, 500);

	one("#test").addEventListener("click", function() {
		download(this, "#myCvs", "test1.png");
	})

	window.addEventListener("mousedown", function(e) {
		if(e.target.getAttribute("id") === "myCvs") {
			bool = true;
			cRect = cvs.getBoundingClientRect();
			beforeX = Math.round(e.clientX - cRect.left);
			beforeY = Math.round(e.clientY - cRect.top); 
			ttX = e.clientX;
			ttY = e.clientY;
		}
	})

	window.addEventListener("mousemove", function(e) {
		if(bool) {
			cRect = cvs.getBoundingClientRect();      
			cvsX = Math.round(e.clientX - cRect.left);
			cvsY = Math.round(e.clientY - cRect.top);

			if(one(".drag").innerHTML === "드래그"){
				draw(cvsX, cvsY, color);
			} else {
				console.log("ASd");
				imgWidth = e.clientX - ttX;
				imgHeight = e.clientY - ttY;
				one(".box").style.width = (e.clientX - ttX) + "px";
				one(".box").style.height = (e.clientY - ttY) + "px";
				one(".box").style.left = ttX + "px";
				one(".box").style.top = ttY + "px";
			}
		}
	})

	window.addEventListener("mouseup", function(e) {
		if(bool) {
			cRect = cvs.getBoundingClientRect();      
			cvsX = Math.round(e.clientX - cRect.left);
			cvsY = Math.round(e.clientY - cRect.top);
			bool = false;
		}
	})

}

let
cvs = one("#myCvs"),
ctx = cvs.getContext("2d"),
bool = false,
color = "black",
beforeX = 0,
beforeY = 0,
cRect,
cvsX,
cvsY,
ttX,
ttY,
imgWidth,
imgHeight,
div = false;

cvs.width = 600;
cvs.height = 600;

init();
