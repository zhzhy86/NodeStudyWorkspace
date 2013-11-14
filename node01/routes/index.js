
/*
 * GET home page.
 */
var User = require('./../models/User');
exports.index = function(req, res){
	var user = new User({acc: 'zzy', pwd: '123456', status: 1});
	user.save(function(err, user) {
		if(err) {
			console.error(err);
		}else {
			console.log('保存成功：' + user);
		}
		
	});
  res.render('index', { title: 'Express' });
};