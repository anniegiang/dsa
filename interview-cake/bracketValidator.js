// https://www.interviewcake.com/question/javascript/bracket-validator

// O(n) time (one iteration through the string), and O(n)O(n) space (in the worst case, all of our characters are openers, so we push them all onto the stack).

function isValid(code) {
  // Determine if the input code is valid
  if (code.length === 0) return true;
  if (code.length === 1) return false;

  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const open = [];

  for (let char of code) {
    if (char === "(" || char === "{" || char === "[") {
      open.push(char);
    } else if (char in brackets) {
      const openBracket = open.pop();
      if (brackets[char] !== openBracket) return false;
    }
  }

  return open.length === 0;
}

// Tests

let desc = "valid short code";
assertEqual(isValid("()"), true, desc);

desc = "valid longer code";
assertEqual(isValid("([]{[]})[]{{}()}"), true, desc);

desc = "mismatched opener and closer";
assertEqual(isValid("([][]}"), false, desc);

desc = "missing closer";
assertEqual(isValid("[[]()"), false, desc);

desc = "extra closer";
assertEqual(isValid("[[]]())"), false, desc);

desc = "empty string";
assertEqual(isValid(""), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
