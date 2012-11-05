var http = require('http');

http.createServer(function(req,res){
	res.writeHead(404);
	res.end();
}).listen(8080)