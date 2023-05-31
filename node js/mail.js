var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20tuec216@skct.edu.in',
    pass: '*******'
  }
});

var mailOptions = {
  from: '20tuec216@skct.edu.in',
  to: '20tuec218@skct.edu.in,srikanthkarthi2003@gmail.com',
  subject: 'Sending Email using Node.js',
  text: ' The Nodemailer module makes it easy to send emails from your computer.Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent sucessfully');
  }
}); 