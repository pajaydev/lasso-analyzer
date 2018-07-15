const fs = require('fs');
const path = require('path');

const readFile = fs.readFileSync(path.resolve('stats.json'), 'utf8');
const readJSON = JSON.parse(readFile);

// iterate through the JSON file.
console.log(readJSON);
for (source in readJSON) {
    console.log(source);
}


