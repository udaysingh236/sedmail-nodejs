require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_URL,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

sendmail = () => {
    let mainOptions = {
        from: "info-noreply@exmaple.com",
        to: "mailid@sreceiver.com", //use your registered mailgun id here
        subject: 'This is a test mail',
        html: `<h1>This is not a spam </h1>`,
    }

    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`mail sent ${info.response}`);
            
        }
    })
}

sendmail();