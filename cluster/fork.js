var cluster = require('cluster');
var http = require('http');
var numCpu = require('os').cpus().length

if(cluster.isMaster){
	//Fork workers
	for (var i =0; i<numCpu; i++){
		cluster.fork();
	}
	
	cluster.on('exit', function(worker,code,signal){
		console.log('worker' + worker.process.pid + ' died');
	});
} else {
	http.createServer(function(req, res){
		res.writeHead(200, {'content-type' : 'text/html'});
		res.write('<p>Your computer has  ' + numCpu + ' CPU\'s </p>');
		res.end();
		console.log(req.httpVersion +'');
		
	}).listen(5500);
}


	
