// https://visualgo.net/en/list

const log = require("./helpers/log");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.length = 1;
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    this.length++;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  prepend(value) {
    // Since We Try to generalize the newNode
    // 1) next will be null
    // 2) create a pointer saying that newNode.next points to this.head
    // Here is a try
    // const newNode = { value, next: this.head };
    // this.head = newNode;
    // this.length++;
    // Here is the solution
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traverse() {
    let result = [];
    let headValue = this.head;
    while (headValue !== null) {
      result.push(headValue.value);
      headValue = headValue.next;
    }
    return result;
  }

  traverseToIndex(index) {
    let counter = 0;
    const currentNode = this.head;

    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(200, 10);

console.log(myLinkedList.insert(2, 200));

log(myLinkedList);
