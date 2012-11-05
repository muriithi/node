var http = require('http');
var circle = require('../modules/circles')

http.createServer(function(req,res){
	res.writeHead(200, {'Content Type ' : 'text/plain'});
	res.write(circle.Circle.area+ '');
	res.end()
}).listen(5000)