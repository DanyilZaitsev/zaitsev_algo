// Реалізація черги
const LinkedArray = require('./LinkedArray');

class Queue extends LinkedArray {
    constructor() {
      super();
    }
  
    // Додати елемент до черги
    enqueue(data) {
      this.push(data);
    }
  
    // Видалити елемент з початку черги
    dequeue() {
      return this.shift();
    }
  
    // Перевірити, чи черга пуста
    isEmpty() {
      return this.getSize() === 0;
    }
  }
  
  // Приклад використання:
  
  const queue = new Queue();
  queue.enqueue("A");
  queue.enqueue("B");
  queue.enqueue("C");
  console.log("Queue:", queue);
  
  console.log("Dequeue:", queue.dequeue());
  console.log("Dequeue:", queue.dequeue());
  console.log("Is queue empty?", queue.isEmpty());
  console.log("Queue size:", queue.getSize());