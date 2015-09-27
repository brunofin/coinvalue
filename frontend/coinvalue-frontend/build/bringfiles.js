var ncp = require('ncp').ncp, commom = require('./commom');

commom.rmdir('build/temp');
commom.mkdir('build/temp');

ncp('app/fonts', 'build/temp/fonts', function(err) {
    if (err) {
	return console.error(err);
    }
});

ncp('app/img', 'build/temp/img', function(err) {
    if (err) {
	return console.error(err);
    }
});

ncp('app/partials', 'build/temp/partials', function(err) {
    if (err) {
	return console.error(err);
    }
});

ncp('app/browserNotSupported.html', 'build/temp/browserNotSupported.html', function(err) {
    if (err) {
	return console.error(err);
    }
});

ncp('app/favicon.ico', 'build/temp/favicon.ico', function(err) {
    if (err) {
	return console.error(err);
    }
});

ncp('app/index.html', 'build/temp/index.html', function(err) {
    if (err) {
	return console.error(err);
    }
});