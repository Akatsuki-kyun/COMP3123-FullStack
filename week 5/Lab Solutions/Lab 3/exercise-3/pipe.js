
var request = require('request');

var fs = require('fs');

request('http://google.ca').pipe(fs.createWriteStream('output.html'));