// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the
// intersection of two linked lists begins, or null if there is no such
// intersection.
//
// ----------
// Example 1:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1,list2) should return D
// as the node of intersection.
//
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ----------
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1, list2) should return null
// as there is no point of intersection.
//
//    A → B → C → D
//
//    X → Y → Z
//
// -----------
// Let's code!
// -----------
function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!
  const length1 = getLength(list1);
  const length2 = getLength(list2);
  const difference = length1 - length2;

  let long = length1 >= length2 ? list1.head : list2.head;
  let short = length1 >= length2 ? list2.head : list1.head;

  for (let skip = 0; skip < difference; skip++) {
    long = long.next;
  }

  while (long.next && short.next) {
    if (long.next === short.next) return long.next;
    long = long.next;
    short = short.next;
  }

  return null;
}

function getLength(list) {
  let length = 0;
  let current = list.head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function (list) {
  var result = [];
  while (list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
};

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
