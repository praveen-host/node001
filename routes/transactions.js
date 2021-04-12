const express=require('express'); 
const router =express.Router();
const salesOrder=require('../controllers/transactions/salesOrder');

router.post('/',salesOrder.createOrder);

module.exports=router;