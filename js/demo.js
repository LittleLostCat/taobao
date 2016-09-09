$.ajax({
	url : "http://www.ikindness.cn/api/test/get",
}).done(function(data){
	data.code || $(".main .all .mainbody .banner").banner({
		setting : data.data,
		type : "slide",
		indicator : 2
	});
});