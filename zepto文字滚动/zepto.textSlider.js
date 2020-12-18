// JavaScript Document
(function($){
	$.fn.textSlider = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		line:1     //滚动的行数
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	var scroll_top=0;
	function marquee(obj){		  									
		  scroll_top++;			
		  if(scroll_top > obj.height()){
			  scroll_top = 0;							
		  }
		  obj.find("table").first().css("margin-top",-scroll_top);	
		}
		
		this.each(function(i){			
			var speed = opts["speed"],line = opts["line"],_this = $(this);
			var $table = _this.find("table").first();
			var $height = $table.find("tr").height();
			var $Upheight = 0-line*$height;
			var $Downheight = line*$height;
			_this.find("table").clone().appendTo(_this);
			intId[i] = setInterval(function(){				
				if(_this.find("table").height()<=_this.height()){
					clearInterval(intId[i]);				
				}else{					
					marquee(_this);				
				}
			}, speed);
			
			
			//触摸开始
			_this.on('touchstart', function(ev){
				ev.preventDefault();
				clearInterval(intId[i]);
			});
			
			//向上滑动
			_this.on('swipeup', function(ev){
				clearInterval(intId[i]);
				 for(i=0;i<opts.line;i++){
					  $table.find("tr:first-child").appendTo($table.find("tbody"));
					 }
				  $table.css("margin-top",0);
			});
			
			//向下滑动
			_this.on('swipedown', function(ev){
				clearInterval(intId[i]);
				for(i=0;i<opts.line;i++){
					$table.find("tr").eq(0).before($table.find("tr").last());		
					}				  		 				  
				  $table.css("margin-top",0);
			});
			
			//触摸结束
			_this.on('touchend',function(){
				intId[i] = setInterval(function(){
					if(_this.find("table").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this);
					}
				}, speed);
			});
		
		});

	}
})(Zepto);