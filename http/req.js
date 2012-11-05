var http = require ("http");

http.createServer(function(req,res){
	res.writeHead(200,{
		"Content-Type" : "text/html",
	});
	res.write("<p>" +req.method+"</p>");
	res.write(__dirname);
	res.end("<p>" + req.url + "</p>");



}).listen(3001, "127.0.0.1", function(){console.log("Server started!")})