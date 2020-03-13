
// Chunk 3
const nodemailer = require('nodemailer');
const maiLGun = require('nodemailer-mailgun-transport'); 



const auth = {
    auth: {
        api_key: 'key-fd6cb16379f25dbb8b0076fc6185f3ea',
        domain: 'sandboxa3f42414b21c48c0873258d2e20bb705.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(maiLGun(auth));

// Chunk 4
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'timpadar.official@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;