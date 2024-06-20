class CustomStack {
  stack: number[];
  maxSize: number;
  constructor(maxSize: number) {
    this.stack = [];
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) this.stack.push(x);
  }

  pop(): number {
    if (this.stack.length === 0) return -1;
    return this.stack.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    let min = Math.min(k, this.stack.length);
    for (let i = 0; i < min; i++) {
      this.stack[i] += val;
    }
  }
}

