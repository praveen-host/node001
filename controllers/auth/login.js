const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

const mail=require('../../util/email');

const myCache=require('../../util/appcache');
const user= require('../../models/user');

exports.isUserExist=(req,res,next)=>{
    
    user.findOne({ where: {emailId: req.body.emailId} }).then(user => {        
        if (user) {
            res.status(400).json({message:'E-mail already in use'});
        }
        res.status(200).json({message:'EmailId is avalable'});
    }).catch((error)=>{
        res.status(400).json(error);
    });
}

exports.sendOtpToVerfiyEmail=(req,res,next)=>{
    var otp=Math.floor( Math.random() * (9999 - 1000) + 1000);

    var body = getMailBody(otp);
    mail.SendEmail(req.body.emailId,"ShopOnline - OTP to verifiy your emailId",body)
    .then(()=>{
        myCache.set(req.body.emailId,otp,300);
        res.status(200).json({ statusCode:200, hasError: false, message : "OTP is sent to "+req.body.emailId });
    })
    .catch((error)=>{
        res.status(400).json({ statusCode:400, hasError: true, message : error });
    });
    
}

exports.verifyOtpAndCreateUser=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if(myCache.has(req.body.emailId)){
        var otp=myCache.get(req.body.emailId);
        if(req.body.otp==otp){
            user.create(req.body)
            .then((d)=>{        
                res.status(200).json({hasError:false,token:"",message:"Invalid OTP"  })
            })
            .catch((err)=>{
                res.json(err);     
            });
        }
        res.status(401).json({hasError:true,token:"",message:"Invalid OTP"  })
    }
    res.status(401).json({hasError:true,token:"",message:"Invalid OTP"  })
    
}

exports.signin=(req,res,next)=>{
console.log('TEST');
    user.findOne({ where: {emailId: req.body.emailId} }).then(user => {        
        
        if (user) {
            console.log(user.dataValues);
            if(user.dataValues.password){//==req.body.password
                var tokenString=getJSONWebToken(user.dataValues,120);
                console.log(tokenString);
                res.status(200).json({token:tokenString,expiresIn:7200,userName:user.dataValues.emailId });
            }                
            else    
                res.status(400).json({message:'E-mail already in use'});
        }
        else
            res.status(200).json({message:'EmailId is avalable'});
    }).catch((error)=>{
        res.status(400).json(error);
    });

    // var user = loginObj.AuthenticateUser(login);    
    
    // if (user != null)    
    // {    
    //     var tokenString = GenerateJSONWebToken(user,120);    
    //     response = Ok(new { token = tokenString,expiresIn=7200,userName=login.emailId });    
    // }    

    // return response;    
}

exports.validateUser=(req,res,next)=>{
    res.json({
        title:'Hello World'
    });
}

getJSONWebToken=(user,minute)=>{
    
     var token= jwt.sign({foo:'bar'}, "ThisismySecretKey");
     
     return token;
}

getMailBody=(randomOtp)=>{

    var mailBody="<table style='padding: 0px 15px; height: 147px; width: 0%;' border='0' width='92%' cellspacing='0' cellpadding='0' align='center'>";
    mailBody+="<tbody><tr style='height: 147px;'><td style='font-family: Arial; font-size: 14px; color: #333333; height: 147px;'>";
    mailBody+="<p>Dear User,</p><p><br />The One Time Password (<span style='background-color: #fff100; color: black;' data-markjs='true' data-ogac='' data-ogab='' data-ogsc='' data-ogsb=''>OTP</span>) for your shopOnline to verifiy your emailid is "+randomOtp+". The <span class='marktj4jdtqwp' style='background-color: #fff100; color: black;' data-markjs='true' data-ogac='' data-ogab='' data-ogsc='' data-ogsb=''>OTP</span> is valid for 5 mins or one successful attempt, ";
    mailBody+="whichever is earlier. Please do not share with anyone. <br /><br />Warm regards, <br />ShopOnline</p>";
    mailBody+="</td>   </tr>            </tbody>            </table>";
    return mailBody;
}

