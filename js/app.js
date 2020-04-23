function App() {
	const obj = {
		"tobacco_contest":{
			"class":"cre",
			"a":"create/tobacco_contest/index.html",
			"txt": {"title": "담배공모전(우수 작품)", "day": "약 2일",
			"content":"아래로 스크롤하면 추천하는 금연 사이트 들이 나오고, 상단의 메뉴 아이콘를 클릭하면 금연을 해야하는 이유와 재흡연 시 대처법등이 있습니다."} 
		},
		"todos":{
			"class":"cre",
			"a":"create/todos/index.html",
			"txt": {"title": "todos", "day": "약 4시간",
			"content":"텍스트를 친 후 엔터를 누르면 할 일이 추가되고 추가 된 것 왼쪽을 누르면 체크를 할 수 있습니다. Clear completed 를 누르면 체크 한 것들을 지울 수 있고, All을 누르면 전체를 볼 수 있고, Active 를 누르면 체크 안된것들만, Completed는 체크된 것들만 볼 수 있습니다."} 
		},
		"layout_design":{
			"class":"cre",
			"a":"create/layout_design1/index.html",
			"txt": {"title": "레이아웃 디자인", "day": "약 하루",
			"content":"css 디자인을 공부하기 위해 만든 사이트입니다.."} 
		},
		"border_animation":{
			"class":"cre",
			"a":"create/border_animation/index.html",
			"txt": {"title": "border_animation", "day": "약 2~3시간",
			"content":"각각의 메뉴를 호버하면 이미지가 커지고 클릭시 팝업창이 뜨며 이전것과 다음것을 볼 수 있습니다."} 
		},
		"korea_car":{
			"class":"contest",
			"a":"contest/korea_car/index.html",
			"txt": {"title": "전국대회 문제(자동차)", "day": "약 일주일",
			"content":"랜덤으로 값을 지정한 후 그중 가장 큰 값만 띄어지게 만드는 기능입니다."} 
		},
		"subway":{
			"class":"contest",
			"a":"contest/subway/index.html",
			"txt": {"title": "전국대회 문제(지하철)", "day": "약 일주일",
			"content":"역을 검색하면 아래 리스트가 나타나고 위, 아래 화살표로 이동 가능합니다. 엔터시 선택한 역의 정보가 아래에 뜨고, 검색시간도 나타납니다."} 
		},
		"full_slide":{
			"class":"study",
			"a":"study/full_slide/index.html",
			"txt": {"title": "풀 스크린 슬라이드", "day": "약 2일",
			"content":"마우스를 위아래로 스크롤 할 때마다 전체화면 단위로 이동되고, 우측 상단의 버튼을 누를때마다 그 위치로 이동된다."} 
		},
		"full_slide":{
			"class":"study",
			"a":"study/full_slide/index.html",
			"txt": {"title": "풀 스크린 슬라이드", "day": "약 2일",
			"content":"마우스를 위아래로 스크롤 할 때마다 전체화면 단위로 이동되고, 우측 상단의 버튼을 누를때마다 그 위치로 이동된다."} 
		},
		"snow":{
			"class":"study",
			"a":"study/snow/index.html",
			"txt": {"title": "snow Animation", "day": "약 3~4시간",
			"content":"Math.random() 이라는 함수를 공부하기 위해 만든 기능입니다. 페이지 로드 후 몇초 후면 눈이 내립니다."} 
		},
		"clock":{
			"class":"study",
			"a":"study/clock/index.html",
			"txt": {"title": "clock", "day": "약 3~4시간",
			"content":"시계 알고리즘을 공부하기 위해 만들었습니다. 시계를 멈췄다가 움직이는 기능하고, 수정할 수 있는 기능이 있습니다."} 
		},
		"canvas_img_download":{
			"class":"study",
			"a":"study/canvas_img_download/index.html",
			"txt": {"title": "canvas_img_download", "day": "약 이틀",
			"content":"캔버스에 자신이 그리고 싶은 그림을 그린 후 다운로드 버튼을 누르면 다운로드가 됩니다."} 
		},

	};
	
	let
	pos = "",
	list = {"cre":"fa-keyboard-o", "contest":"fa-connectdevelop", "study":"fa-diamond"};

	function menuClick(e) {
		pos = $(this).data("txt");
		$(this).parent().css({background:"#1E1E1E", color:"white"}).siblings().css({color:"#1E1E1E", background:"#ececec"});

		$(`.${pos}`).css({display:"block"});
		$(`.content:not(.${pos})`).css({display:"none"});
	}
	
	function eve() {
		$(document)
		.on("click", ".pro-menu li > label", menuClick)
		.on("click", "#aboutClk", move)
		.on("click", "#arcAbout", move)
		.on("click", "#projectClk", movePro)
		.on("click", "#arcPro", movePro)
	}

	function movePro(e) {
		$("html, body").animate({scrollTop: 1247}, 300);	
	}


	function move(e) {
		$("html, body").animate({scrollTop: 495}, 300);	
	}

	function create() {
		for(let [key, v] of Object.entries(obj)) {
			$(".contents").append(`
				<div class="content relative ${v.class}">
				<a href="${v.a}" target="_blank">
				<div class="i-box">
				<i class="fa ${list[v.class]}"></i>
				</div>
				<div class="p-box">
				<h3>${v.txt.title}</h3>
				<p>제작 소요기간: "${v.txt.day}"</p>
				<p>설명: "${v.txt.content}"</p>
				</div>
				</a>
				</div>
				`);
		}
	}

	eve();
	create();
	$(".pro-menu li").eq(0).find("label").click();
}


window.onload = function() { App(); }