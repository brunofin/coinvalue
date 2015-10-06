var ncp = require('ncp').ncp, commom = require('./commom');;

commom.rmdir('build/dev');
commom.mkdir('build/dev');

ncp('build/temp', 'build/dev', function(err) {
    if (err) {
	return console.error(err);
    } else {
	console.log('Developer build successful!');
    }
});