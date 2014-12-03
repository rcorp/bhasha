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