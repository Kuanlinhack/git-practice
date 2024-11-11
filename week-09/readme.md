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

## 心得與想法

你的感想是什麼？你收穫了什麼？
