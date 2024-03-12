// Реалізація стеку за допомогою зв'язаного масиву
const LinkedArray = require('./LinkedArray');

class Stack extends LinkedArray {
    constructor() {
      super();
    }
  
    // Додати елемент на вершину стеку
    push(data) {
      super.push(data);
    }
  
    // Видалити елемент з вершини стеку
    pop() {
      return super.pop();
    }
  
    // Отримати верхній елемент стеку (без видалення)
    peek() {
      if (!this.head) return null;
      return this.tail.data;
    }
  }
  
  // Приклад використання:
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack Size:", stack.getSize()); // 3
  console.log("Peek:", stack.peek()); // 3
  console.log("Popped:", stack.pop()); // 3
  console.log("Stack Size after pop:", stack.getSize()); // 2