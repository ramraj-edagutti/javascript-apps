const txtgen = require('txtgen')

const sentence = txtgen.sentence();
//console.log(sentence);
console.log("Nouns: "+ txtgen.getNouns())
txtgen.addNouns(['Ramraj', 'Edagutti', 'Arjun']);
const paragraph = txtgen.paragraph();
console.log("Para: " + paragraph);
console.log("After Nouns: "+ txtgen.getNouns())

const article = txtgen.article();
//console.log("Article: "+ article);