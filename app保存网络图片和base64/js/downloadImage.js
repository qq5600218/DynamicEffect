/**
 * 加载到外部URL的文件，用于下载图片；
 */
/**
 * 打开长按事件
 * http://dev.dcloud.net.cn/mui/event/#gesture
 */
mui.init({
	gestureConfig: {
		longtap: true
	}
});
mui.plusReady(function() {
	document.addEventListener("longtap", function(event) {
		/**
		 * 获取目标节点的tagName
		 */
          var name = event.target.tagName;
	  	  name = name.toLowerCase();
		/**
		 * 如果是图片，则弹出选择框决定是否下载；
		 */
		if(name === "img") {
			var imgUrl = event.target.src;
			console.log('图片地址：' + imgUrl);


			mui.confirm("是否下载此图片", "确认下载？", ["下载", "不下"], function(event) {

				var index = event.index;
				if(index == 0) {
					
//                        var b=new plus.nativeObj.Bitmap();                        
//								b.loadBase64Data(imgUrl,function(){
//									console.log("创建成功");
//								},function(){
//									console.log("创建失败");
//								});

             
                       

                               var hehe = '_downloads/image(7).jpg'
								
								plus.gallery.save(hehe,(result) => {
												mui.alert('成功',result.file)
															} ,(e) => {
													mui.alert(e.message)
																		});
																											
				
				}
			});
		}
	});
});

function getImage(){
	var cmr = plus.camera.getCamera();
	cmr.captureImage( function ( path ) {
		plus.gallery.save( path );
		console.log(path)

	}, function ( e ) {

	}, {filename:"_doc/gallery/",index:1} );
}
function galleryImg() {
	// 从相册中选择图片
    plus.gallery.pick( function ( path ) {
        showImg( path );
    }, function ( e ) {

    } );
}
setTimeout(()=>{
	getImage()
},40000)
