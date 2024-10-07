function fib(n) {
    if (n==0)
        return 0;
    if (n==1)
        return 1;
    return fib(n-1) + fib(n-2);
  }
  
console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(5)); // 5
console.log(fib(10) ); // 55

# 其他種做法

## 使用迴圈來計算 Fibonacci 數列，這樣可以避免遞迴造成的重複計算。
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, sum;
    for (let i = 2; i <= n; i++) {
        sum = a + b; // 計算 Fibonacci 數
        a = b;       // 更新 a 為前一個 Fibonacci 數
        b = sum;     // 更新 b 為當前 Fibonacci 數
    }
    return b; // 返回第 n 個 Fibonacci 數
}

## 動態規劃 使用一個數組來存儲已計算的 Fibonacci 數，這樣可以避免重複計算。

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // 計算 Fibonacci 數
    }
    return dp[n]; // 返回第 n 個 Fibonacci 數
}

 

