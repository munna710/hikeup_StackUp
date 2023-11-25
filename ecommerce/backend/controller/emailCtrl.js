const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

const sendEmail = asyncHandler(async (data,req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.MP
            }
        });
        const mailOptions = {
            from: '"hey" <abc@gmail.com>',
            to: data.email,
            subject: data.subject,
            html: data.html
        };
        const info = await transporter.sendMail(mailOptions);
        res.json(info);
    } catch (error) {
        throw new Error(error);
    }
}
);
module.exports = sendEmail;