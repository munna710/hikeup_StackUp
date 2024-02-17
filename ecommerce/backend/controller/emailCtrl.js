const sgMail = require('@sendgrid/mail');
const asyncHandler = require('express-async-handler');

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // replace with your SendGrid API key

const sendEmail = asyncHandler(async (data, req, res) => {
  try {
    const msg = {
      to: data.email,
      from: 'thisismunna710@gmail.com', // replace with your email
      subject: data.subject,
      html: data.html,
    };

    const response = await sgMail.send(msg);
    res.json(response);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = sendEmail;