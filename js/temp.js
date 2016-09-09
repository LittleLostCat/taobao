function copy(origin){
	var result;
	if(typeof origin === "object"){
		if(origin instanceof Array){
			result = [];
			for(var i = 0, len = origin.length; i < len; i++){
				result[i] = copy(origin[i]);
			}
		}else{
			result = {};
			for(var i in origin){
				result[i] = copy(origin[i]);
			}
		}
	}else{
		result = origin;
	}
	return result;
}
$.ajax({
	type : "get",
	url : "http://www.ikindness.cn/api/test/getFund",
	success : function(data){
		var arr = ["科技", "生活", "设计", "娱乐", "农业", "公益"];
		var _data = copy(data.data);
		// _data.splice(8, _data.length);
		$(".navselect").append(template("tmpl1",{
			data : _data,
			title : arr
		}));
		var _data = data.data;
		for(var i=0;i<6;i++){
			var k=i*8
			$(".navselect .tecnology .firstlink").eq(i).prepend("<img src=\""+_data[k].image+"\"/>");
			$(".navselect .tecnology .firstlink .item-info .name").eq(i).html(_data[k].name);
			$(".navselect .tecnology .firstlink .item-info .j-money").eq(i).html(_data[k].sum);
		}
		for(var i=0;i<6;i++){
			for(var j=1;j<8;j++){
				var m=8*i+j;
				var n=7*i+j-1
				$(".navselect .tecnology .li a.shadow").eq(n).prepend("<img src=\""+ _data[m].image +"\"/>");
				$(".navselect .tecnology .li .pro-intro").eq(n).html( _data[m].name);
				$(".navselect .tecnology .li").eq(n).find(".info-num").eq(0).html( _data[m].rate + "%");
				var $rate = parseInt($(".navselect .tecnology .li").eq(n).find(".info-num").eq(0).html());
				if($rate>=100){
					$(".navselect .tecnology .li .fore").eq(n).css("margin-left",0+"px");
				}else{
					$(".navselect .tecnology .li .fore").eq(n).css("margin-left",-(100-$rate)+"%");
				}
				$(".navselect .tecnology .li").eq(n).find(".info-num").eq(1).html( _data[m].sum);
				$(".navselect .tecnology .li").eq(n).find(".info-num").eq(2).html( _data[m].amount);
				for(var k=0;k<_data[m].label.length;k++){
					$(".navselect .tecnology .li .tag").eq(n).append("<label class=\"button\">" + _data[m].label[k]+"</label>");
				}
			}
		};
		$(".li a.shadow").mouseenter(function(){
			$(this).find(".shadowimg").stop(true).animate({opacity:"1"},300);
		}).mouseleave(function(){
			$(this).find(".shadowimg").stop(true).animate({opacity:"0"},200);
		});
	}
});