//Uses node's url module to route
//Url example : http://127.0.0.1:3000/hello/Muriithi/Kamweti


var http = require("http");
var url = require ("url");


http.createServer(function(req ,res){
	var path = url.parse(req.url).pathname.split("/"); 		//Split out url path
	if (req.method == "GET" && path[1] == "hello"){		 //Handle GET requests from /hello
		var username =path[2] + " " +path[3],
	
	
		html = "<!doctype html>" +
			"<html><head><title>Hello " + username + "</title></head>" +
			"<body><h1>Hello, " + username + "!</h1></body></html>";
	
		res.end(html)
	}
	

	
	
	
}).listen(3000 , "127.0.0.1" ,function(){
	console.log("Server started!")})