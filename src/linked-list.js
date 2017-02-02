const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
      console.info('constructor', this);
    }

    append(data) {
      console.info('append', 'this.length : ' + this.length, 'data : ' + data);

      let node,
          currentIndex = this.length,
          newIndex = this.length++;

      if (currentIndex == 0) {
        node = new Node();
        this._head = node;
        this._tail = node;
      } else {
        node = new Node(data, currentIndex, newIndex);
        this._head = node;
        this._tail = node;
      }

      console.info('append end', this);
    }

    head() {
      console.info('head', this);
      return this._head;
    }

    tail() {
      console.info('tail', this);
      return this._tail;
    }

    at(index) {
      console.info('at', this);
    }

    insertAt(index, data) {
      console.info('insertAt', this);
    }

    isEmpty() {
      console.info('isEmpty', this);
    }

    clear() {
      console.info('clear', this);
    }

    deleteAt(index) {
      console.info('deleteAt', this);
    }

    reverse() {
      console.info('reverse', this);
    }

    indexOf(data) {
      console.info('indexOf', this);
    }
}

module.exports = LinkedList;
