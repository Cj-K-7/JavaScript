class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Add element to top of stck
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  //Return and remove top element in stack
  //return undefined if stack is empty
  pop() {
    if (this.coun == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //Check top element in stack
  peek() {
    console.log(`Top Element : ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
      console.log(this.count == 0 ? 'Stack is empty' : 'Something\'s in Stack')
      return this.count == 0
  }
}

const stack = new Stack();