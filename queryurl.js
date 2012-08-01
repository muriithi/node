\\Visit http://127.0.0.1:3000/?firstName=Muriithi&lastName=Kamweti

var http = require("http");
var querystring = require("querystring");

http.createServer(function(req, res){
	
	var qs = querystring.parse(req.url.split("?")[1]),
	userName = qs.firstName + " " + qs.lastName,
	html = "<!doctype html>" +
		"<html><head><title>Hello " + userName + "</title></head>" +
		"<body><h1>Hello, " + userName + "!</h1></body></html>";
	
	res.end(html);

	



}).listen(3000, "127.0.0.1");