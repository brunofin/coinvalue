var ncp = require('ncp').ncp,
    commom = require('./commom'),
    fs = require('fs');

commom.rmdir('build/dev');
commom.mkdir('build/dev');

ncp('build/temp', 'build/dev', function(err) {
    if (err) {
	return console.error(err);
    } else {
	
	fs.readFile('build/dev/app.min.js.map', 'utf8', function(err, data) {
	    if (!err) {
		var map = data.split('build/temp').join('');
		
		fs.writeFile('build/dev/app.min.js.map', map, function(error) {
		    if (error) {
			console.log(error);
		    } else {
			console.log('Developer build successful!');
		    }
		});
	    }
	});
    }
});

