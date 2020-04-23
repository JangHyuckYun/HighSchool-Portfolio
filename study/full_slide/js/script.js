function _move (cnt){
	let h= $("#item1>li").height();

	$("html, body").animate({scrollTop: (cnt*h)+"px"},500, function (){
		$("#item2>li").eq(cnt).addClass("focus").siblings().removeClass("focus");
	});
}
$(document).ready(function(){
	$("body").css({overflow:'hidden'})
	$(this).scrollTop(0);
	$("#item2>li").eq(0).addClass("focus").siblings().removeClass("focus");

	let cnt= 0;

	$(window).on("mousewheel",function (e){
		if($("html, body").is(":animated"))
			return;

		let wheel= e.originalEvent.wheelDelta;
		console.log(wheel);
		let h= $("#item1>li").height();

		if(wheel>0){//up
			if(cnt<=0)
				return;
			cnt--;
		}else{//down
			if(cnt>=$("#item1>li").length-1)
				return;
			cnt++;
		}
		_move(cnt);
	});
	$("#item2>li").on("click", function (){
		_move($(this).index("#item2>li"));
	})
})