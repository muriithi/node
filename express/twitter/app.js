var express = require('express');

var app = express();
app.listen(4000);

app.get('/', function(req ,res){
	res.send('Welcome to Node Twitter');
});


	
