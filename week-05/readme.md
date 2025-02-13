# W05
網址:[個人作業4＿網址](https://week05.paperhelper.site/)，點擊過去可以看到個人作業 4 架設的 Express server。  
1. 你在哪裡購買網域的？  
  **GoDaddy**
2. DNS 的 A record 是什麼？  
DNS 的 **A record（Address Record）** 是 DNS 記錄的一種，它將域名（例如`example.com`）映射到一個**IPv4地址**。當用戶輸入一個網域名稱時，DNS 系統會查找對應的 A 記錄，然後將這個名稱轉換為一個 IP 地址，幫助瀏覽器找到並連接到對應的伺服器。

 **簡單比喻**：A record 就像是電話簿，將人名（域名）對應到一個具體的電話號碼（IPv4 地址），讓你能撥通對方。

3. DNS 的 NS record 是什麼？  
**NS record（Name Server Record）** 是另一種 DNS 記錄，它指定哪個伺服器負責處理這個網域的 DNS 查詢。簡單來說，它告訴 DNS 系統「這個網域的 DNS 查詢要去這些指定的 Name Servers 查詢」，這些 Name Servers 通常是由網域註冊商或你所選的 DNS 提供商提供的。

**比喻**：如果 DNS 是全球的地址簿，NS 記錄就像是告訴大家，哪個部門（Name Server）負責存放這本簿子，你要找地址的時候去那裡查。

4. Domain Name vs FQDN vs URL 這三者分別為何？  
- **Domain Name（網域名稱）**：這是網站的名稱，通常由主網域和一個頂級網域（TLD）組成，例如`example.com`。它是一個容易記的替代IP地址的名稱。
  
  **例子**：`example.com`就是一個網域名稱。

- **FQDN（完全限定網域名稱，Fully Qualified Domain Name）**：這是一個完整的網域名稱，包括主機名稱和完整的網域名稱結構。FQDN 包含了所有層級的域名（子域名、主域名和 TLD），並且清楚地指定了一個互聯網上唯一的資源。

  **例子**：`www.example.com.`是一個 FQDN，其中 "www" 是主機名，"example.com" 是網域，最後的 "." 是根域的指示符。

- **URL（統一資源定位符，Uniform Resource Locator）**：URL 是一個完整的網絡資源定位方式，除了網域名外，它還包括協議（如 HTTP、HTTPS）、端口號（若非預設）、路徑、查詢參數等，用來指引你去某個具體的網頁或資源。

  **例子**：`https://www.example.com/page?id=123` 是一個 URL，它不僅包含了網域名稱，也包括了協議（HTTPS）、頁面路徑（`/page`）及參數（`?id=123`）。

5. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？  

加上憑證，具體來說是使用 **SSL/TLS 憑證** 來啟用 **HTTPS**（超文本傳輸安全協議），原因如下：  

- **加密保護**：使用 HTTPS 會加密從用戶瀏覽器到網站伺服器之間傳輸的數據，這樣可以防止中間人攻擊或數據竊取，確保用戶的隱私和敏感資訊（如密碼、信用卡信息）不被惡意截取。  

- **提高信任度**：當網站使用 HTTPS 時，瀏覽器會顯示一個鎖狀圖標，這讓用戶知道這個網站是安全的。使用 HTTP 的網站在現代瀏覽器中會被標記為「不安全」，這會降低用戶信任並可能導致流量減少。  

- **SEO優勢**：Google 和其他搜尋引擎會優先顯示使用 HTTPS 的網站，因為它們被認為更安全。因此，使用 HTTPS 有助於提升網站的 SEO 排名。  
 
- **防範數據篡改**：使用 HTTPS 可以防止數據在傳輸過程中被篡改或偽造，這確保了用戶和伺服器之間的信息完整性。  

**總結**：HTTP 是未加密的，存在安全隱患；而 HTTPS 使用加密技術保護數據傳輸，能提高安全性、用戶信任度以及網站的搜尋引擎排名。  
 
