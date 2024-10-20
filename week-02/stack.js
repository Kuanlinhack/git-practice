// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // # 有特別的意思嗎？請以註解回覆。
  // # 表示這個屬性是私有的，只有在這個類別內部可以存取
  #items;

  constructor() {
    this.#items = [];
  }

  // 在 stack 頂部加入元素
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) {
      console.warn('Cannot pop from an empty stack.');
      return null; // 或者可以選擇拋出錯誤
    }
    return this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) {
      console.warn('Cannot peek at an empty stack.');
      return null; // 或者可以選擇拋出錯誤
    }
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items.toString());
  }
}
