//https://leetcode.com/problems/decode-string/description/

function decodeString(s: string): string {
  let stack: string[] = [],
    len = s.length;
  for (let ch of s) {
    if (ch !== "]") {
      stack.push(ch);
      continue;
    }

    let str = "";
    while (stack.length > 0 && stack[stack.length - 1] !== "[") {
      str = stack.pop() + str;
    }
    if (stack[stack.length - 1] === "[") stack.pop();

    let multiplier = "";
    while (
      stack.length > 0 &&
      Number(stack[stack.length - 1]) >= 0 &&
      Number(stack[stack.length - 1]) <= 9
    ) {
      multiplier = stack.pop() + multiplier;
    }
    let resolved = "";
    for (let j = 0; j < Number(multiplier); j++) {
      resolved += str;
    }
    stack.push(resolved);
  }
  return stack.join("");
}
