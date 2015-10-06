var fs = require('fs');

exports.rmdir = function(dirPath) {
    try {
	var files = fs.readdirSync(dirPath);
    } catch (e) {
	return console.error(e);
    }
    if (files.length > 0)
	for (var i = 0; i < files.length; i++) {
	    var filePath = dirPath + '/' + files[i];
	    if (fs.statSync(filePath).isFile())
		fs.unlinkSync(filePath);
	    else
		exports.rmdir(filePath);
	}
    fs.rmdirSync(dirPath);
};

exports.mkdir = function(path) {
    try {
	fs.mkdirSync(path);
    } catch (e) {
	if (e.code != 'EEXIST')
	    throw e;
    }
}