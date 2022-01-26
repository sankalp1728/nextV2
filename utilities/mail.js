const nodemailer = require('nodemailer')


//here the user is an object that contains the user:mail, user:password, recievers Array, Subject, Text, HTML
const mailer = async(recievers, subject, text, html=null) =>{

    var recieverString = ""
    for(i = 0 ; i<recievers.length ; i++){
        if(i === recievers.length - 1){
            recieverString += recievers[i];
            continue
        }
        recieverString += recievers[i] + ', ';
    }

    console.log(recieverString)

    var transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 587,
        secure : false,
        auth: {
          user: "rishabh@geeksatweb.com",
          pass: "Rip1996@"
        }
      });

    let mailOptions = {
        from: "rishabh@geeksatweb.com",
        to: recieverString,
        subject : subject,
        text : text,
        html : html
    };

    var flag = null
    return new Promise(function (resolve, reject){
        transporter.sendMail(mailOptions, (err, info) => {
           if (err) {
                console.log("error: ", err);
                reject(false);
           } else {
                console.log(`Mail sent successfully!`);
                resolve(true);
           }
        })
     })
}


module.exports = mailer