// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let current = this.head;
    let counter = 0;

    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let current = this.head.next;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(n) {
    let previous = this.head;
    let counter = 0;

    while (previous) {
      if (counter === n) {
        return previous;
      }
      counter++;
      previous = previous.next;
    }

    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }

    if (n === 0) {
      this.head = this.head.next;
      return;
    }

    if (n >= this.size()) {
      return;
    }

    const previous = this.getAt(n - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, n) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (n === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(n - 1) || this.getLast();;
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
