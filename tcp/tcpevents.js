var server = require('net').createServer();
var port = 4000;

server.on('listening', function(){
	console.log("Server listening on port ",port);
	
});

server.on('connection',function(socket){
	console.log('Server has new connection');
	socket.end();
	server.close();
	
});

server.on('close',function(){
	console.log('Server is now closed');
});

server.on('error', function(error){
	console.log('Error occured', error.message);
});



server.listen(port, function(){
	console.log('Server started');
	
});