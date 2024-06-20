class MyStack {
    inputQueue: number[] = [];
    outputQueue: number[] = [];

    push(x: number): void {
        while (this.outputQueue.length) {
            this.inputQueue.unshift(this.outputQueue.shift());
        }
        this.inputQueue.unshift(x);
        while(this.inputQueue.length) {
            this.outputQueue.unshift(this.inputQueue.shift());
        }
    }

    pop(): number {
        while (this.outputQueue.length) {
            this.inputQueue.unshift(this.outputQueue.shift());
        }
        const num = this.inputQueue.shift();
         while(this.inputQueue.length) {
            this.outputQueue.unshift(this.inputQueue.shift());
        };
        return num ?? -1;
    }

    top(): number {
        return this.outputQueue[this.outputQueue.length - 1];

    }

    empty(): boolean {
        return this.outputQueue.length === 0;
    }
}


/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */