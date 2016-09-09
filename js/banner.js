var imgarr=["TB1AshIKVXXXXa6XXXXXXXXXXXX-540-500.jpg_q90.jpg",
			"TB1BWOmKVXXXXbbaXXXXXXXXXXX-540-500.jpg_q90.jpg",
			"TB1HYWTKVXXXXbWXpXXXXXXXXXX-540-500.jpg_q90.jpg",
			"TB11cJmKFXXXXXnXVXXXXXXXXXX-540-500.jpg_q90.jpg",
			"TB185BdKVXXXXamapXXXXXXXXXX-540-500.jpg_q90.jpg"
			]
$.fn.extend({
	banner : function(option){
		var animateType = "_" + option.type;
		this._data = option.setting;
		this._dataLen = option.setting.length;
		// console.log(this._data);
		this._index = 0;
		this._indicatorType = option.indicator;
		// console.log(this[animateType]);
		this[animateType] && this[animateType](this); 
	},
	_tab : function($banner){
		$banner.addClass("tab")._init(function(index){
			$($banner.selector + " a").eq(index).addClass("current").siblings().removeClass("current");
		});
	},
	_fade : function($banner){
		$banner.addClass("fade")._init(function(index){
			$($banner.selector + " a").eq(index).fadeIn().siblings("a").fadeOut();
		});
	},
	_slide : function($banner){
		$banner.addClass("slide")._init(function(index, _prevIndex){
			var width = $banner.width(),
				dataLen = 5,
				prevIndex = _prevIndex || (index - 1 >= 0 ? index - 1 : dataLen - index - 1),
				nextIndx = index + 1 >= dataLen ? dataLen - index - 1: index + 1;
			$($banner.selector + " a").eq(index).css("left", width + "px").animate({
				left : 0
			});
			$($banner.selector + " a").eq(prevIndex).animate({
				left : - width + "px"
			});
			typeof _prevIndex === "number" || $($banner.selector + " a").eq(nextIndx).css("left" , width + "px");   //作用是什么有没有没影响
		});	
	},
	_init : function(setAction){
		var $banner = this,
			dataLen = 5,
			prevIndex;
		$banner._createDOM().delegate(".indicator em", "click", function(){
			prevIndex = $banner._index;
			// console.log(prevIndex);
			$banner._index = $(this).index();
			$banner._changeMovement(setAction, prevIndex);
		})._autoChange(setAction);
	},
	_createImage : function(){
		var $banner = this,
			data = $banner._data,
			dataLen =5,
			i;
		for(i = 0; i < dataLen; i++){
			$banner.append("<a class=\"" + (i  ? "" : "current") + "\" style=\"background-image:url(./img/banner/" + imgarr[i] + ")\"></a>");
		}
	},
	_createIndicator : function(type){
		var $indicator = $("<div class=\"indicator theme" + type + "\"></div>");
		var $banner = this,
			data = $banner._data,
			dataLen = 5,
			i,
			len = imgarr.length;
		for(i = 1; i <= len; i++){
			$indicator.append("<em class=\"" + (i >> 1 ? "" : "current") + "\">" + (type >> 1 ? ""  : i) + "</em>")
		}
		$banner.append($indicator);
	},
	_createDOM : function(){
		var indicatorType = this._indicatorType;
		this._createImage();
		indicatorType && this._createIndicator(indicatorType);
		return this;
	},
	_setIndex : function(index, setAction){
		var $banner = this,
			dataLen = 5;
		this._index = index;
		this._changeMovement(setAction);
	},
	_changeMovement : function(setAction, prevIndex){
		setAction(this._index, prevIndex);
		$(this.selector + " .indicator em").eq(this._index).addClass("current").siblings().removeClass("current");
	},
	_autoChange : function(setAction){
		var $banner = this,
			dataLen = 5;
		setTimeout(function(){
			function change(){
				var currentIndex = $banner._index + 1 >= dataLen ? 0 : $banner._index + 1;
				$banner._setIndex(currentIndex, setAction);
				setTimeout(function(){
					change();
				}, 4000);
			}
			change();
		}, 4000);
	}
});