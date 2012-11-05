var http = require('http');

http.createServer(function(req, res){
	
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end(' 100 * 5 * 25 = 1,000,000');
	
	
}).listen(10000);
	
