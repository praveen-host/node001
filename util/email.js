var nodemailer = require('nodemailer');

const SendEmail=(emailId,subject,body)=>{
    
    return new Promise(function(resolve, reject){
        var transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure: false,
            //service: 'gmail',
            auth: {
              user: 'sshoponlinedemo@gmail.com',
              pass: 'yadav@1988@'
            }
        });
          
        var mailOptions = {
            from: 'sshoponlinedemo@gmail.com',
            to: emailId,
            subject: subject,
            html: body
        };
          
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                reject(Error(error));                    
            } else {
                console.log('Email sent: ' + info.response);
                resolve('Email sent: ' + info.response);
            }
        });
    });
    
}

exports.SendEmail=SendEmail;