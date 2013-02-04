
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.yoo = function(req, res){
	res.render('yoo', {title: 'My Yoooooo! page'});
};