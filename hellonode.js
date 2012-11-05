app = require("http");

app.createServer(function (request, response){
	response.writeHead(200, {"content type" :"text/plain"});
	response.write( request.url+"\n");
	response.end("Hello World")


}).listen(4000, "127.0.0.1");