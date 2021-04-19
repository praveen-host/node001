const { body, validationResult } = require('express-validator');
const formidable = require('formidable')

var fs = require('fs');
const path = require('path');
const order= require('../../models/order');
const orderDetail= require('../../models/orderDetails');
const sequelize = require('../../util/database');
 

exports.getPurchasesOrderByBuyer=(req,res,next)=>{
    console.log(req.userInfo);
    sequelize.query(
    'select orderId,orderDate orderPalcedOn,orderDate scheduledFor, orderStatus,orderValue,orderValue  finalAmountToPay    from orders where buyerUserId=:userName and orderDate>=:fromDate and orderDate<=:toDate',
        { replacements: { userName: req.userInfo.userId,fromDate:'2021-04-01',toDate:'2021-04-30' }, type: sequelize.QueryTypes.SELECT }
    )
    .then((d)=> {
       res.status(200).json(d);
    })
    .catch((error)=>{
        console.log(error);
    });
}