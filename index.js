var fs = require('fs');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var words = require("./words.txt");

console.log(words); // string



function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}
console.log(readModuleFile);
readModuleFile('./index.html', function (err, words) {
    console.log(words);
});