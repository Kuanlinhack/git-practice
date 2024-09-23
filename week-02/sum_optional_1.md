# 挑戰題：有幾種寫法？

在不使用 `for` 或 `while` 等傳統迴圈的情況下，還有多種方式可以實現 `sum` 函式，以下介紹幾種不同的寫法：

## 1. 使用 `reduce()`
`reduce()` 是 JavaScript 中很常用來做累加的函式，它可以把陣列中的每個元素，依序加總成一個結果。

```javascript
function sum(ary) {
    return ary.reduce((acc, current) => acc + current, 0);
}

console.log(sum([1, 5, 3, 2])); // 11
```

**說明**：這個寫法是最簡單直接的，`reduce()` 會把累加器 `acc` 和陣列中的每個元素 `current` 相加，初始值設為 `0`，最後回傳結果。

---

## 2. 使用 `forEach()`
雖然 `forEach()` 也是遍歷陣列的方式，不過它不會回傳累加值，因此我們需要額外設一個變數來儲存結果。

```javascript
function sum(ary) {
    let total = 0;
    ary.forEach(value => total += value);
    return total;
}

console.log(sum([1, 5, 3, 2])); // 11
```

**說明**：在這個例子裡，我們用 `forEach()` 遍歷每個元素，並且加到 `total` 裡，但需要自己定義變數來保存結果。

---

## 3. 使用遞迴 (Recursion)
我們可以讓函式自己呼叫自己，來逐步加總陣列中的每個元素。

```javascript
function sum(ary) {
    if (ary.length === 0) return 0;
    return ary[0] + sum(ary.slice(1));
}

console.log(sum([1, 5, 3, 2])); // 11
```

**說明**：這個遞迴的方式會一直把陣列的第一個元素加上剩下元素的總和，直到陣列變空才停止。

 
---

## 4. 使用 `reduceRight()`
這個方法跟 `reduce()` 很像，只是它是從「右邊」開始累加，而不是從左邊。

```javascript
function sum(ary) {
    return ary.reduceRight((acc, current) => acc + current, 0);
}

console.log(sum([1, 5, 3, 2])); // 11
```

**說明**：`reduceRight()` 會從陣列的最後一個元素開始往前累加，效果跟 `reduce()` 一樣，只是順序相反。
