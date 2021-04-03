const { body, validationResult } = require('express-validator');
const uom= require('../../models/uom');

// public IActionResult AddUom([FromBody]Model.Uom objValue)    
// {                
//     var uomObj=new DbAccess.Uom();
//     var user = uomObj.AddSingleUom(objValue);    
//     var response=Ok(new {hasError="No", message="Uom is created successfully."});    
//     return response;    
// }

// [HttpGet]    
// public IActionResult getUom()    
// {                
//     var uomObj=new DbAccess.Uom();
//     var uoms = uomObj.getUom();    
//     var response=Ok(uoms);    
//     return response;    
// }   


exports.GetUom=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    uom.findAll()
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.AddUom=(req,res,next)=>{
    
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ hasError:true,errors: errors.array() });
    } 
    uom.create(req.body)
    .then((d)=>{        
        res.status(200).json({hasError:false, message:"Uom is created successfully."});
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

