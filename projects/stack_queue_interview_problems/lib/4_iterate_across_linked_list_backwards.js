// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Iterate over a Singly Linked List of primitives backwards. When finished,
// return a string representing the original linked list's values backwards
// in the following format:
//
//                             'A -> B -> C -> D'
//
// ------------
// Constraints:
// ------------
//
// (1) Your function must be iterative, not recursive.
// (2) Your function must consume O(n) space.
// (3) Employee either a Stack, Queue, or some combination of the two in your
//     solution. (Implement any data structures you need, as you need them.)
//
//
// -----------
// Let's code!
// -----------

function iterateAcrossLinkedListBackwards(linkedList) {
  // TODO: Implement the iterateAcrossLinkedListBackwards function here
  let res = "";
  let stack = [];
  let current = linkedList.head;

  while (current !== null) {
    stack.push(current.value);
    current = current.next;
  }

  while (stack.length) {
    if (stack.length > 1) {
      res += `${stack.pop()} -> `;
    } else {
      res += `${stack.pop()}`;
    }
  }

  return res;
}

exports.iterateAcrossLinkedListBackwards = iterateAcrossLinkedListBackwards;
