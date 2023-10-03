const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});

const send_email = (sendToEmail, content) => {
  var mailOptions = {
    from: `${process.env.EMAIL_USER}`,
    to: sendToEmail,
    subject: "Sending Email using Node.js",
    html: content,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = send_email;
