const { body, validationResult } = require('express-validator');
const gst= require('../../models/gst');


exports.GetGst=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    gst.findAll()
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.AddGst=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    gst.create(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Uom is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

