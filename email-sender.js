var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aaaaaaaaaa@gmail.com",
    pass: "1111111111",
  },
});

var mailOptions = {
  from: "hhhhhhhhhh@gmail.com",
  to: "mmmmmmm@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
