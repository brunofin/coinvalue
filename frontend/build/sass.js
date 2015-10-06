var sass = require('node-sass');
var fs = require('fs');

sass.render({
    file : 'app/scss/dguard.min.scss',
    outputStyle: 'compressed',
    newLines: 'unix'
}, function(error, result) {
    if (error) {
	console.log(error.status);
	console.log(error.column);
	console.log(error.message);
	console.log(error.line);
    } else {
	
	fs.writeFile('build/temp/styles.min.css', result.css.toString(), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("CSS files compressed!", 'styles.min.css');
	});
	
	if (result.map) {
	    fs.writeFile('build/temp/styles.min.css.map', result.map.toString(), function(err) {
		if(err) {
		    return console.log(err);
		}
		
		console.log("CSS files map generated!", 'styles.min.css.map');
	    });
	}
    }
});