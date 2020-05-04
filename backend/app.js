
const CustomEmailSender = require('./util/emailSender')
const EmailValidator = require('./util/emailValidator')
const cors = require('cors');

const express = require('express');
const app = express();
const port = 3000 // to .env 
app.use(cors());

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

app.post('/send-test-email', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.body, req.params)
  // const a = {
  //   "text": "hello",
  //   "Messega": "Ok"
  // };

  // console.log(CustomEmailSender);
  const emailSenderInst = new CustomEmailSender(process.env.SENDGRID_API_KEY);
  // const emailValidatorInst = new EmailValidator();
  // console.log(process.env.SENDGRID_API_KEY);
  // console.log(emailSenderInst);
  
  // console.log('is address valid TO ' + emailSenderInst.validateEmail(req.body.to))
  // console.log('is address' + req.body.from + ' valid FROM ' + emailSenderInst.validateEmail(req.body.from))

  // console.log('New validator = ' + emailValidatorInst.syntaxValidator(req.body.to))
  // console.log('New validator inherit method  ' + emailSenderInst.syntaxValidator(req.body.to))

 
  // console.log('Errors: ' + JSON.stringify(emailSenderInst.errors));

  const emailTemplate = emailSenderInst.buildEmailTemplate(req.body.html, req.body.css); // rename to html
  // console.log(emailTemplate);
  const msg = emailSenderInst.postMsg(req.body, emailTemplate);

  //  console.log('All arg validator is = ' + emailSenderInst.argValidator(msg));

  // console.log(msg);
  // console.log(msg.to);
  // console.log(msg.subject);
  // console.log(msg.text);
  

  // console.log('New validator inherit method  ' + emailSenderInst.syntaxValidator(msg.to))
  // console.log('All arg validator inherit method  = ' + emailSenderInst.argValidator(msg));
 

  if (emailSenderInst.argValidator(msg)){
    emailSenderInst.Send(msg).then((res) => {
    })
  }

  console.log('Errors: ' + JSON.stringify(emailSenderInst.errors));
  // console.log(res);

  // emailSenderInst.Send(msg).then((res) => {
  // })
  

  // console.log('Status =' + emailSenderInst.errors + '| bool = ' + Array.isArray(emailSenderInst.errors) + '| Lenght =' + emailSenderInst.errors.length);
  // console.log(JSON.stringify(emailSenderInst));
  // console.log(emailSenderInst);
  
  if (Array.isArray(emailSenderInst.errors) && emailSenderInst.errors.length){
    console.log("Res: -", "Erroe: "+JSON.stringify(emailSenderInst.errors));
    res.status(400).json(JSON.stringify(emailSenderInst.errors));
  }
      
  else
      res.status(202).json(JSON.stringify("{Status: Ok}"));
});



