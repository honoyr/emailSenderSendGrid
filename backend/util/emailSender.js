
const sgMail = require('@sendgrid/mail');
const EmailValidator = require('./emailValidator')

class CustomEmailSender extends EmailValidator {
  /*
      email Sender class 
  */
  emailSender = sgMail;

  constructor(key) {
    super();
    this.emailSender.setApiKey(key);

  }

  postMsg(body, emailTemplate) {
    const msg = {
      "to": body.to,
      "from": "glie@ya.ru", // to macros .env
      "subject": body.subject,
      "text": "and easy to do anywhere, even with Node.js",
      "html": emailTemplate,
    }
    return msg;
  }

  buildEmailTemplate(emailTempateBody, css) {
    const emailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width" name="viewport"/>
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"/>
    <!--<![endif]-->
    <style>${css}
    </style>
    <body>${emailTempateBody}</body></html>`;
    return emailTemplate;
  }

  async Send(msg) {
    /*
      buildAndSend 
      Params:
      msg= {
        to: 'g***lie@gmail.com',
        from: 'h***r@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      return
    */
    console.log(msg);
    try {
      const a = await this.emailSender.send(msg);
      return a
    }
    catch (e) {
      return e
    }
  }

  checkIsBounces(email) {
    console.log(email);
  }
}

module.exports = CustomEmailSender