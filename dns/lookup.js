var dns = require('dns')

dns.lookup('muriithikamweti.com',function(err,ip){
	if(err){throw err;}
	console.log(ip);
})