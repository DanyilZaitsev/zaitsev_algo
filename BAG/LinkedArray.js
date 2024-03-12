  // Реалізація зв'язаного масиву
  const Node = require('./Node');

  class LinkedArray {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Додати елемент в кінець масиву
    push(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    // Отримати розмір масиву
    getSize() {
      return this.size;
    }
  }

  module.exports = LinkedArray;
