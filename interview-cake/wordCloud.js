// https://www.interviewcake.com/question/javascript/word-cloud

class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  populateWordsToCounts(inputString) {
    let currentWordStartIndex = 0;
    let currentWordLength = 0;

    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i);

      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength += 1;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          );
          this.addWordToMap(word);
        }
      } else if (character === " " || character === "\u2014") {
        if (currentWordLength > 0) {
          const word = inputString.slice(
            currentWordStartIndex,
            currentWordStartIndex + currentWordLength
          );
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      } else if (character === ".") {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === ".") {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      } else if (this.isLetter(character) || character === "'") {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;
      } else if (character === "-") {
        if (
          i > 0 &&
          this.isLetter(inputString.charAt(i - 1)) &&
          this.isLetter(inputString.charAt(i + 1))
        ) {
          if (currentWordLength === 0) {
            currentWordStartIndex = i;
          }
          currentWordLength += 1;
        } else {
          if (currentWordLength > 0) {
            const word = inputString.slice(
              currentWordStartIndex,
              currentWordStartIndex + currentWordLength
            );
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      }
    }
  }

  addWordToMap(word) {
    let newCount;

    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word.toLowerCase(), newCount);
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word));
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  isLetter(character) {
    return (
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
        character
      ) >= 0
    );
  }
}
// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = "simple sentence";
let actual = new WordCloudData("I like cake").wordsToCounts;
let expected = new Map([
  ["I", 1],
  ["like", 1],
  ["cake", 1],
]);
assert(isMapsEqual(actual, expected), desc);

desc = "longer sentence";
actual = new WordCloudData(
  "Chocolate cake for dinner and pound cake for dessert"
).wordsToCounts;
expected = new Map([
  ["and", 1],
  ["pound", 1],
  ["for", 2],
  ["dessert", 1],
  ["Chocolate", 1],
  ["dinner", 1],
  ["cake", 2],
]);
assert(isMapsEqual(actual, expected), desc);

desc = "punctuation";
actual = new WordCloudData("Strawberry short cake? Yum!").wordsToCounts;
expected = new Map([
  ["cake", 1],
  ["Strawberry", 1],
  ["short", 1],
  ["Yum", 1],
]);
assert(isMapsEqual(actual, expected), desc);

desc = "hyphenated Words";
actual = new WordCloudData("Dessert - mille-feuille cake").wordsToCounts;
expected = new Map([
  ["cake", 1],
  ["Dessert", 1],
  ["mille-feuille", 1],
]);
assert(isMapsEqual(actual, expected), desc);

desc = "ellipses between words";
actual = new WordCloudData("Mmm...mmm...decisions...decisions").wordsToCounts;
expected = new Map([
  ["mmm", 2],
  ["decisions", 2],
]);
assert(isMapsEqual(actual, expected), desc);

desc = "apostrophes";
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([
  ["Bakery", 1],
  ["Cakes", 1],
  ["Allie's", 1],
  ["Sasha's", 1],
]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}
