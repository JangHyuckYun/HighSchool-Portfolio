window.onload = function(){
	$("body").css({overflow:"hidden"});
	setInterval(function(){//눈 생성 무한으로
		rr = Math.floor(Math.random() * 30) + 10; //width,height 랜덤값
		w = Math.floor(Math.random() * ($('body').width() * 0.84));// 눈 위치 랜덤값
		num =  Math.floor(Math.random() * 8000) + 4000;//눈 내려오는시간 랜덤값
		$('body').prepend($('<div class="dot" style="width:'+rr+'px; height:'+rr+'px;top:-10px; left:'+w+'px; "></div>').animate({top:"100%",left:w+"px"},num));
	},150);//눈 생성시간
}