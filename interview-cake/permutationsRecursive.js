// https://www.interviewcake.com/question/javascript/recursive-string-permutations

// time = O(n!), space = O(n!)

function getPermutations(string) {
  // Generate all permutations of the input string
  if (string.length <= 1) return new Set([string]);

  const allButLastChar = string.slice(0, -1);
  const lastChar = string[string.length - 1];
  const permsAllButLastChar = getPermutations(allButLastChar);

  const permutations = new Set();

  permsAllButLastChar.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permutation = perm.slice(0, i) + lastChar + perm.slice(i);
      permutations.add(permutation);
    }
  });

  return permutations;
}

// Tests

let desc = "empty string";
let input = "";
let actual = getPermutations(input);
let expected = new Set([""]);
assert(isSetsEqual(actual, expected), desc);

desc = "one character string";
input = "a";
actual = getPermutations(input);
expected = new Set(["a"]);
assert(isSetsEqual(actual, expected), desc);

desc = "two character string";
input = "ab";
actual = getPermutations(input);
expected = new Set(["ab", "ba"]);
assert(isSetsEqual(actual, expected), desc);

desc = "three character string";
input = "abc";
actual = getPermutations(input);
expected = new Set(["abc", "acb", "bac", "bca", "cab", "cba"]);
assert(isSetsEqual(actual, expected), desc);

function isSetsEqual(as, bs) {
  if (as.size !== bs.size) {
    return false;
  }
  for (let a of as) {
    if (!bs.has(a)) return false;
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
