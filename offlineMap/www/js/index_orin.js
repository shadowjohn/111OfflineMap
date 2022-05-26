window.onload=function(){    
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
      document.addEventListener("deviceready", function(){
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, function(){});

        loadDB();
        runServer();
        onDeviceReady();
      }, false);
  } else {
      onDeviceReady();
  }
};
function loadDB(){
  window['g']['db'] = window.sqlitePlugin.openDatabase({
    name: str_replace("file://","",cordova.file.externalRootDirectory)+'Download/asia_taiwan.dbs',
    location: 'default'
  });    
}	
function runServer(){
  webserver.onRequest(
	function(request) {
		console.log(request);    
        /*
        headers,
        method, "GET"
        path, "/OFFLINE"
        query: "mode=getMap&osmData=asia_taiwan&z=4&x=13&y=7"
        */
        
        webserver.sendResponse(
      		    	request.requestId,
          			{
          				status: 200,
          				body: "<html>GG</html>",
          				headers: {
                          "Content-Type": "text/html"
                        }
                  }
                );
        return;
        
        var o = {};
        parse_str(request.query,o);
        console.log(o);
        var SQL = " \
            SELECT \
                BASE64(`tile_data`) AS `tile_data` \
            FROM \
                `images` \
            WHERE \
                1=1 \
                AND `tile_id`=? \
            LIMIT 1 \
        ";
        var y = ((1 << o['z']) - o['y'] - 1);
        var tile_id = o['z']+"/"+o['x']+"/"+y;                        
        selectSQL_SAFE(window['g']['db'],SQL,[tile_id],function (tx, res){
            //console.log(res);
            var ra = res2arr(res);
            if(ra.length==0) {
                webserver.sendResponse(
      		    	request.requestId,
          			{
          				status: 200,
          				body: "GG",
          				headers: {
                          "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type, x-requested-with",
                          "Server": "Apache/2.0.61 (Unix)",
                          "Access-Control-Allow-Origin": "*",                                        
                          "Access-Control-Allow-Methods" : "GET,HEAD,PUT,PATCH,POST,DELETE",
                          "Cache-Control": "no-cache",
                          "Connection": "Keep-Alive",      
                          "Date":new Date().toGMTString(),
                          "Access-Control-Max-Age": "86400",
                          "Vary": "Accept-Encoding, Origin"              
                          "Content-Type": "text/plain",
                          
                        }
                  }
                );
                return;
            }
            var b = (ra[0]['tile_data']); //atob
            //console.log(b);   
            webserver.sendResponse(
    			request.requestId,
    			{
    				status: 200,
    				body: "",
    				headers: {
                        "Access-Control-Allow-Headers": "X-PINGOTHER, Content-Type, x-requested-with",
                        "Server": "Apache/2.0.61 (Unix)",
                        "Access-Control-Allow-Origin": "*",                                        
                        "Access-Control-Allow-Methods" : "GET,HEAD,PUT,PATCH,POST,DELETE",
                        "Cache-Control": "no-cache",
                        "Connection": "Keep-Alive",      
                        "Date":new Date().toGMTString(),
                        "Access-Control-Max-Age": "86400",
                        "Vary": "Accept-Encoding, Origin"              
    					//'Content-Type': 'application/x-protobuf', //'application/gzip', //application/octet-stream', //'application/x-protobuf', //
                        //'Content-Encoding': 'gzip', 
                        //"Accept-Encoding": "gzip, deflate",
                        //'Content-Encoding': 'gzip'
    				}
    			}
    		);
        },function(err){
            //wtf
            console.log(err);
        });         
		/*webserver.sendResponse(
			request.requestId,
			{
				status: 200,
				body: '<html>Hello World</html>',
				headers: {
					'Content-Type': 'text/html'
				}
			}
		);*/
	}
  );

  webserver.start(8080);
  //setTimeout(function(){
  //  alert(myAjax("http://localhost:8080/GG?mode=getMap&x=1&y=1&z=1",""));
  //},3000);
}
function onDeviceReady(){
  
  
  /*
  window['g']['wh']=getWindowSize();
  window['g']['map']=new Easymap("map");
  window['g']['map'].switchMap("empty");
  var styleUrl = "js/asia_taiwan_2017_07_03.json?_t="+new Date().getTime();
  var dataUrl = "";
  var osmData = "asia_taiwan";
  //載入臺灣向量底圖
  var op = {};
  op.bg = false;
  op.name = "demoVectorTile_Taiwan";
  op.chname = "vietnam 向量圖專";
  op.iconMax = "imgs/googlestreets.png";
  op.iconMin = "imgs/mapB-2.png";
  op.url = dataUrl; //資料來源    
  op.styleUrl = styleUrl; //樣式
  op.tileOptions = { crossOriginKeyword: null };
  //op.maxZoom = 14;
  //加入圖層
  vectorTile = new dgSource("VectorTile", op);
  window['g']['map'].addItem(vectorTile);
  */
  
}  
  