const { body, validationResult } = require('express-validator');
const address= require('../../models/address');

exports.addOrUpdateAddress=(req,res,next)=>{
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    address.create(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Address is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.getAddressByUser=(req,res,next)=>{
    address.findAll()
    .then((d)=>{
        res.status(200).json(d);
    });
    
}