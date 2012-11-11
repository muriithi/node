var http = require('http');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' :'text/html'});
	res.write('<p>Your Node is running from ' +process.execPath +'.</p>');
	res.write('<p> Your Node version is ' + process.version +'.</p>');
	res.write('<p>You are running node on ' +process.platform +'.</p>');
	res.write('<p>Your processor architecture is ' +process.arch +'.</p>');
	res.write('<p> Node is using ' + util.inspect(process.memoryUsage().heapTotal) + ' bytes of memory.</p>');
	res.write('<p> Node has been running for ' + process.uptime() +' seconds.</p>');
	res.end();
	

}).listen(10000);