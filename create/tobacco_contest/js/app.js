 // setting
 var pos = 0,pos2 = 0,pos3 = 0,pos4 = 0,pos5 = 0;
// full_slide event
function Full_Slide(){
	$(document).on("mousewheel",function(e){
		if($(".top_menu").hasClass('on')) return false
			var E = e.originalEvent.wheelDelta / 120;
		var len = $(".full_slide>section").length;
		if(!$(".full_slide").is(":animated")){
			if(E < 0 && pos < len -1){
				pos++;
				if(pos != 0){
					setTimeout(function(){
						font3();
						font4();
					},750);
				}
				$(".full_slide").animate({
					top:-100*pos+"%"
				},750);
			}else if(E > 0 &&  pos > 0){
				pos--;
				$(".full_slide").animate({
					top:-100*pos+"%"
				},750);
			}
		}
	});
}
// top_menu animaton
function all_click(){
	$(".top_menu").click(function() {
		$(this).toggleClass('on');
		if($(this).hasClass('on')){
			$(".logo").css({display:"none"});
			$(".main_menu").css({visibility:"visible","animation":"bounceInTop 1.5s both"});
			setTimeout(function(){
				$(".main_menu>ul>li").css({visibility:"visible","animation":"bounceInBottom_menu 1.5s both"});
			},900);
		}else{
			setTimeout(function(){$(".logo").css({display:"block"});},900);
			$(".main_menu").css({"animation":"bounceInBottom 1.5s both"});
			$(".main_menu>ul>li>a").css({"font-family":"outl"});
			$(".main_menu>ul>li").css({visibility:"hidden","animation":"none"});
			$(".main_menu_box").animate({left:-40+"%"},1000,function(){$(this).css({visibility:"hidden",left:"0",animation:"none"});});
		}
	});
	$(".main_menu>ul>li>a").click(function() {
		var idx = $(this).parent('li').index();
		$(".main_menu>ul>li>a").css({"font-family":"outl"});
		$(this).css({"font-family":"no_outl"});
		$(".main_menu_box").animate({opacity:0},100,function(){
			$(this).css({visibility:"hidden","animation":"none","left":"0"});
			$(".main_menu_box").eq(idx).css({visibility: "visible",animation:"bounceInRight_main_menu_box 1.5s both"});
			if(idx == 0) font2();
		});
	});
	$(".mouse,.here").click(function(){
		pos++;
		font3();
						font4();
		if(!$(".full_slide").is(":animated")){
			$(".full_slide").animate({
				top:-100*pos+"%"
			},750);
		}
	});
}
// bg-animation
function ani_op(){
	setTimeout(function(){
		$("section.main_page>.op").animate({width : 300 + "%", height: 300 + "%"}, 1700,function(){$(this).css({"border-radius":"0",top:"50%",width:"100%",height:"100%"});});
	},4950);
}
// font-animation
function font(){
	let text = "Smoking is the most obvious and most honorable act of suicide.";
	var pos2 = 0;
	setInterval(function(){
		if(pos2 == text.length) return false;
		if(pos2 == 10 || pos2 == 27 || pos2 == 31 || pos2 == 50) $("section.main_page>h1").append("<br>");
		else $("section.main_page>h1").append(text.charAt(pos2));
		pos2++;
	},70);
}
// main_menu_box font-animation
function font2(){
	if(pos3 != 0) return false;
	var text = "흡연은 세계 4대 비전염성 질환의 주요 사망 원인으로,  2010년 한 해 동안 630만명을 사망에 이르게 하였습니다. 이는 운동부족, 음주, 짠 음식 섭취 등의  건강 위험요인에 의한 사망자수보다 약 2배 높았습니다. 또한, 건강 위험요인과 질환간의 관계에서도 운동부족, 음주, 짠 음식 섭취는 2~3가지의 질병 사망과 관련이 있는 반면에 흡연은 세계 4대 비전염성 질환 모두에서 사망 원인으로 나타났습니다.";
	setInterval(function(){
		if(pos3 == text.length){
			return false;
		}
		if(pos3 == 31 || pos3 == 65 || pos3 == 88 || pos3 == 119 || pos3 == 143 || pos3 == 186) $("section.main_page>h1").append("<br>");
		else $(".main_menu_box_1>p").append(text.charAt(pos3));
		pos3++;
	},150);
}
function font3(){
	let text = "Protect our lungs from smoking. Choose health, not tobacco!";
	setInterval(function(){
		if(pos4 == text.length){
			return false;
		}
		if(pos4 == 31) $(".explanation>.p1").append("<br>");
		else $(".explanation>.p1").append(text.charAt(pos4));
		pos4++;
	},65);
}
function font4(){
	let text = "담배로부터 우리의 폐를 지켜주세요. 담배가 아닌 건강을 선택하세요!";
	setInterval(function(){
		if(pos5 == text.length){
			return false;
		}
		if(pos5 == 19) $(".explanation>.p2").append("<br>");
		else $(".explanation>.p2").append(text.charAt(pos5));
		pos5++;
	},105);
}

function key_event(){
	$(document).keydown(function(event) {
		if(event.keyCode == 9){
			return false;
		}
	});
}

// 첫화면 애니메이션
ani_op();
key_event();
setTimeout(function(){ font(); },600);
// 첫화면 애니메이션 끝난 후 실행
setTimeout(function(){
	$(".btn_box,.top_menu").css({display:"block"});
	Full_Slide(); all_click();
},4300);
