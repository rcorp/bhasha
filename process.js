var fs = require('fs');
var wordPatt = /^(\S+)/mg;
var crypto = require('crypto');


var nounString = fs.readFileSync('dict/index.noun', 'utf-8');
fs.writeFileSync('nouns.json', JSON.stringify(nounString.match(wordPatt)));

var adjectiveString = fs.readFileSync('dict/index.adj', 'utf-8');
fs.writeFileSync('adjectives.json', JSON.stringify(adjectiveString.match(wordPatt)));

var verbString = fs.readFileSync('dict/index.verb', 'utf-8');
fs.writeFileSync('verbs.json', JSON.stringify(verbString.match(wordPatt)));

var adverbString = fs.readFileSync('dict/index.adv', 'utf-8');
fs.writeFileSync('adverbs.json', JSON.stringify(adverbString.match(wordPatt)));

console.log('Nouns: ' + nounString.match(wordPatt).length)
console.log('Adjectives: ' + adjectiveString.match(wordPatt).length)
console.log('Verbs: ' + verbString.match(wordPatt).length)
console.log('Adverbs: ' + adverbString.match(wordPatt).length)


// options = {
// 	cryptotype:'md5'||'sha1' ||'sha256' ||'sha512'	,
// 	numberOfWords: 2
// }
module.exports = {
	hash: function(options, inputString, dataArray) {
		if(options.cryptotype == '' || options.cryptotype == null || !options.cryptotype) {
			shasum = crypto.createHash('sha1');	
		} else {
			shasum = crypto.createHash(options.cryptotype);
		}

		// console.log(inputString)
		for(var i=0; i<=dataArray.length;dataArray++) {
			if (dataArray[i] == inputString) {
				console.log('here1')
				exists = 1;
			} else {
				console.log('here0')
				exists = 0;
			}
		}
		if(exists == 1) {
			sha = shasum.digest('hex');
		} else if (exists == 0) {
			shasum.update(Math.random().toString(), 'utf8')
			sha = shasum.digest('hex');
		}

		console.log(sha)
		if (options.numberOfWords == 2) {
			//Split the sha into the first 8 hexadecimal digits (ie. 8 * 4 = 32 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 7), 16);

			var nounIndex = Math.floor(dec / adjectiveString.match(wordPatt).length);
			var adjectiveIndex = Math.floor(dec % adjectiveString.match(wordPatt).length);

			console.log(adjectiveString.match(wordPatt)[adjectiveIndex], nounString.match(wordPatt)[nounIndex])
			console.log(adjectiveIndex, nounIndex);

		} else if (options.numberOfWords == 4) {
			//Split the sha into the first 14 hexadecimal digits (ie. 14 * 4 = 56 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 14), 16);
			//var dec = 1678686549755813888;

			var residue = Math.floor(dec / adverbString.match(wordPatt).length);
			var adverbIndex = Math.floor(dec % adverbString.match(wordPatt).length);

			residue = Math.floor(residue / verbString.match(wordPatt).length);
			var verbIndex = Math.floor(residue % verbString.match(wordPatt).length);

			var nounIndex = Math.floor(residue / adjectiveString.match(wordPatt).length);
			var adjectiveIndex = Math.floor(residue % adjectiveString.match(wordPatt).length);

			console.log(adjectiveString.match(wordPatt)[adjectiveIndex], nounString.match(wordPatt)[nounIndex], verbString.match(wordPatt)[verbIndex], adverbString.match(wordPatt)[adverbIndex])
			console.log(adjectiveIndex, nounIndex, verbIndex, adverbIndex);

		} else {
			//Split the sha into the first 14 hexadecimal digits (ie. 14 * 4 = 56 bits) and
			//convert to decimal system (base 10)
			var dec = parseInt(sha.slice(0, 14), 16);
			//var dec = 1678686549755813888;

			var residue = Math.floor(dec / adverbString.match(wordPatt).length);
			var adverbIndex = Math.floor(dec % adverbString.match(wordPatt).length);

			residue = Math.floor(residue / verbString.match(wordPatt).length);
			var verbIndex = Math.floor(residue % verbString.match(wordPatt).length);

			var nounIndex = Math.floor(residue / adjectiveString.match(wordPatt).length);
			var adjectiveIndex = Math.floor(residue % adjectiveString.match(wordPatt).length);

			console.log(adjectiveString.match(wordPatt)[adjectiveIndex], nounString.match(wordPatt)[nounIndex], verbString.match(wordPatt)[verbIndex], adverbString.match(wordPatt)[adverbIndex])
			console.log(adjectiveIndex, nounIndex, verbIndex, adverbIndex);		
		}
	}
}