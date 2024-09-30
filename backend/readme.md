## package.json 中的 dependencies 與 devDependencies 分別是什麼
 - `dependencies` 是指專案運行時所需要的核心套件，例如 Express，它是在專案中必須的。
 - `devDependencies` 則是開發階段所需的工具，例如測試工具或編譯工具。這些套件在實際運行專案時不一定需要。
## package.json 中的 scripts 這個區塊怎麼用？
 `scripts` 讓我們可以定義一些簡便的命令來執行常用的操作。例如：
 ```json
 "scripts": {
   "start": "node app.js"
 }
 ```
 這樣我們只需執行 `npm start` 就可以啟動伺服器，而不用每次都輸入 `node app.js`。
## Port number 要怎麼以環境變數來設定？
 可以通過 `process.env.PORT` 來動態設定伺服器的監聽 Port。啟動時，只需在命令行中設置環境變數，例如：
 ```bash
 PORT=4000 node app.js
 ```
## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
 - **應該上傳的檔案**：`package.json`、`app.js` 等描述專案的基本檔案。因為這些檔案是讓別人能理解並運行專案的核心。
 - **不應上傳的檔案**：`node_modules/`、`.env`。`node_modules` 可以通過 `npm install` 自動生成，沒必要上傳，而 `.env` 通常包含敏感的環境變數，例如 API Key，應避免公開。

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？
- **CommonJS (CJS)** 使用 `require` 和 `module.exports` 來導入和導出模組，這是 Node.js 中常見的模組系統。
  ```javascript
  const express = require('express');
  module.exports = app;
  ```
- **ESM (ECMAScript Modules)** 使用 `import` 和 `export`，這是 JavaScript 的標準模組系統。要使用 ESM，需在 `package.json` 中設置 `"type": "module"` 或使用 `.mjs` 副檔名。
  ```javascript
  import express from 'express';
  export default app;
  ```
## 進階問題

1. **localhost 是什麼？**
   `localhost` 就是指本機的 IP 位址，一般是 `127.0.0.1`。只在自己的電腦上使用，不會對外部網路公開。

2. **curl 是什麼？**
   `curl` 是一個命令行工具，用來發送 HTTP 請求。我們可以用它來測試伺服器，確認伺服器是否能夠正確回應。例如：
   ```bash
   curl http://localhost:3000/
   ```
   會發送一個 GET 請求到本機伺服器，檢查它的回應。
