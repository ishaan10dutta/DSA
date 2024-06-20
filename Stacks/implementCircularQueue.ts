//https://leetcode.com/problems/design-circular-queue/

// Time Complexity: O(1)
// Space Complexity: O(N)
class MyCircularQueue {
    private q: number[]
    private cnt: number
    private sz: number
    private headIdx: number

    constructor(k: number) {
        // the queue holding the elements for the circular queue
        this.q = []
        // the number of elements in the circular queue
        this.cnt = 0
        // queue size
        this.sz = k
        // the idx of the head element
        this.headIdx = 0
    }

    enQueue(value: number): boolean {
        // handle full case
        if (this.isFull()) return false
        // set the value 
        this.q[(this.headIdx + this.cnt) % this.sz] = value
        // increase the number of elements by 1
        this.cnt += 1
        return true
    }

    deQueue(): boolean {
        // handle empty case
        if (this.isEmpty()) return false
        // update the head index
        this.headIdx = (this.headIdx + 1) % this.sz
        // decrease the number of elements by 1
        this.cnt -= 1
        return true
    }

    Front(): number {
        // handle empty queue case
        if (this.isEmpty()) return -1
        // return the head element
        return this.q[this.headIdx]
    }

    Rear(): number {
        // handle empty queue case
        if (this.isEmpty()) return -1
        // Given an array of size of 4, we can find the tail using the formula
        // tailIdx = (headIdx + cnt - 1) % sz
        // e.g. [0 1 2] 3
        // headIdx = 0, cnt = 3, sz = 4, tailIdx = (0 + 3 - 1) % 4 = 2
        // e.g. 0 [1 2 3]
        // headIdx = 1, cnt = 3, sz = 4, tailIdx = (1 + 3 - 1) % 4 = 3
        // e.g. 0] 1 [2 3
        // headIdx = 2, cnt = 3, sz = 4, tailIdx = (2 + 3 - 1) % 4 = 0
        return this.q[(this.headIdx + this.cnt - 1) % this.sz]
    }

    isEmpty(): boolean {
        // no element in the queue
        return this.cnt == 0
    }

    isFull(): boolean {
        // return true if the count is equal to the queue size
        // else return false
        return this.cnt == this.sz
    }    
}