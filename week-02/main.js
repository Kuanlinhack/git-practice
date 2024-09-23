// main.js
// 以 Module 的方式匯入
import Stack from './stack.js';

let stack = new Stack();
console.log('Initial stack:');
stack.print();

stack.push(5);
stack.push(8);
console.log('Stack after pushing 5 and 8:');
stack.print();

// 測試 pop 方法
console.log('Popped element:', stack.pop()); // 8
console.log('Stack after popping:');
stack.print(); // [5]

// 測試 peek 方法
console.log('Top element (peek):', stack.peek()); // 5

// 測試 isEmpty 方法
console.log('Is stack empty?', stack.isEmpty()); // false

// 測試 size 方法
console.log('Stack size:', stack.size()); // 1

// 測試 clear 方法
stack.clear();
console.log('Is stack empty after clearing?', stack.isEmpty()); // true
console.log('Stack after clearing:');
stack.print(); // []
