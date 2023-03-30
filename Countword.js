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
