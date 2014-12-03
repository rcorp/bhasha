var fs = require('fs');
var enc = require('./newprocess.js')
options = {
	cryptotype:'md5',
	numberOfWords: 2,
	language: en
}
var inputString = fs.ReadStream('file.txt');
enc.hash(options, inputString)