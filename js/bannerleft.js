var width = -290;
$(".bannerleft .bannerleftfirst .more").click(function(){
	width = width -290;
	$(".bannerleft .bannerleftsecond .cover").stop().animate({
		left:width+"px"
	},600);
	$(".bannerleft .bannerleftthird .cover").stop().delay(600).animate({
		left:width+"px"
	},600);
	$(".bannerleft .bannerleftforth .cover").stop().delay(1200).animate({
		left:width+"px"
	},600);
	if(width == -870){
		// console.log(233)
		$(".bannerleft .bannerleftsecond .cover").animate({
		left:-290+"px"
	},0);
		$(".bannerleft .bannerleftthird .cover").animate({
		left:-290+"px"
	},0);
		$(".bannerleft .bannerleftforth .cover").animate({
		left:-290+"px"
	},0);
		width = -290;
	};
});
$(".bannerleft .bannerleftfirst .less").click(function(){
	width = width +290;
	$(".bannerleft .bannerleftsecond .cover").stop().animate({
		left:width+"px"
	},600);
	$(".bannerleft .bannerleftthird .cover").stop().delay(600).animate({
		left:width+"px"
	},600);
	$(".bannerleft .bannerleftforth .cover").stop().delay(1200).animate({
		left:width+"px"
	},600);
	// console.log(width)
	if(width == 0){
		// console.log(123)
		$(".bannerleft .bannerleftsecond .cover").animate({
		left:-580+"px"
	},0);
		$(".bannerleft .bannerleftthird .cover").animate({
		left:-580+"px"
	},0);
		$(".bannerleft .bannerleftforth .cover").animate({
		left:-580+"px"
	},0);
		width = -580;
	};
});