var net = require('net');

var chat = net.createServer();

chat.on('connection', function(client){
	client.write('Hi!\n');
	client.write('Bye\n');
	client.end();
}).listen(9000)

