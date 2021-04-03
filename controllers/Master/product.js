const { body, validationResult } = require('express-validator');
const formidable = require('formidable')

var fs = require('fs');
const path = require('path');
const product= require('../../models/product');
const productImage= require('../../models/productImage');
const sequelize = require('../../util/database');

exports.GetProduct=(req,res,next)=>{
     
    product.findAll()
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
}

exports.AddProduct=(req,res,next)=>{
    
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        if (err) {
            console.error(err.message);
            res.status(401).json({hasError:true,errors:err });     
        }
        else       
            sequelize.transaction().then(function(t){
                product.create(fields,{transaction:t})
                .then((d)=>{   
                    var oldPath = files.Image.path;
                    var ext=files.Image.name.split('.'),
                        fileName=Date.now()+'.'+ ext[ext.length-1];
                    
                    var newPath = path.join(appRoot, 'assets/images/product') + '/'+fileName;

                    var rawData = fs.readFileSync(oldPath);
                
                    fs.writeFile(newPath, rawData, function(err){
                        if(err) console.log(err)
                        else{
                            productImage.create({productCode:fields.productCode,fileName:fileName},{transaction:t})
                            .then((x)=>{
                                t.commit();
                                res.status(200).json({hasError:false, message:"Product is created successfully."});
                            })
                            .catch((error)=>{
                                t.rollback();
                                console.log('Error............');
                                console.log(error);
                                res.status(401).json({hasError:true,errors:error });  
                            });
                        }
                    });
                });                    

            }).then(function(result){
                
            }).catch((error)=>{
                   
            });
                   
    });

    // console.log(req.body);
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(401).json({ hasError:true,errors: errors.array() });
    // } 
 
}

exports.updateProduct=(req,res,next)=>{
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        product.update(
            fields,
            {where: {productCode:fields.productCode}}
        )
        .then((d)=>{ 
            res.status(200).json({hasError:false});     
        })
        .catch((error)=>{
            console.log(error);
            res.status(401).json({hasError:true,errors:error });         
        });    
    });

}

exports.getProductByProductCode=(req,res,next)=>{
    product.findOne({ where: {productCode: req.params.productCode} })
    .then((d)=>{       
        console.log(d); 
        res.status(200).json(d);
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({hasError:true,errors:err });     
    });
    console.log('Inside getProductByProductCode'+req.params.productCode);
}

