const express=require('express');
const { check } = require('express-validator');
const router =express.Router();
const uomController=require('../controllers/master/uom');
const gstController=require('../controllers/master/gst');
const productController=require('../controllers/master/product');
const storeController=require('../controllers/master/store');
const priceController=require('../controllers/master/price');

const accountController=require('../controllers/master/account');


router.post('/uom',uomController.AddUom);    
router.get('/uom',uomController.GetUom);    

router.get('/gst',gstController.GetGst);    

router.get('/product',productController.GetProduct);    
router.get('/product/:productCode',productController.getProductByProductCode);    

router.post('/product',productController.AddProduct); 
router.post('/productUpdate',productController.updateProduct);

router.post('/store',storeController.AddStore);
router.get('/store',storeController.GetAllStore);
router.get('/store/:storeId',storeController.GetStoreById);

router.post('/price/add',priceController.AddPrice);
router.post('/price/update',priceController.updatePrice);
router.post('/price/addBulk',priceController.AddBulkPrice);
router.get('/price',priceController.GetAllPrice);

router.post('/account/addOrUpdateAddress',accountController.addOrUpdateAddress);
router.get('/account/getAddressByUser',accountController.getAddressByUser);

module.exports=router;