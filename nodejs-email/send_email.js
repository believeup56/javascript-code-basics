var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'believeup56@gmail.com',
        pass: 'purwokerto97'
    }
});

var mailOptions = {
    from: 'believeup56@gmail.com',
    to: 'adamyunian56@gmail.com, webprograming56@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});