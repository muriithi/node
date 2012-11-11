var dns = require('dns');

dns.resolve('muriithikamweti.com', 'MX', function(err,domains){
	if(err){throw err;};
	domains.forEach(function(domain){
		console.log(domain);
	});
});

