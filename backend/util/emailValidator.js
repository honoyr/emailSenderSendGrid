

class EmailValidator {

    /*
        EmailValidator is a class with methods to validate email address. 
         syntaxValidator - Syntax RegExr validation;
         smtpValidator - third party email validator with API call; 
            - status	E-mail status id: 1 – deliverable, 2 – risky, 3 – undeliverable, 4 – unknown
            - statusName	Name for status id: deliverable, risky, undeliverable, unknown
            - syntax	E-mail address syntax: 1 – correct, 0 – incorrect
            - mx	E-mail domain has MX records: 1 – yes, 0 – no
            - role	E-mail has a role (support, info, noreply, etc): 1 – yes, 0 – no
            - free	E-mail is on a free hosting (gmail.com, yahoo.com, etc): 1 – yes, 0 – no
            - disposable	E-mail is disposable: 1 – yes, 0 – no
    */
    // constructor(email) {
    //     this.email = email;
    // }
    // constructor() {
    //     this.emailValidator;
    // }

    errors = [];

    syntaxValidator(emailAddress)
    {
      /*
        syntax email validator method. Return false or true
      */
  
      const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  
      if (!emailAddress) return false;
  
      if (emailAddress.length > 256) return false;
  
      if (!tester.test(emailAddress)) return false;
  
      // Further checking of some things regex can't handle
      const [account, address] = emailAddress.split('@');
      if (account.length > 64) return false;
  
      const domainParts = address.split('.');
      if (domainParts.some(function (part) {
        return part.length > 63;
      })) return false;
  
      return true;
    }

    argValidator(msg) {

        // this.errors.push({
        //     "email": 'Not valid email addres "to"'
        // });
        
        if(!this.syntaxValidator(msg.to)){
            this.errors.push({
                "error": "Not valid email addres 'to'"
            });
            return false;
        }
        // console.log('here 1');
        if(!this.syntaxValidator(msg.from)){
            this.errors.push({
                "error": "Not valid email addres 'from'"
            });
            return false;
        }
        // console.log('here 2');
        // console.log(msg.subject, Boolean(msg.subject), !(msg.subject));
         console.log(msg.text, Boolean(msg.text), !(msg.text));
        console.log("TEXT in arg validator = " + msg.text);
        // console.log(msg.html);
            switch(true) {
                case !(msg.subject):
                  // console.log('here 4');
                    this.errors.push({
                        "error": "Subject doesn\'t exist"
                    });
                    return false;
                case !(msg.text):
                  // console.log('here 5');
                    this.errors.push({
                        "error": "Text doesn\'t exist"
                    });
                    return false;
                case !(msg.html):
                  // console.log('here 6');
                    this.errors.push({
                        "error": "HTML does\'nt exist"
                    });
                    return false;
                // default:
                //   console.log('here 7');
                //     this.errors.push({
                //         "undefined": "Undefined error",
                //     });
                //     return false;
              }
        // console.log('here 3');
        // this.errors.slice(0, 100);
        return true;
    }
    
}

module.exports = EmailValidator