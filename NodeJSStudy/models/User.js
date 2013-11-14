var mg = require('./../utils/db');

function User(user) {
	this.acc = user.acc;
	this.pwd = user.pwd;
	this.status = user.status;
}

User.prototype.save = function(callback) {
	var self = this;
	console.log('mg::::' + mg);
	mg.open(function(err, db) {
		if(err) {
			return callback(err);
		}
		
		db.collection('user', function(err, collection) {
			if(err) {
				mg.close();
				return callback(err);
			}
			collection.ensureIndex('acc', {unique: true});
			collection.insert(self, {safe: true}, function(err, user) {
				mg.close();
				callback(err, user);
			});
		});
	});
};

module.exports = User;

