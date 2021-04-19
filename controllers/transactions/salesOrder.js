const { body, validationResult } = require('express-validator');
const formidable = require('formidable')

var fs = require('fs');
const path = require('path');
const order= require('../../models/order');
const orderDetail= require('../../models/orderDetails');
const sequelize = require('../../util/database');

exports.createOrder=(req,res,next)=>{
    
    var orderData=req.body;
    var orderDetailData=orderData.orderDetals;     
    
    sequelize.transaction().then(function(t){

        order.create({orderDate:(new Date()).toISOString(), sellerUserId:1,buyerUserId:1,orderStatus:'S',orderValue:orderData.orderValue},{transaction:t})
        .then((result)=>{
            orderDetailData=orderDetailData.map(d=>({...d,orderId:result.orderId}));

            console.log(orderDetailData);
            orderDetail.bulkCreate(orderDetailData,{transaction:t})
            .then(()=>{
                t.commit();
                res.status(200).json({hasError:false, message:"Order is created successfully."});
            }) 
            
        })
        .catch((error)=>{
            t.rollback();
            console.log(error);
            res.status(401).json({hasError:false, message:error.message});
        });
    });

}

exports.getOrder=(req,res,next)=>{
console.log(res.body);
    sequelize.query(
    'select orderId,orderDate orderPalcedOn,orderDate scheduledFor, orderStatus,orderValue,orderValue  finalAmountToPay   from orders where sellerUserId=:userName and orderDate>=:fromDate and orderDate<=:toDate',
        { replacements: { userName: req.userInfo.userId,fromDate:'2021-04-01',toDate:'2021-04-30' }, type: sequelize.QueryTypes.SELECT }
    )
    .then((d)=> {
        console.log(d);

        res.status(200).json({'totalRecords':100,'orderList':d});
      // res.status(200).json(d);
    })
    .catch((error)=>{
        console.log(error);
    });
}