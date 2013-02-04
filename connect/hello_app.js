var connect = require('connect');
var hello = require('./modules/hello');
var writeHeader = require('./modules/write_header');

var app = connect.createServer(
	writeHeader('X-Powered-By' , 'Node'),
	hello
	);

app.listen(3001);