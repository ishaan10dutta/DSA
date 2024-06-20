//https://leetcode.com/problems/lru-cache/

class DoubleLLNode {
  constructor(
    public key: number,
    public value: number,
    public prev: DoubleLLNode | null = null,
    public next: DoubleLLNode | null = null
  ) {}
}

class LRUCacheDLL {
  //Least recently used cache uses a map for O(1) lookup
  //and a double linked list for quick insert and remove
  //everytime there is a get or put operation, the item will be moved to the most right
  //effectly pushing all other items to the left
  //during put, when over size limit, remove the most left side's next item

  //old head stay at the left of the linked list
  //it's easy to have it there to locate the least recently use item as it's next
  private oldHead: DoubleLLNode = new DoubleLLNode(-1, -1);

  //new tail stay at the right of the linked list
  //it's easy to have it there to locate the most recently used (get or put) item, and insert most recently used item
  private newTail: DoubleLLNode = new DoubleLLNode(-1, -1);
  private map = new Map<number, DoubleLLNode>();
  capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    //initial state, nothing between head and tail, they are next to each other
    [this.oldHead.next, this.newTail.prev] = [this.newTail, this.oldHead];
  }

  private removeNode(node: DoubleLLNode) {
    //change pointers to remove the node from the linked list
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private insertLatest(node: DoubleLLNode) {
    //change pointers for both previous of new tail and new tail to insert the new node between them
    this.newTail.prev!.next = node;
    node.prev = this.newTail.prev;
    node.next = this.newTail;
    this.newTail.prev = node;
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;

    //get also triggers move, thus remove and insert to the most right
    const node = this.map.get(key);
    this.removeNode(node!);
    this.insertLatest(node!);
    return node!.value;
  }

  put(key: number, value: number): void {
    //if the key exists, update the value and move it to the most right

    if (this.map.has(key)) {
      const node = this.map.get(key);
      node!.value = value;
      this.removeNode(node!);
      this.insertLatest(node!);
    } else {
      //if not exists, insert the new key value pair to the most right
      //if over capacity, remove the least recently used item from the most left
      if (this.map.size === this.capacity) {
        this.map.delete(this.oldHead.next!.key);
        this.removeNode(this.oldHead.next!);
      }
      const node = new DoubleLLNode(key, value);
      this.map.set(key, node);
      this.insertLatest(node);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
