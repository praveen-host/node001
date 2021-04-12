const { body, validationResult } = require('express-validator');
const formidable = require('formidable')

var fs = require('fs');
const path = require('path');
const order= require('../../models/order');
const orderDetail= require('../../models/orderDetails');
const sequelize = require('../../util/database');

exports.createOrder=(req,res,next)=>{
    console.log(req.body);
    res.status(200).json({hasError:false, message:"Product is created successfully."});
    /*
    sequelize.transaction().then(function(t){
        order.create(req.body,{transaction:t})
        .then((d)=>{

        })
        .catch((error)=>{

        });
    });*/

}

/*
exports.updateProduct=(req,res,next)=>{
    console.log('Test...');
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        product.update(
            fields,
            {where: {productCode:fields.productCode}}
        )
        .then((d)=>{ 
            res.status(200).json({hasError:false, message:"Product is update successfully."});
            //Uncomment to save image file 
            /*
            var oldPath = files.Image.path;
            var ext=files.Image.name.split('.'),
                fileName=Date.now()+'.'+ ext[ext.length-1];
            
            var newPath = path.join(appRoot, 'assets/images/product') + '/'+fileName;

            var rawData = fs.readFileSync(oldPath);
        
            fs.writeFile(newPath, rawData, function(err){
                if(err) console.log(err)
                else{ 
                    if(fields.imageId!=-1){ 
                        productImage.update(
                            {fileName:fileName},
                            {where: {imageId:fields.imageId}}
                        )
                        .then((x)=>{
                            console.log('Update success');
                            res.status(200).json({hasError:false, message:"Product is update successfully."});
                        })
                        .catch((error)=>{
                            console.log(error);
                            res.status(401).json({hasError:true,errors:error });  
                        });
                    }
                    else{
                        productImage.create({productCode:fields.productCode,fileName:fileName})
                        .then((x)=>{
                            res.status(200).json({hasError:false, message:"Product is created successfully."});
                        })
                        .catch((error)=>{
                            console.log(error);
                            res.status(401).json({hasError:true,errors:error });  
                        });
                    }


                }
            });

            
        })
        .catch((error)=>{
            console.log(error);
            res.status(401).json({hasError:true,errors:error });         
        });    
    });

}

exports.getProductByProductCode=(req,res,next)=>{
    product.findOne({ 
        where: {productCode: req.params.productCode},include:{model:productImage}
     })
    .then((d)=>{       
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}


exports.GetProduct=(req,res,next)=>{
     
    product.findAll({
        attributes:['productCode','skuName','uomSymbol','brand','category','shortDescription','longDescription','hsnCode'],
        include:{model:productImage,attributes:['imageId','fileName']}
    })
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}
*/
