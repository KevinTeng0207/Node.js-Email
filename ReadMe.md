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
- req.body 是要傳送的 mail 網址
輸入 http://localhost:5000/send

```
看到
```
Send success!!!
```
表示成功
```

```
看到
```
Send fail!!!
```
表示失敗
:::
```

