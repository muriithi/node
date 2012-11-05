var http = require("http");

var html = "<!doctype html>" +
"<html><head><title>Hello world</title></head>" +
"<body><h1>Hello, world!</h1></body></html>";


http.createServer(function(req,res){
	res.writeHead(200, {
		"Content-Type" : "text/html",
		"Content-Length": "html.length"
		});
	
	res.end(html);
}).listen(3000, "127.0.0.1")