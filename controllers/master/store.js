const { body, validationResult } = require('express-validator');
const store= require('../../models/store');



exports.GetStoreById=(req,res,next)=>{
    
    store.findOne({ 
        where: {storeId: req.params.storeId}
     })
    .then((d)=>{       
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.GetAllStore=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    store.findAll()
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.AddStore=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    store.create(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Store is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

