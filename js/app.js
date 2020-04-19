
class App {
	constructor() {
		this.txt = localStorage.getItem("txt") == null ? "all" : localStorage.getItem("txt");
		this.pos = localStorage.getItem("pos") == null ? 0 : Number(localStorage.getItem("pos"));
		this.len = $("main section").length - 1;
		this.firstChk = true;

		this.eve();
		this.menuCheck();
		$("main").css({top:-this.pos * 100 + "%"});
		$(`[data-txt="${this.txt}"]`).click();
		if(this.pos === 0) this.ani();
	}

	eve() {
		$(window)
		.on('mousewheel',this.Wheel.bind(this))
		.on("beforeunload", this.Save.bind(this))

		$(document)
		.on("click", ".pro a", this.Clk.bind(this))
		.on("click", ".menu ul li > a", this.menuClk.bind(this))
	}

	menuCheck() {
		$(".menu > ul >li > a").css({color:"white"});
		$(".menu > ul >li").eq(this.pos).find("a").css({color:"#5d7eb0"});
	}

	ani() {
		$(".typing").text("");
		let typingBool = false; 
		let typingIdx=0; 
		let typingTxt = $(".typing-txt").text(); 

		typingTxt=typingTxt.split("");
		let tyInt = setInterval(typing.bind(this),100);      

		function typing(){
			if(typingIdx < typingTxt.length){ 
				$(".typing").append(typingTxt[typingIdx]);  
				typingIdx++; 
			} else { 
				clearInterval(tyInt); 
			} 
		}  

	}

	menuClk(e) {
		if(!$("main").is(":animated")) {
			this.pos = $(e.target).parent().index();
			this.menuCheck();
			$("main").animate({top:-this.pos * 100 + "%"}, 500);
		}
	}

	Clk(e) {
		this.txt = $(e.target).data("txt");
		$(".pro a").css({color:"white"});
		$(e.target).css({color:"black"});

		$(`.contents > div.${this.txt}`).css({display:"block"});
		$(`.contents > div:not(.${this.txt})`).css({display:"none"});
	}


	Wheel(e) {
		if(!$("main").is(":animated") && !$(e.target).parents(".contents").length > 0 && !$(e.target).hasClass('contents')) {
			function chk() { 
				if(this.pos === 0 && this.firstChk) {
					this.ani();
					this.firstChk = false;
				}
			}
			this.pos -= e.originalEvent.wheelDelta / 120;
			this.pos = this.pos > this.len ? this.len : (this.pos < 0 ? 0 : this.pos);
			this.menuCheck();
			$("main").animate({top: -this.pos * 100 + "%"}, 500, chk.bind(this));
		}

	}

	Save() {
		localStorage.setItem("pos", this.pos);
		localStorage.setItem("txt", this.txt);
	}

}

window.onload = _ => new App();