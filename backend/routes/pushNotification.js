const nodemailer = require("nodemailer");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const email = (req) => {
  var token = req.headers("authToken");
  console.log(token);
  if (!token) {
    return res.status(403).send("Access Denied");
  }

  const verified = jwt.verify(token, "yehtopSecretKeyHai");
  console.log(verified);
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "maazkhn17@gmail.com",
    pass: "xqssmkapzwskvgmw",
  },
});

const transportMail = router.get("/", async (req, res) => {
  // send mail with defined transport object
  var token = req.header("authToken");
  console.log(token);
  if (!token) {
    return res.status(403).send("Access Denied");
  }

  const verified = jwt.verify(token, "yehtopSecretKeyHai");
  //   console.log(verified.doc.email);

  const info = await transporter
    .sendMail({
      from: {
        name: "Maaz AirLine",
        address: "maazkhn17@gmail.com",
      }, // sender address
      to: [verified.doc.email], // list of receivers
      subject: "Congratulations !", // Subject line
      text: "Hello world? NOWW", // plain text body
      html: "<h2>Congratulations! Your ticket has been booked</h2><img src='https://th.bing.com/th/id/OIP.n1YM6D2bByLFvmSYqst0DQAAAA?pid=ImgDet&w=168.75&h=180&c=7&dpr=1.3' alt='Image description'>", // html body
    })
    .catch(console.error);

  res.status(200).send("Message sent: " + info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
});
// async..await is not allowed in global scope, must use a wrapper

// main().catch(console.error);

module.exports = router;
