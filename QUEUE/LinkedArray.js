const Node = require('./Node');

// Реалізація зв'язаного масиву
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
  
    // Видалити елемент з початку масиву
    shift() {
      if (!this.head) return null;
      const shifted = this.head;
      this.head = this.head.next;
      this.size--;
      return shifted.data;
    }
  
    // Отримати розмір масиву
    getSize() {
      return this.size;
    }
  }

  module.exports = LinkedArray;
