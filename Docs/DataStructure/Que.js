class Que {
    constructor() {
      this.items = [];
      this.count = 0;
    }
  
    //Add element to top of stck
    enQueque(element) {
      this.items[this.count] = element;
      console.log(`${element} added to ${this.count}`);
      this.count++;
      return this.count - 1;
    }
  
    //Return and remove top element in stack
    //return undefined if stack is empty
    deQueque() {
      if (this.count === 0) return undefined;
      let deleteItem = this.items[0];
      this.count--;
      console.log(`${deleteItem} removed`);
      return deleteItem;
    }
  
    //Check top element in stack
    front() {
      console.log(`Front Element : ${this.items[0]}`);
      return this.items[0];
    }
  
    isEmpty() {
        return this.count === 0
    }
  }
  
  const que = new Que();

  que.enQueque(100)
  que.enQueque(200)
  que.enQueque(300)

  que.deQueque();

  que.front();