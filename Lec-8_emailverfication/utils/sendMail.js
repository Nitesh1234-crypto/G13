const nodemailer = require("nodemailer");
const sendMail=async (email,subject,message)=>{
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service:"gmail",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'apna email', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "please click the link to verify your email", // plain text body
    html: `<a href=${message}>Link</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
}

module.exports.sendMail=sendMail;
