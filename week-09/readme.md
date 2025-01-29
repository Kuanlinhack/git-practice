## 分為四個步驟：

1. 改掉配置文件中的語法問題
2. Kill 佔用 80 port 的程序
3. 更改防火牆權限
4. 給html 檔案權限

## Step 1：改掉配置文件中的語法問題

![image.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/image.png)


The error message indicates that there is a syntax error (`unexpected ";"`) in the NGINX configuration file, specifically at line 8 of `/etc/nginx/nginx.conf`.

解決方法：Remove any unnecessary `;`, ensuring each directive and block follows the correct NGINX syntax.

## Step 2： Kill 佔用 80 port 的程序

![image.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/image2.png)

The error message `bind() to 0.0.0.0:80 failed (98: Address already in use)` means that another process is already using port 80, which is preventing NGINX from binding to it.

解決方案：

![image.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/image3.png)

⇒ sudo kill 576

## Step 3： 處理防火牆問題

![image.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/image4.png)

解決方法：

1. 檢查 fw 的權限: `ls -ld /etc/iptables` 
2. 要添加一條規則：`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT`
3. 保存規則：`sudo iptables-save > /etc/iptables/rules.v4`
4. 再刪除這條：`sudo iptables -D INPUT -p tcp --dport 80 -j REJECT`
5. 最後：sudo chmod 755 /etc/iptables

## Step 4： 處理網頁權限問題

![image.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/image5.png)

解決方案：sudo chmod 644 /var/myweb/index.html

## Done!
![success.png](https://github.com/Kuanlinhack/git-practice/blob/main/week-09/images/success.png)

## 心得與想法

這次的 Troubleshooting Lab 是一次非常有收穫的經驗。剛開始時，對於如何著手排查問題感到有些迷茫，但隨著一步步摸索，加上參考前幾次的作業內容與文件，慢慢建立起了系統化的問題排查思維。  

整體來說，我遵循了以下步驟來進行 Debug：  

1. **發現問題**：確認哪個環節出錯，例如服務無法啟動、無法連線等。  
2. **探索問題**：檢查 log、測試不同指令，縮小問題範圍。  
3. **解決問題**：調整配置、修改防火牆規則、修正權限設定等，直到服務能正常運行。  

在這次 Lab 中，學到了很多重要的 troubleshooting 技巧，例如：  

- **確認服務是否啟動**：當 `curl localhost` 被拒絕時，可能是服務未啟動、啟動時遇到錯誤，或者被防火牆阻擋。  
- **檢查權限問題**：遇到 `Permission denied` 錯誤時，應該去確認檔案或目錄的權限是否正確。  
- **確認 port 是否被占用**：當 Nginx 啟動失敗時，可能是 80 port 被其他服務佔用，這時需要用 `netstat` 或 `lsof` 來查找佔用該 port 的 process，並停止它。  
- **防火牆設定**：iptables 規則可能會影響網路連線，這次也學到了如何修改 `rules.v4` 來讓設定在 reboot 後仍然生效。  

這次的 debugging 作業讓我覺得很像在玩密室逃脫、推理遊戲，透過層層分析與測試，逐步找出問題的根源，最後成功讓系統恢復正常時，真的很有成就感！此外，透過和同學們的討論，也學到了更多不同的 troubleshooting 方法，例如如何讓防火牆規則在重開機後依然生效、如何防止特定服務自動啟動等等。這次 Lab 是一次非常有趣的學習經驗，未來希望能在實際工作環境中應用這些技巧！
