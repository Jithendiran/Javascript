require("dotenv").config({ path: "../.env" });
const nodemailer = require("nodemailer");

const otpGenerator = () => Math.floor(100000 + Math.random() * 900000);

let otp = "";

const sendMail = async (email) => {
  try {
    otp = otpGenerator();

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: email, // list of receivers
      subject: "Email Verification ", // Subject line
      html: `<p>Click here : <a> http://localhost:${process.env.PORT}/verify/${otp}</a></p>`,
    });

    // return "Message sent: %s", info.messageId;
    return otp;
  } catch (error) {
    Promise.reject(error);
  }
};
// const verifyOTP = (userOTP) => {
//   if (userOTP == otp) {
//     return true;
//   } else {
//     return false;
//   }
// };

module.exports = { sendMail };
