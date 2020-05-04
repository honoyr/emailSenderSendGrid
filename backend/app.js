
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
  // console.log(req.body, req.params)
  const emailSenderInst = new CustomEmailSender(process.env.SENDGRID_API_KEY);
  const emailTemplate = emailSenderInst.buildEmailTemplate(req.body.html, req.body.css);
  const msg = emailSenderInst.postMsg(req.body, emailTemplate);
  if (emailSenderInst.argValidator(msg)) {
    const a = emailSenderInst.Send(msg).then((res) => {
    })
    res.status(202).json(JSON.stringify("{Status: Ok}"));
    // console.log(`Message:  = ` + JSON.stringify(a));
  }
  else if (Array.isArray(emailSenderInst.errors) && emailSenderInst.errors.length) {
    console.log("Error: " + JSON.stringify(emailSenderInst.errors));
    res.status(400).json(JSON.stringify(emailSenderInst.errors));
  }
});

