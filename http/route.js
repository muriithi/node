var http = require('http');
var path = require('path');

var routes = [
	{route :  '', output : 'Where do you want to go?'},
	{route : 'about', output :'This is the output page' },
	{route :  'home',  output : 'You are home!'}

];

http.createServer(function(req, res){
	var lookup = path.basename(decodeURI(req.url));
	routes.forEach(function(page){
		if(page.route === lookup){
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(typeof page.output === 'function' ?page.output() : page.output);
		}
	});
	
	if (!res.finished){
		res.writeHead(404);
		res.end('Page not found!');
		
	}
	
	
	
	


}).listen(4000, "127.0.0.1", function(){
	console.log("Server started!")
})