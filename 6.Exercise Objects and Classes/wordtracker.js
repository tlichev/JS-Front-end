function wordsTracker(words) {
  let neededWords = words.shift().split(" ");
  let sentence = words;

  let wordCounter = {};

  for (const word of neededWords) {
    wordCounter[word] = 0;
  }

  for (const lookingWord of neededWords) {
    for (const wordOfSentense of sentence) {
      if (lookingWord === wordOfSentense) {
        wordCounter[lookingWord] += 1;
      }
    }
  }

  let sortedCounter = Object.entries(wordCounter).sort((a, b) => {
    value1 = a[1];
    value2 = b[1];
    return value2 - value1;
  });

  sortedCounter.forEach((element) => {
    console.log(`${element[0]} - ${element[1]}`);
  });
}

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
