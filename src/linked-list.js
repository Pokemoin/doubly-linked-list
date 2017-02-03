const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {

    // create node
    let node = new Node(data);

    if (this.length == 0) {

      // set defaul value
      this._head = node;
      this._tail = node;

    } else {

      // save _tail node
      let tailNode = this._tail;

      // set new next _tail node
      tailNode.next = node;

      // set new prev _tail node
      node.prev = tailNode;

      // set new _tail node
      this._tail = node;
    }

    this.length++;

    return this;
  }

  head() {
    return this.hasOwnProperty('_head') ? this._head.data : null;
  }

  tail() {
    return this.hasOwnProperty('_tail') ? this._tail.data : null;
  }

  at(index) {

    let node = null,
        listLength = this.length - 1,
        count = 1;

    if (index >= 0 && index <= listLength) {

      if (index == 0) {

        // set node _head
        node = this._head;

      } else if (index > 0 && index < listLength) {

        // set node _head
        node = this._head;

        // run loop and check conditions
        while (count <= index) {
          node = node.next;
          count++;
        }

      } else {
        // set node _tail
        node = this._tail;
      }
    } else {
      console.error(`can not return Node.data by index : ${index}`);
    }

    return node.hasOwnProperty('data') ? node.data : null;
  }

  insertAt(index, data) {

    let newNode = new Node(data),
        listLength = this.length - 1,
        count = 1,
        currentNode;

    if (index == 0 && listLength > 0) {

      // set newNode next
      newNode.next = this._head;

      // set new _head node
      this._head = newNode;

      // set old _head prev
      this._head.next.prev = this._head;

    } else if (index > 0 && index <= listLength) {

      // set node _head
      currentNode = this._head;

      // run loop and check conditions
      while (count <= index) {
        currentNode = currentNode.next;
        count++;
      }

      // set newNode prev
      newNode.prev = currentNode.prev;

      // set currentNode.prev
      currentNode.prev = newNode;

      // set newNode next
      newNode.next = currentNode;

      // set prev node before newNode
      newNode.prev.next = newNode;

    } else {
      // append node if have issue
      this.append(data);
    }

    this.length++;

    return this;
  }

  isEmpty() {
    return !this.length;
  }

  clear() {

    // create node
    let node = new Node();

    this.length = 0;
    this._head = node;
    this._tail = node;

    return this;
  }

  deleteAt(index) {

    let node = null,
        listLength = this.length - 1,
        count = 1;

    if (index >= 0 && index <= listLength) {

      if (index == 0) {

        this.clear();

      } else if (index > 0 && index < listLength) {

        // set node _head
        node = this._head;

        // run loop and check conditions
        while (count <= index) {
          node = node.next;
          count++;
        }

        // set next node prev
        node.next.prev = node.prev;

        // set prev node next
        node.prev.next = node.next;

        // remove current node
        node = node.next;

      } else {

        // delete node _teal
        this._tail = this._tail.prev;
        this._tail.next = null;
      }

      this.length--;
    } else {
      console.error(`can not delete element by index : ${index}`);
    }

    return this;
  }

  reverse() {

    let tailNode = this._tail,
        listLength = this.length - 1,
        nextNode = null,
        head = null;


    while (listLength > 0) {

      // get _tail next
      nextNode = tailNode.next;

      // set _tail next
      tailNode.next = tailNode.prev;

      // set _tail prev
      tailNode.prev = nextNode;

      // set _tail node on _tail.next
      tailNode = tailNode.next;

      listLength--;
    }

    // save _head
    head = this._head;

    // set new _head on _tail
    this._head = this._tail;

    // set new _tail on _head
    this._tail = head;

    return this;
  }

  indexOf(data) {

    let node = this._head,
        listLength = this.length - 1,
        count = 0;

    while (count <= listLength) {
      if (node.data === data) {
        return count;
      }
      node = node.next;
      count++;
    }

    return -1;
  }
}

module.exports = LinkedList;
