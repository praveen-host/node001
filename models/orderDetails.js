const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const OrderDetail = sequelize.define('orderDetail', {
    
    orderId:{
        type: Sequelize.BIGINT,
        allowNull: false
    },  
    productCode: {
        type: Sequelize.STRING,
        allowNull: false
    } ,
    orderedQty: {
        type: Sequelize.INTEGER,
        defaultValue:0
    }, 
    despatchedQty: {
        type: Sequelize.INTEGER,
        defaultValue:0
    }, 
    acceptedQty: {
        type: Sequelize.INTEGER,
        defaultValue:0
    },    
    value: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue:0
    },    
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:'A'
    } 
});
     
module.exports = OrderDetail; 

