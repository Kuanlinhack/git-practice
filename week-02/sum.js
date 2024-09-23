// ary: number array
function sum(ary) {
    // 使用 reduce 方法將陣列中的所有數字相加
    return ary.reduce((acc, curr) => acc + curr, 0);
}

// 測試 sum 函式，應該輸出 11
console.log(sum([1, 5, 3, 2])); // 11
