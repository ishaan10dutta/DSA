//https://leetcode.com/problems/min-stack/

class MinStack {
    // declare private stack
    private stack: { val: number, min: number}[];
    // declare private size
    private size: number;
    constructor() {
        // initialize stack with empty array
        this.stack = [];
        // initialize size to -1, this will give us ability to take last element like this.size instead of this.size - 1
        this.size = -1;
    }

    push(val: number): void {
        // check if stack is empty:
        if(this.size < 0) {
            // if true push first node to stack
            this.stack.push({ val, min: val })
        } else {
            // if false calculate min value of current node and push it into stack
            this.stack.push({ val, min: Math.min(this.stack[this.size].min, val)})
        }
        // increment size
        this.size++;
    }

    pop(): void {
        // pop node from stack
        this.stack.pop();
        // decrement size
        this.size--;
    }

    top(): number {
        // return val of top eleemnt from stack
        return this.stack[this.size].val;
    }

    getMin(): number {
        // return current minimum value of top stack node
        return this.stack[this.size].min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */