# Express JS API Mailer

## 安裝套件
```
npm install express
npm install nodemailer
```
## DB config

### **檔案名稱：dbconfig.json**

```json
{
    "Gmail": {
        "user": "email",
        "pass": "password"
    }
}
```
## 執行

```
node email.js
```

## 範例
1. 輸入 http://localhost:5000/send
2. **收件人要從 req 傳輸**
```javascript
    from: mailconfig.Gmail.user, //寄件人
    to: req.body, //收件人
    subject: '信件標題',
    text: '信件內容'
```
```
Send success!!!
表示成功
```

```
Send fail!!!
表示失敗
```

