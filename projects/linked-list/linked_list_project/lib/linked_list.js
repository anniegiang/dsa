// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Implement the addToTail method here
  addToTail(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.length++;
    this.tail = newNode;
    return this;
  }

  // TODO: Implement the removeTail method here
  removeTail() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // TODO: Implement the addToHead method here
  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // TODO: Implement the removeHead method here
  removeHead() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  // TODO: Implement the contains method here
  contains(target) {
    let current = this.head;
    while (current) {
      if (current.value === target) return true;
      current = current.next;
    }
    return false;
  }

  // TODO: Implement the get method here
  get(index) {
    if (index >= this.length || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // TODO: Implement the set method here
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.value = val;
      return true;
    }
    return false;
  }

  // TODO: Implement the insert method here
  insert(index, val) {
    if (index >= this.length || index < 0) return false;
    if (index === 0) return !!this.addToHead(val);
    if (index === this.length) return !!this.addToTail(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // TODO: Implement the remove method here
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return !!this.removeHead(index);
    if (index === this.length) return !!this.removeTail(index);

    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = temp.next;
    this.length--;
    return temp;
  }

  // TODO: Implement the size method here
  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
