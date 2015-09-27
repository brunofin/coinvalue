var commom = require('./commom');

commom.rmdir('build/temp');
commom.mkdir('build/temp');

console.log('Temporary files erased.')