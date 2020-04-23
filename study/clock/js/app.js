// setting
const
center = "translate(-50%, -50%)",
one = v => document.querySelector(v),
all = v => Array.from(document.querySelectorAll(v)),
stop = _ => clearInterval(clock);

let 
clock, 
nbChk = "",
hour = -1, 
minute = -1, 
second = -1;

start = _ => { if(modifyCheck()) startInterval(1000, work); }

modifyCheck = _ => {
	let txt = one(".modify").innerHTML.trim();
	if(txt === "수정") return true;
	else return false;
}
numberMaxLength = e => { // input 글자수 제한
	if(e.value.length > e.maxLength){
		e.value = e.value.slice(0, e.maxLength);
	}
}

nowTime = _ => {
	if(modifyCheck()){
		console.log("ASd");
		clearInterval(work);
		hour = -1;
		minute = -1; 
		second = -1;
		work();
		clock = setInterval(work, 1000);
	}
}

modify = _ => { // 시간 수정
	let text =  one(".modify").innerHTML;
	if(text === "수정"){
		all(".val").forEach(v => v.value = 0);
		clearInterval(clock);
		one(".modify").innerHTML = "수정완료";
	}else if(text === "수정완료") {
		hour = one("input[name='hour']").value;
		minute = one("input[name='minute']").value;
		second = one("input[name='second']").value;
		if(hour == "" && minute == "" && second == "") {
			return alert("값을 넣어주세요");
		}else {
			if(hour == "" || minute == "" || second == "") return alert("값을 넣어 주세요.");
			else if(hour > 12 || hour < 1 || minute > 60 || minute < 0 || second > 60 || second < 0) return alert("정상적인 값을 넣어주세요.");
			neddle_position((hour * 30), (minute * 6), (second * 6));
		}
		work();
		clock = setInterval(work, 1000);
		nbChk = one(".nbCheck").value;
		console.log(nbChk);
		one(".nb > p > span.ap").innerHTML = nbChk;
		one(".modify").innerHTML = "수정";
		all(".val").forEach(v => { v.value = ""; });
	}
	
	one(".modifyPage").classList.toggle("hidden");
}

neddle_position = (hour, minute, second) => { // 시곗바늘 위치 조정
	one("span.h").innerHTML = (hour / 30);
	one("span.m").innerHTML = (minute / 6);
	one("span.s").innerHTML = (second / 6);
	one(".hour").style.transform = center+` rotate(${hour}deg)`;
	one(".minute").style.transform = center+` rotate(${minute}deg)`;
	one(".second").style.transform = center+` rotate(${second}deg)`;
}

startInterval = (seconds, callback) => { // setInterval callback
	callback();
	return clock = setInterval(callback, seconds);
}

work = _ => { // 메인 함수
	if(hour == -1 && minute == -1 && second == -1){
		let date = new Date();
		nbChk = date.getHours() < 12 ? "a.m" : "p.m";
		one(".nb > p > span.ap").innerHTML = nbChk;
		neddle_position((date.getHours() * 30), (date.getMinutes() * 6), (date.getSeconds() * 6));
	}else {
		if(second > 59){
			second = 0;
			++minute;
		}
		if(minute > 59) {
			minute = 0;
			++hour;
		}
		if(hour > 12) hour = 1;

		++second;
		neddle_position((hour * 30), (minute * 6), (second * 6));
	}
}

startInterval(1000, work);
