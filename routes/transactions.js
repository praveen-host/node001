const express=require('express'); 
const router =express.Router();

const salesOrder=require('../controllers/transactions/salesOrder');
const purchasesOrder=require('../controllers/transactions/purchasesOrder');

router.post('/createOrder',salesOrder.createOrder);

router.get('/GetSalesOrders',salesOrder.getOrder);

router.get('/getPurchasesOrderByBuyer',purchasesOrder.getPurchasesOrderByBuyer);

module.exports=router;