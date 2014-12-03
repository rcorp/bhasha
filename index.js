var fs = require('fs');
var enc = require('./process.js')
options = {
	cryptotype: 'md5',
	numberOfWords: 2,
	language: "en"
}
dataArray = [];
fs.readFile('file.txt', 'utf8', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		// dataArray.push(data)
	}

	fs.readFile('file1.txt', 'utf8', function(err, data1) {
		if (err) {
			console.log(err);
		} else {
			dataArray.push(data1)
		}

		fs.readFile('file2.txt', 'utf8', function(err, data2) {
			if (err) {
				console.log(err);
			} else {
				dataArray.push(data2)
			}

			// console.log('dataArray', dataArray)
			enc.hash(options, data, dataArray)
		})
	})
})