// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.



const text = "html css javascript javascript html css css";
const wordCounts = countWords(text);
console.log(wordCounts);


function countWords(text) {
  const words = text.split(" ");
  const counts = new Map();
  for (let word of words) {
    if (counts.has(word)) {
      counts.set(word, counts.get(word) + 1);
    } else {
      counts.set(word, 1);
    }
  }
  return counts;
}
