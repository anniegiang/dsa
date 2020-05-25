const { LinkedListNode } = require("./linkedList");

function getLength(head) {
  if (!head) return 0;
  return 1 + getLength(head.next);
}

// time: O(n), space: O(1)
function kthToLastNode(k, head) {
  if (k > getLength(head))
    throw new Error("Impossible to find the kth node greater than length");
  if (k < 1)
    throw new Error(`Impossible to find the ${k}th node from the last`);

  let slowPointer = head;
  let fastPointer = head;

  for (let steps = 0; steps < k; steps++) {
    fastPointer = fastPointer.next;
  }

  while (fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}

// Tests

let desc = "first to last node";
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
let expected = nodes[3];
assertEquals(actual, expected, desc);

desc = "second to last node";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(2, nodes[0]);
expected = nodes[2];
assertEquals(actual, expected, desc);

desc = "first node";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(4, nodes[0]);
expected = nodes[0];
assertEquals(actual, expected, desc);

desc = "k greater than linked list length";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const fifthFromLast = () => kthToLastNode(5, nodes[0]);
assertThrows(fifthFromLast, desc);

desc = "k is zero";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const zeroFromLast = () => kthToLastNode(0, nodes[0]);
assertThrows(zeroFromLast, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
