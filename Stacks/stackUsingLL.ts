import ListNode from "../LinkedLists/ListNode";

class MyStack {
  // class StackNode{
  //     constructor(a){
  //         this.data = a;
  //         this.next = null;
  //     }
  // }
  top: ListNode | null;
  constructor() {
    this.top = null;
  }

  /**
   * @param {number} a
   */

  //Function to push an integer into the stack.
  push(a) {
    if (this.top === null) this.top = new ListNode(a);
    else {
      let node = new ListNode(a);
      node.next = this.top;
      this.top = node;
    }
  }

  /**
   */

  //Function to remove an item from top of the stack.
  pop() {
    let temp = this.top;
    if (temp === null) return -1;
    temp = temp.next;
    let node = this.top?.val;
    this.top = temp;
    return node;
  }
}
