// Mengirim file text

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'your password'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'yourfriend@gmail.com',
    subject: 'Sending Email using Nodejs',
    html: '<h1>Welcome</h1><p>That was easy!</p>',
    attachments: [
        {
            filename: 'text1.txt',
            content: 'hello world!'
        }
    ]
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});