class Station{
	constructor (){
		this.val;
		this.up_time_first;
		this.up_time_last;
		this.down_time_first;
		this.down_time_last;
		this.D_day = [3, 1, 1, 1, 1, 1, 2][new Date().getDay()];
		this.station_cd;
		this.line_num = "";
		this.name = "";
		this.pos = -1;
		this.key = "";
		this.wrap= $(".autocomplete>ul");

		this.list= [];
		this.key= "";

		this.getLine={
			"1": "1호선",
			"2": "2호선",
			"3": "3호선",
			"4": "4호선",
			"5": "5호선",
			"6": "6호선",
			"7": "7호선",
			"8": "8호선",
			"9": "9호선",
			"k": "공항철도",
			"b": "분당선",
			"a": "공항철도",
			"g": "경춘선",
			"s": "신분당선",
			"su": "수인선",
			"i": "인천 1호선",
			"e": "용인경전철",
			"u": "의정부경전철",
		};
		$(".timer").append($("<span class='time'></span>"));
		this.eve();
	}
	eve (){ // event
		$(document)
		.on("mouseenter",".autocomplete li",this.mouseenter)
		.on("keyup", this.Onkeydown.bind(this)) // this == 클래스
		.on("click",".autocomplete li",this.Enter.bind(this))
	}
	mouseenter(e){ // hover event
		station.pos = $(this).index();
		$("input").val($(".autocomplete li").eq(station.pos).find(".name").text());
		$(".autocomplete li").removeClass('active').eq(station.pos).addClass('active');
	}
	Onkeydown (e){ // key event
		console.log("asd");
		if(e.keyCode == 40 && $(".autocomplete li")) return this.Down();
		if(e.keyCode == 38 && $(".autocomplete li")) return this.Up();
		if(e.keyCode == 13 && $(".autocomplete li")){
			this.Enter();
			return this.wrap.empty();
		}

		this.pos = -1;
		this.key= $(e.target).val();
		this.wrap.empty();
		if(this.key=="") return;
		this.list = stationList.data.filter(f => f.station_nm.includes(this.key)).sort( (a, b) => b.station_nm > a.station_nm? -1: 1).slice(0, 10).map(v =>{
			this.wrap.append(`<li data-line=${v.line_num}><span class="name">${v.station_nm}</span><span class="num">${this.getLine[v.line_num]}</span></li>`);
			return v;
		});
		this.val = $("input").val();
		$(".autocomplete li>.name:contains('"+this.val+"')").each( (idx, tg) =>{
			$(tg).html($(tg).text().replace(new RegExp("("+this.val+")", 'gi'), "<span class='text-red'>$1</span>"));
		});
	}
	Down(){
		this.pos++;
		console.log(this.pos);
		$(".active").removeClass("active");
		if(this.pos >= this.list.length)
			this.pos= 0;
		$(".autocomplete li").eq(this.pos).addClass("active");
		this.name = $(".autocomplete li").eq(this.pos).find(".name").text();
		this.line_num = $(".autocomplete li").eq(this.pos).find(".num").text();
		$("input").val(this.name);
	}
	Up(){
		console.log("up");
		this.pos--;
		if(this.pos < 0)
			this.pos= this.list.length-1;
		$(".active").removeClass("active");
		$(".autocomplete li").eq(this.pos).addClass("active");
		this.name = $(".autocomplete li").eq(this.pos).find(".name").text();
		$("input").val(this.name);
	}
	Enter(){
		let start= new Date();
		if($(".result > div")) $(".result").empty();
		stationList.data.filter(v=> v.station_nm.includes($("input").val())).map(v=>{
			this.up_time = timeList.data.filter(t=>t.station_cd == v.station_cd && t.week_tag == this.D_day && t.line_num == v.line_num && t.inout_tag == 1);
			this.down_time = timeList.data.filter(t=>t.station_cd == v.station_cd && t.week_tag == this.D_day && t.line_num == v.line_num && t.inout_tag == 2);

			if(!this.up_time[0]) this.up_time[0] = {first_time : "",last_time : ""};
			if(!this.down_time[0]) this.down_time[0] = {first_time : "",last_time : ""};
			
			$(".result").append(`
				<div class="res">
				<h1>${v.station_nm}</h1>
				<p>${this.getLine[v.line_num]}</p>
				<h1>상행선</h1>
				<p>${this.up_time[0].first_time}</p>
				<p>${this.up_time[0].last_time}</p>
				<h1>하행선</h1>
				<p>${this.down_time[0].first_time}</p>
				<p>${this.down_time[0].last_time}</p>

				</div>
				`);
		});
		$(".time").html("검색 걸린 시간: "+(new Date() - start)/1000+"초");
	}
}

window.onload= e => station = new Station();