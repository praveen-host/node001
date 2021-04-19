const sockets=require('../../util/socket');
const { body, validationResult } = require('express-validator');
const price= require('../../models/price');



exports.GetPriceById=(req,res,next)=>{
    
    price.findOne({ 
        where: {priceId: req.params.priceId}
     })
    .then((d)=>{       
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.GetAllPrice=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    price.findAll({raw : true})
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.AddPrice=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    price.create(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Store is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.updatePrice=(req,res,next)=>{
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    }
    
    price.findOne({ 
        where: {productCode: req.body.productCode, storeId:req.body.storeId}
        ,raw : true
     })
    .then((d)=>{       
        //res.status(200).json(d);
        price.update(
            req.body,
            {where: {productCode:req.body.productCode,storeId:req.body.storeId}}
        )
        .then((d)=>{
            sockets["abc@gmail.com"].emit('price', 'Price changed'); 
            res.status(200).json({hasError:false, message:"Price is updated successfully."});
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });

}

exports.AddBulkPrice=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    price.bulkCreate(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Store is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

