var fs = require('fs'), 
    ncp = require('ncp').ncp, commom = require('./commom'), 
    filename = 'build/temp/index.html',
    html = null,
    js = null,
    css = null;

fs.readFile(filename, 'utf8', function(err, data) {
    if (!err) {
	html = data;
	
	fs.readFile('build/temp/dguard.min.js', 'utf8', function(err, data) {
	    if (!err) {
		js = data;
		
		fs.readFile('build/temp/styles.min.css', 'utf8', function(err, data) {
		    if (!err) {
			css = data;
			
			if (html != null && js != null && css != null) {

			    html = html.replace('<link rel="stylesheet" href="/styles.min.css">',
				    "###placeholder###");
			    html = html
				    .replace(
					    '<script type="application/javascript" src="/dguard.min.js"></script>',
					    '');

			    var temp = '<style type="text/css">' + css
				    + '</style><script type="application/javascript">' + js
				    + '</script>';

			    html = html.replace("###placeholder###", temp);

			    fs.writeFile('build/temp/index.html', html, function(error) {
				if (error) {
				    console.log(error);
				}
			    });
			} else {
			    console.error('Error deploying!');
			    console.error('HTML', html);
			    console.error('JS', js);
			    console.error('CSS', css);
			}

			fs.unlinkSync('build/temp/styles.min.css');
			fs.unlinkSync('build/temp/dguard.min.js');
			
			try {
			    commom.rmdir('build/deploy');
			} catch(e) {}
			commom.mkdir('build/deploy');

			ncp('build/temp', 'build/deploy', function(err) {
			    if (err) {
				return console.error(err);
			    } else {
				console.log('Deploy build successful!');
			    }
			});
		    } else {
			console.error(err);
		    }
		});
	    } else {
		console.error(err);
	    }
	});
    } else {
	console.error(err);
    }
});

