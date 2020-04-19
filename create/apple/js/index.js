$(document).ready(function() {
	$("#first>img").animate({opacity:"0.48"}, 1000);
	$("#firstbg>h1").css({"opacity":"1"});

	$("#click>b").on("click",function(){
		$("#firstbg").css({"display":"none"});
		$("#all").css({"display":"block"});
	});
});