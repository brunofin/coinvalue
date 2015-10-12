var ncp = require('ncp').ncp, commom = require('./commom');

commom.rmdir('build/temp');
commom.mkdir('build/temp');

ncp('app', 'build/temp', function(err) {
    if (err) {
	return console.error(err);
    }
});