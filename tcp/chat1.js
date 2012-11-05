var net = require('net');

var chat = net.createServer();

chat.on('connection', function(socket){
	clientName = socket.remoteAddress + " : " + socket.remotePort
	socket.write('Hello! ' + clientName + '\n');
	

socket.on('data', function(data){
	console.log(data)
	});
	
});
	
chat.listen(9001);	