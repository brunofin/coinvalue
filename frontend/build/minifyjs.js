var scripts = [
               /* angular base */
       'build/temp/bower_components/angular/angular.js',
       'build/temp/bower_components/angular-animate/angular-animate.js',
       'build/temp/bower_components/angular-aria/angular-aria.js',
       
       		/* Angular-Chart.js */
       'build/temp/bower_components/Chart.js/Chart.js',
       'build/temp/bower_components/angular-chart.js/dist/angular-chart.js',
       
       		
       		/* material design */
       'build/temp/bower_components/angular-material/angular-material.js',
       'build/temp/bower_components/angular-material-icons/angular-material-icons.js',
       
       		/* app */
       'build/temp/scripts/app/Exchange.js',
       'build/temp/scripts/app/History.js',
       'build/temp/scripts/app/Providers.js',
       'build/temp/scripts/app/Coinvalue.js',
    ],
    file = 'app.min.js';


var fs = require('fs'),
ClosureCompiler = require("closurecompiler");

ClosureCompiler.compile(
scripts,
{
    compilation_level: "WHITESPACE_ONLY", // WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS 
    language_in: 'ECMASCRIPT5',
    create_source_map: 'build/temp/' + file + '.map',
},
function(error, result) {
    if (result) {
        fs.writeFile('build/temp/' + file, result + '\n//# sourceMappingURL=' + file + '.map', function (error) {
    	if(error) {
    	    console.error(error);
    	} else {
    	    console.log("JavaScript files compressed!", file);
    	}      
        });
    } else {
        console.error(error);
    }
}
);