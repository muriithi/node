//Middleware that inserts a header

function write_header(name, value){
	return function(req, res, next){
		res.setHeader(name, value);
		next();
	};
}

module.exports=write_header;