app = require("http");

app.createServer(function (request, response){
	response.end("Hello World")


}).listen(4000, "127.0.0.1");