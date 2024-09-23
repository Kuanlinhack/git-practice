// (optional) 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum(n) {
    // 運用公式解
    return n * (n + 1) / 2;
}

console.log(sum(10)); // 55
