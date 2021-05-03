const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const mailconfig = require('./email.json');

app.use(express.json()); // post解析body
app.get('/', (req, res) => { // '/'是指專案的根目錄路徑
    res.send('Travel API!');
});

var transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    service: 'gmail',
    auth: {
        user: mailconfig.Gmail.user,
        pass: mailconfig.Gmail.pass
    }
});

app.post('/send', (req, res) => { // '/'是指專案的根目錄路徑

    var mailOptions = {
        from: mailconfig.Gmail.user,
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'Nice to meet you！'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            // console.log(error);
            res.send('Send success!!!');
        } else {
            // console.log('Email sent: ' + info.response);
            res.send('Send fail!!!');
        }
    });

});

const port = process.env.PORT || 5000; // 修改port, For example url: localhost:5000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});