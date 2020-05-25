// https://www.interviewcake.com/question/javascript/top-scores

// time: O(n), space: O(n)
function sortScores(scores, maxScore) {
  const scoreCounter = new Array(maxScore + 1).fill(0);
  scores.forEach((score) => scoreCounter[score]++);
  const sortedScores = [];
  for (let score = maxScore; score >= 0; score--) {
    for (let count = 0; count < scoreCounter[score]; count++) {
      sortedScores.push(score);
    }
  }
  return sortedScores;
}

// Tests

let desc = "no scores";
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "one score";
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "two scores";
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "many scores";
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = "repeated scores";
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
