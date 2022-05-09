const nodemailer = require("nodemailer");
require("dotenv").config();

function createTransporter(config) {
  let transporter = nodemailer.createTransport(config);
  return transporter;
}

const defaultConfig = {
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
};
module.exports = {
  sendMail: async (email) => {
    const transporter = createTransporter(defaultConfig);
    await transporter.verify();
    await transporter.sendMail(email);
  },
};
