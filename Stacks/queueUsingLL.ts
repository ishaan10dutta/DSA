import ListNode from "../LinkedLists/ListNode";

class MyQueueLL {
  front: ListNode | null;
  rear: ListNode | null;
  constructor() {
    this.front = null;
    this.rear = null;
  }

  //Function to push an element into the queue.
  push(x) {
    if (this.rear === null) {
      this.rear = new ListNode(x);
      this.front = this.rear;
    } else {
      let node = new ListNode(x);
      this.rear.next = node;
      this.rear = node;
    }
  }

  //Function to pop front element from the queue.
  pop() {
    let temp = this.front;
    if (temp === null) return -1;

    if (temp.next !== null) {
      temp = temp.next;
      let node = this.front?.val;
      this.front = null;
      this.front = temp;
      return node;
    } else {
      let node = this.front?.val;
      this.front = this.rear = null;
      return node;
    }
  }
}
