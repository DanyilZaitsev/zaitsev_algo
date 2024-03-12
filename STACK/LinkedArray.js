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
  
    // Видалити елемент з кінця масиву
    pop() {
      if (!this.head) return null;
      let current = this.head;
      let prev = null;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      if (prev) {
        prev.next = null;
        this.tail = prev;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.size--;
      return current.data;
    }
  
    // Отримати розмір масиву
    getSize() {
      return this.size;
    }
  
    // Перевірити, чи масив пустий
    isEmpty() {
      return this.size === 0;
    }
  }

  module.exports = LinkedArray;
