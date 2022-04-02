class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert firtst node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    //맨 앞에 오는 데이터의 노드에 올 data 인자값을 받고, 기존의 해드를 next로 보내는 함수.
    this.size++;
  }

  //Insert Last node
  insertLast(data) {
    let node = new Node(data);
    //마지막에 들어갈 데이터 노드를 만들어 주고.
    let current;
    //현재 List 의 Node를 나타내줄 변수.

    //if empty, make head
    if (!this.head) {
      this.head = node;
      // 리스트 내에 해드가 없는 상태면, 지금 선언해준 데이터 노드를 해드로.
    } else {
      current = this.head;
      //리스트 내 이미 해드가 존재하니까, 첫번째 해드인 노드를 현재로.
      while (current.next) {
        //반복문을 통해서 , Next 노드가 존재하면,
        current = current.next;
        /*다음 노드가 현재값으로 넘어가면서 
        next 의 첫 값인 null 이 나올때까지
        (Linked LIst 의 마지막 값 까지) 계속 선언.*/
      }

      current.next = node;
      /*반복문이 끝나고나면 currunt는 맨 마지막 node에 오게되고,
      맨마지막 node의  next 를 선언해 주었던 데이터 노드로 할당.*/
    }
    this.size++;
  }

  //Insert at Index
  insertAt(data, index) {
    // If index is out of range
    if(index > 0 && index > this.size) {
      return;
    }

    // If first index
    if(index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    //인자값으로 받은 인덱스까지 반복문 실행.
    while(count < index) {
      previous = current; // Node before index 현재 노드를 앞에 오는 노드로 할당.
      count++;
      current = current.next; // Node after index 다음에 오는 노드를 현재 노드로 할당.
    }
    /*복문이 끝나면 current 는 index 보다 1 높은 위치. 즉 node 의 next 값을 주고,
    previous 로 할당되어 있는 node의 next 값을 지금 넣으려는 node값으로  설정해준다*/
    node.next = current;
    previous.next = node;
    /* 요약하자면, 입력한 index의 이전과 다음 값 를 찾아서,
     다음 값은 집어넣으려는 노드 데이터의 next 로 지정해, 데이터 노드의 다음 값을 가진채로
     index 이전 값 노드의 next 값에 넣어주는 과정이 된다. 이러면 이전 노드와 다음 노드 사이에
     들어가게 되는 것.
     */
    this.size++
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    if(index >= this.size){
      console.log('bigger than size');
      return
    }
    while(count <= index) {
      if(count === index){
        console.log(current.data);
        return;
      }
      count++;
      current = current.next;
    }
    return;
  }

  // Remove at index
  removeAt(index) {
    if(index>0 && index>this.size){
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if(index >= this.size){
      console.log('bigger than size');
      return
    }
    //remove first 
    if(index === 0){
      this.head = current.next;;
    } else {
      while(count < index){
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.size--;
  }

  //Clear List
  clearList() {
    this.head = null;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.insertAt(500,2);
ll.printListData();
ll.removeAt(1);
ll.printListData();

console.log(ll);

