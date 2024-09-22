# Week 2 Homework

## 安裝的 Node.js 版本

1. **安裝哪個版本？**
   - 安裝的是 Node.js 的 LTS（Long Term Support，長期支持）版本，因為這是最穩定且經過長期維護的版本。目前（截至 2024/09），Node.js 的 LTS 版本是  v20.17.0。

2. **為什麼？**
   - LTS 版本的 Node.js 通常比最新的 Current 版本更穩定，且適合用於生產環境。LTS 版本會獲得長期的安全更新和修復，因此它對於穩定性有較高的保障。而最新的 Current 版本可能包含一些新功能，但這些功能可能還不夠穩定或存在潛在的 bug。因此，選擇 LTS 版本是一種平衡穩定性與功能性需求的最佳做法。

### 如果不是安裝 Node.js，那可以試著說明為什麼？（技術選型問題）

如果選擇不使用 Node.js，可以考慮的技術選型理由包括：

1. **現有技術棧的要求**：
   - 如果團隊現有的技術棧已經使用了其他技術，如 Python（Django、Flask）、Ruby（Rails），可能選擇延續現有技術，而不是採用 Node.js，避免團隊成員的學習曲線和轉換成本。

2. **應用類型的不同**：
   - Node.js 尤其擅長處理 I/O 密集型應用，例如即時聊天、多人線上遊戲或高並發的 API。但是如果應用主要是 CPU 密集型，例如數據處理、機器學習，可能會更適合使用其他語言，如 Python 或 C++。

3. **團隊專長**：
   - 如果開發團隊對其他語言或框架更為熟悉，選擇團隊熟悉的技術可以提高開發效率和降低風險。Node.js 主要使用 JavaScript，對於非 JavaScript 背景的團隊來說，可能不如其他語言適合。

### nvm 與 npm 分別是什麼

1. **nvm**（Node Version Manager）
   - `nvm` 是一個用來管理多個 Node.js 「版本」的工具。透過 `nvm`，你可以在同一台電腦上安裝並切換不同版本的 Node.js。這對於開發者來說非常有用，特別是在開發不同專案時，可能需要不同版本的 Node.js 和相關工具。

   **常用功能：**
   - 安裝特定版本的 Node.js：`nvm install <version>`
   - 切換 Node.js 版本：`nvm use <version>`
   - 檢視已安裝的 Node.js 版本：`nvm ls`

2. **npm**（Node Package Manager）
   - `npm` 是 Node.js 的包管理工具，用於管理 JavaScript 模組和庫。它可以讓開發者方便地安裝、更新和管理應用程式所需的第三方庫或模組。

   **常用功能：**
   - 安裝套件：`npm install <package-name>`
   - 更新套件：`npm update`
   - 初始化專案：`npm init`

nvm 主要用於管理 Node.js 版本，而 npm 則是用於管理專案所需的第三方套件，這兩者各司其職，互相搭配來提高開發效率。
