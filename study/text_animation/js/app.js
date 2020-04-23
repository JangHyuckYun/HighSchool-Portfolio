window.onload = function(){
	$("#s_text").css({display:"none"});
	$("#v_text").css({display:"block"});
	let 
	res,
	text = "곧 있으면 2019년",
	i = 0,
	bool = true;
	setInterval(function(){
		if(bool){
			if(i >= text.length) return bool = false;
			i++;
		}else {
			if(i == 0) return bool = true;
			i--;
		}

		res = text.substr(0, i);
		$("#v_text").text(res);

	},150);
}