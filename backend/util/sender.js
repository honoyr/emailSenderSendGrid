
const sgMail = require('@sendgrid/mail');

class Sender {
    constructor(key) {
      this.sender = sgMail.setApiKey(key);
    }
    letsSend(msg) {
        // console.log('this = ' + this.sender);
        // sgMail.send(msg);
        this.sender.send(msg)
      return "I have a " + this.sender;
    }
  }

  module.exports = Sender