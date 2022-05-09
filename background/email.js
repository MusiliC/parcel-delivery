const nodemailer = require("nodemailer");
require("dotenv").config();
const sendMail = (email) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "musili014@outlook.com",
      pass: "musili@254",
    },
  });

  const options = {
    from: "musili014@outlook.com",
    to: email,
    subject: "sending an email using node js",

    text: "that was easy",
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(error);
    } else {
      console.log("Email sent :" + info.response);
    }
  });
};
module.exports = { sendMail };
