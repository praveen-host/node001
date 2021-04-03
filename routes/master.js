const express=require('express');
const { check } = require('express-validator');
const router =express.Router();
const uomController=require('../controllers/master/uom');
const gstController=require('../controllers/master/gst');
const productController=require('../controllers/master/product');

//const uom=require('../models/uom');


router.post('/uom',uomController.AddUom);    
router.get('/uom',uomController.GetUom);    

router.get('/gst',gstController.GetGst);    

router.get('/product',productController.GetProduct);    
router.get('/product/:productCode',productController.getProductByProductCode);    

router.post('/product',productController.AddProduct); 
router.post('/productUpdate',productController.updateProduct);


module.exports=router;