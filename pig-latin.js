//W1D1
//Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.

function convertToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}

function toPigLatinSentence(words) {
  const pigLatinWords = words.map(convertToPigLatin);
  return pigLatinWords.join(" ");
}

const args = process.argv.slice(2);
const pigLatinSentence = toPigLatinSentence(args);
console.log(pigLatinSentence);