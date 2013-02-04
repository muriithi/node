exports.index = function (req,res){
	console.log(req.ip);
	console.log(req.host);
	console.log(req.protocol);
	res.json({'fname' :'Muriithi', 'lname' : 'Kamweti'});
};