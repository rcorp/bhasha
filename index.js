module.exports = {
	hash: function(options, inputString, dataArray) {
		var fs = require('fs');
		var crypto = require('crypto');
		var nounsArray = JSON.parse(fs.readFileSync('nouns.json'))
		var adjectivesArray = JSON.parse(fs.readFileSync('adjectives.json'))
		var verbsArray = JSON.parse(fs.readFileSync('verbs.json'))
		var adverbsArray = JSON.parse(fs.readFileSync('adverbs.json'))

		if (options.cryptotype == '' || options.cryptotype == null || !options.cryptotype) {
			shasum = crypto.createHash('sha1');
		} else {
			shasum = crypto.createHash(options.cryptotype);
		}

		for (var i = 0; i <= dataArray.length; dataArray++) {
			if (dataArray[i] == inputString) {
				exists = 1;
			} else {
				exists = 0;
			}
		}
		if (exists == 1) {
			sha = shasum.digest('hex');
		} else if (exists == 0) {
			shasum.update(Math.random().toString(), 'utf8')
			sha = shasum.digest('hex');
		}

		if (options.numberOfWords == 2) {
			//Split the sha into the first 8 hexadecimal digits (ie. 8 * 4 = 32 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 7), 16);

			var nounIndex = Math.floor(dec / adjectivesArray.length);
			var adjectiveIndex = Math.floor(dec % adjectivesArray.length);

			return (adjectivesArray[adjectiveIndex] + ' ' + nounsArray[nounIndex])

		} else if (options.numberOfWords == 4) {
			//Split the sha into the first 14 hexadecimal digits (ie. 14 * 4 = 56 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 14), 16);
			//var dec = 1678686549755813888;

			var residue = Math.floor(dec / adverbsArray.length);
			var adverbIndex = Math.floor(dec % adverbsArray.length);

			residue = Math.floor(residue / verbsArray.length);
			var verbIndex = Math.floor(residue % verbsArray.length);

			var nounIndex = Math.floor(residue / adjectivesArray.length);
			var adjectiveIndex = Math.floor(residue % adjectivesArray.length);

			return (adjectivesArray[adjectiveIndex] + ' ' + nounsArray[nounIndex] + ' ' + verbsArray[verbIndex] + ' ' + adverbsArray[adverbIndex]);

		} else {
			//Split the sha into the first 14 hexadecimal digits (ie. 14 * 4 = 56 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 14), 16);
			//var dec = 1678686549755813888;

			var residue = Math.floor(dec / adverbsArray.length);
			var adverbIndex = Math.floor(dec % adverbsArray.length);

			residue = Math.floor(residue / verbsArray.length);
			var verbIndex = Math.floor(residue % verbsArray.length);

			var nounIndex = Math.floor(residue / adjectivesArray.length);
			var adjectiveIndex = Math.floor(residue % adjectivesArray.length);

			return (adjectivesArray[adjectiveIndex] + ' ' + nounsArray[nounIndex] + ' ' + verbsArray[verbIndex] + ' ' + adverbsArray[adverbIndex]);
		}
	}
}