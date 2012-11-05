var http = require("http"); //load http module
var fs = require("fs");

http.createServer(function(req,res){
	
	fs.readFile("hellonode.js", "utf8", function (err , data){
	res.writeHead(200, {"content type" :"text/plain"});
	if (err) {
		res.write("Could not open file for reading\n");
	}
	else {
		res.write(data);
	}
	
	res.end();
});
	



}).listen(8124,"127.0.0.1", function(){
	console.log("Server started!");
	})

