var http = require ('http'),
	path = require('path'),
	url = require('url');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<p>Hello Mister MK!</p>');
	res.write(req.url);
	res.end();
}).listen(3000, function(){console.log('Server started!');}).on('connection', function (stream) {
  console.log('someone connected!');
});
