var scripts = [
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-animate/angular-animate.js',
    'app/bower_components/angular-aria/angular-aria.js',
    'app/bower_components/angular-material/angular-material.js',
    'app/bower_components/angular-material-icons/angular-material-icons.js',
    
    'app/js/app/DAO.js',
    'app/js/app/Model.js',
    'app/js/app/Strings.js',
    'app/js/app/Metadata.js',
    'app/js/app/BaseDirectives.js',
    'app/js/app/Conexoes.js',
    'app/js/app/DGuard.js'
    ],
    file = 'dguard.min.js';

//var uglify = require("uglify-js");
//    
//    
//
//
//var uglifiedScripts = uglify.minify(scripts);
//
//fs.writeFile('app/' + finalFilename, uglifiedScripts.code, function (err){
//  if(err) {
//    console.log(err);
//  } else {
//    console.log("Script generated and saved:", finalFilename);
//  }      
//});


var fs = require('fs'),
    ClosureCompiler = require("closurecompiler");
 
ClosureCompiler.compile(
    scripts,
    {
        compilation_level: "WHITESPACE_ONLY", // WHITESPACE_ONLY, SIMPLE_OPTIMIZATIONS, ADVANCED_OPTIMIZATIONS 
        language_in: 'ECMASCRIPT5',
    },
    function(error, result) {
        if (result) {
            fs.writeFile('build/temp/' + file, result, function (error){
        	if(error) {
        	    console.log(error);
        	} else {
        	    console.log("JavaScript files compressed!", file);
        	}      
            });
        } else {
            console.log(error);
        }
    }
);