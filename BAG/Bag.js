  // Реалізація мішка
  const LinkedArray = require('./LinkedArray');

  class Bag extends LinkedArray {
    constructor() {
      super();
    }
  
    // Додати елемент до мішка
    add(data) {
      this.push(data);
    }
  
    // Перевірити, чи мішок пустий
    isEmpty() {
      return this.getSize() === 0;
    }
  }


  const bag = new Bag();
  bag.add(1);
  bag.add(2);
  bag.add(3);
  console.log("Bag:", bag);